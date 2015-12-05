var FollowToggle = function (el) {
  this.$el = $(el);
  this.userId = parseInt(this.$el.data('user-id'));
  this.followState = this.$el.data('initial-follow-state');
  this.render();
  this.bindEvents();
};

FollowToggle.prototype = {
  bindEvents: function () {
    this.$el.on("click", this.handleClick.bind(this));
  },

  render: function () {
    if (this.followState === "followed") {
      this.$el.text("Follow!");
    } else if (this.followState === "unfollowed") {
      this.$el.text("Unfollow!");
    }
  },

  handleClick: function (e) {
    e.preventDefault();
    var request = {
      url: "/users/" + this.userId + "/follow",
      dataType: "json",
      data: { user_id: this.userId },
      success: function () {
        console.log('hey');
        this.switchState();
        this.render();
      }.bind(this),
      error: function () {
        console.log("Failfest!");
      }
    };

    if (this.followState === "followed") {
      $.extend(request, {method: "DELETE"});
    } else if (this.followState === "unfollowed") {
      $.extend(request, {method: "POST"});
    }

    $.ajax(request);
  },

  switchState: function () {
    if (this.followState === "followed") {
      this.followState = "unfollowed";
    } else {
      this.followState = "followed";
    }
  }
};

module.exports = FollowToggle;
