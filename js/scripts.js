$(document).ready(function() {
  $("#mainBody").submit(function(event) {
    event.preventDefault();
    questionOne = $("#questionOne").val();
    questionTwo = $("#questionOne").val();
    questionThree = $("#questionOne").val();
    questionFour = $("#questionOne").val();
    questionFive = $("#questionOne").val();

    console.log(questionFive);  
    console.log(questionFour);  
    console.log(questionThree);  
    console.log(questionTwo);  
    console.log(questionOne);  
  });
});

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
  } else if (currentYear === "nineties") {
    console.log("the 90s");
  } if (currentYear === "zeroZero") {
    console.log("the 00s");
  }   if (currentYear === "thisYear") {
    console.log("recent year");
  } 
};