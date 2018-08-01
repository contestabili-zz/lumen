var slideContents = [];
var slideContentIndex = 0;

function UpdateSlideContent() {

  document.getElementById("question").innerHTML = slideContents[slideContentIndex].question;
  document.getElementById("answer-1").innerHTML = slideContents[slideContentIndex].answers[0];
  document.getElementById("answer-2").innerHTML = slideContents[slideContentIndex].answers[1];
  document.getElementById("answer-3").innerHTML = slideContents[slideContentIndex].answers[2];
  document.getElementById("answer-4").innerHTML = slideContents[slideContentIndex].answers[3];
  document.getElementById("answer-new").innerHTML = slideContents[slideContentIndex].newAnswer;

  if (document.getElementById("answer-new").innerHTML == "") {
    document.getElementById("directions-2").classList.add('hide');
    document.getElementById("directions-3").classList.remove('hide');
    document.getElementById("response").value = "";
    document.getElementById("response").placeholder = "Your response";
  }
  else {
    document.getElementById("directions-2").classList.remove('hide');
    document.getElementById("directions-3").classList.add('hide');
  }

}

function UpdateNav() {
  document.getElementById("question-1-nav").classList.remove('active');
  document.getElementById("question-2-nav").classList.remove('active');
  document.getElementById("question-3-nav").classList.remove('active');
  document.getElementById("question-4-nav").classList.remove('active');
  document.getElementById("question-5-nav").classList.remove('active');
  if (slideContentIndex == 0) document.getElementById("question-1-nav").classList.add('active');
  else if (slideContentIndex == 1) document.getElementById("question-2-nav").classList.add('active');
  else if (slideContentIndex == 2) document.getElementById("question-3-nav").classList.add('active');
  else if (slideContentIndex == 3) document.getElementById("question-4-nav").classList.add('active');
  else if (slideContentIndex == 4) document.getElementById("question-5-nav").classList.add('active');
}

$(document).keydown(function(keyPressed) {
  if (keyPressed.keyCode == 13) {
    if (slideContentIndex == 0) SubmitAnswerOne();
    else if (slideContentIndex == 1) SubmitAnswerTwo();
    else if (slideContentIndex == 2) SubmitAnswerThree();
    else if (slideContentIndex == 3) SubmitAnswerFour();
    else if (slideContentIndex == 4) SubmitAnswerFive();

    document.getElementById("answers-1").classList.remove('hide');
    document.getElementById("answers-2").classList.remove('hide');

    document.getElementById("directions-2").classList.remove('hide');
    document.getElementById("directions-3").classList.add('hide');
  }

  else if (keyPressed.keyCode == 37) {
    if (slideContentIndex > 0) {
      slideContentIndex--;
    }
    else slideContentIndex = 4;

    UpdateSlideContent();
    UpdateNav();
  }

  else if (keyPressed.keyCode == 39) {
    if (slideContentIndex < 4) {
      slideContentIndex++;
    }
    else slideContentIndex = 0;

    UpdateSlideContent();
    UpdateNav();
  }
});

$(document).ready(function(){

  var slideContentOne = new Object();
  slideContentOne.question = "What do you feel most grateful for in your life right now?";
  slideContentOne.answers = ["A", "B", "C", "D"];
  slideContentOne.newAnswer = "";

  slideContents[0] = slideContentOne;

  var slideContentTwo = new Object();
  slideContentTwo.question = "When you think about the end of life, what is most important to you?";
  slideContentTwo.answers = ["E", "F", "G", "H"];
  slideContentTwo.newAnswer = "";

  slideContents[1] = slideContentTwo;

  var slideContentThree = new Object();
  slideContentThree.question = "What do you consider a 'good' death?";
  slideContentThree.answers = ["I", "J", "K", "L"];
  slideContentThree.newAnswer = "";

  slideContents[2] = slideContentThree;

  var slideContentFour = new Object();
  slideContentFour.question = "If today was your last, what would you do?";
  slideContentFour.answers = ["M", "N", "O", "P"];
  slideContentFour.newAnswer = "";

  slideContents[3] = slideContentFour;

  var slideContentFive = new Object();
  slideContentFive.question = "If you were about to die, what things would feel unresolved?";
  slideContentFive.answers = ["Q", "R", "S", "T"];
  slideContentFive.newAnswer = "";

  slideContents[4] = slideContentFive;

  // GetAnswers(slideContents);

  console.log(slideContents);

  document.getElementById("question").innerHTML = slideContents[0].question;
  document.getElementById("answer-1").innerHTML = slideContents[0].answers[0];
  document.getElementById("answer-2").innerHTML = slideContents[0].answers[1];
  document.getElementById("answer-3").innerHTML = slideContents[0].answers[2];
  document.getElementById("answer-4").innerHTML = slideContents[0].answers[3];

});