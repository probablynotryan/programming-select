$(document).ready(function() {

  $("#startOver").click(function(){
    location.reload();
  });

  $("#paperclippy").click(function(){
    $(".paperclippy").hide();
  });

  $("#mainBody").submit(function(event) {
    event.preventDefault();

    $("#missingInfo").hide();
    $("#results").hide();

    const questionOne = parseInt($("#questionOne").val());
    const questionTwo = parseInt($("#questionTwo").val());
    const questionThree = parseInt($("#questionThree").val());
    const questionFour = parseInt($("#questionFour").val());
    const questionFive = parseInt($("#questionFive").val());
    const poolOurAnswers = questionOne + questionTwo + questionThree + questionFour + questionFive;

    if (questionOne === 0 || questionTwo === 0 || questionThree === 0 || questionFour === 0 || questionFive === 0){
      $("#missingInfo").toggle();
      return;
    }
    if (poolOurAnswers > 0 && poolOurAnswers < 200) {
      $(".results").text("Markdown");
      $("#results").toggle();
    } 
    if (poolOurAnswers > 199 && poolOurAnswers < 300) {
      $(".results").text("C#");
      $("#results").toggle();
    } 
    if (poolOurAnswers >= 300 && poolOurAnswers < 400) {
      $(".results").text("HTML");
      $("#results").toggle();
    } 
    if (poolOurAnswers >= 400 && poolOurAnswers < 500) {
      $(".results").text("Javascript");
      $("#results").toggle();
    } 
    if (poolOurAnswers > 499) {
      $(".results").text("ERROR! DANGER, WILL ROBINSON! DANGER!");
      $("#results").toggle();
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
  const theYearGiven = $("#currentYear").val();

  if (theYearGiven === "eighties") {
    $(".yearSlang").text("totally tubular, dude");
  } else if (theYearGiven === "nineties") { $(".yearSlang").text("da bomb");
  } else if (theYearGiven === "zeroZero") { $(".yearSlang").text("sweet, peeps");
  } else if (theYearGiven === "thisYear") { $(".yearSlang").text("gucci, bae")
  };
};