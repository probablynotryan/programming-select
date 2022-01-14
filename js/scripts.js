function getThisStarted() {
  $("#resume").hide();
  $("#whoops").hide();
  const letsGetStarted = $("#getStarted").val();
  if (letsGetStarted === "yes") {
    $("#resume").toggle();
  } else if (letsGetStarted === "no") {
    $("#whoops").toggle();
  }
};