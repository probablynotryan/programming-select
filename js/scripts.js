$(document).ready(function() {
  $("#mainBody").submit(function(event) {
    event.preventDefault();
    $("#missingInfo").hide();
    questionOne = parseInt($("#questionOne").val());
    questionTwo = parseInt($("#questionTwo").val());
    questionThree = parseInt($("#questionThree").val());
    questionFour = parseInt($("#questionFour").val());
    questionFive = parseInt($("#questionFive").val());

    console.log(questionFive);  
    console.log(questionFour);  
    console.log(questionThree);  
    console.log(questionTwo);  
    console.log(questionOne);  

      if (questionOne === 0 || questionTwo === 0 || questionThree === 0 || questionFour === 0 || questionFive ===0){
        console.log("if statement checks out")
        $("#missingInfo").toggle();
      }
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