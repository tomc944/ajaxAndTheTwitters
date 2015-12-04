var FollowToggle = function (el) {
  this.$el = $(el);
  this.userId = parseInt(this.$el.data('user-id'));
  this.followState =
      this.setFollowState(this.$el.data('initial-follow-state'));
  // this.setFollowState("true");
  this.render();
};

FollowToggle.prototype = {
  render: function () {
    if (this.followState === "followed") {
      this.$el.text("Follow!");
    } else if (this.followState === "unfollowed") {
      this.$el.text("Unfollow!");
    }
  },
  setFollowState: function (booleanState) {
    if (booleanState === true) {
      return "followed";
    } else if (booleanState === false) {
      return "unfollowed";
    }
  }

};

module.exports = FollowToggle;
