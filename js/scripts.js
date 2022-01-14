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
function yearResponse() {
$("#restOfQuestions").show();
  const currentYear = $("#currentYear").val();
  if (currentYear === "eighties") {
    console.log("the 80s");
  } 
};