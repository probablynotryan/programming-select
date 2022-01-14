$(document).ready(function() {
  $("#mainBody").submit(function(event) {
    event.preventDefault();
    $("#missingInfo").hide();
    $("#results").hide();
    questionOne = parseInt($("#questionOne").val());
    questionTwo = parseInt($("#questionTwo").val());
    questionThree = parseInt($("#questionThree").val());
    questionFour = parseInt($("#questionFour").val());
    questionFive = parseInt($("#questionFive").val());

    const poolOurAnswers = questionOne + questionTwo + questionThree + questionFour + questionFive;
    console.log(poolOurAnswers);

      if (questionOne === 0 || questionTwo === 0 || questionThree === 0 || questionFour === 0 || questionFive ===0){
        console.log("if statement checks out")
        $("#missingInfo").toggle();
        return;
      }
      if (poolOurAnswers > 0 && poolOurAnswers < 200) {
        console.log('markup')
        $(".results").text("Markdown");
        $("#results").toggle();
      } 
      if (poolOurAnswers >199 && poolOurAnswers <300) {
        console.log('c#')
      } 
      if (poolOurAnswers >299 && poolOurAnswers <400) {
        console.log('html')
      } 
      if (poolOurAnswers >399 && poolOurAnswers <500) {
        console.log('javascript')
      } 
  });
});

function getThisStarted() {
  $("#resume").hide();
  $("#whoops").hide();
  $("#results").hide();
  $("#restOfQuestions").hide();
  $("#missingInfo").hide();
  const letsGetStarted = $("#getStarted").val();
  if (letsGetStarted === "yes") {
    $("#resume").toggle();
  } else if (letsGetStarted === "no") {
    $("#whoops").toggle();
  }
};
function yearResponse() {
$("#restOfQuestions").show();
};