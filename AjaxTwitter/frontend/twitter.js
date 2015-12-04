var FollowToggle = require("./follow_toggle");

$(function () {
  $(".follow-toggle").each(function (index, button) {
    new FollowToggle(button);
  });
});
