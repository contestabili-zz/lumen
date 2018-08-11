var slideContents = [];
var slideContentIndex = 0;
var sectionIndex = 1;
var videoSelection = [];
var kioskSelection = [];
var videoPlaying = false;

function UpdateControls() {

  if (document.getElementById("answer-new").innerHTML == "") {
    console.log("Response textarea is empty");

    document.getElementById("directions-1").classList.remove('hide');
    document.getElementById("directions-2").classList.add('hide');
    document.getElementById("directions-3").classList.remove('hide');
//    document.getElementById("directions-4").classList.remove('hide');

    document.getElementById("response").value = "";
    document.getElementById("response").placeholder = "Your response";

    document.getElementById("answers-1").classList.add('hide');
    document.getElementById("answers-2").classList.add('hide');

    document.responseForm.responseTextArea.focus();
  }
  else {
    document.getElementById("directions-1").classList.add('hide');
    document.getElementById("directions-2").classList.remove('hide');
    document.getElementById("directions-3").classList.add('hide');
//    document.getElementById("directions-4").classList.add('hide');

    document.getElementById("answers-1").classList.remove('hide');
    document.getElementById("answers-2").classList.remove('hide');
  }

}

function UpdateSlideContent() {

  document.getElementById("question").innerHTML = slideContents[slideContentIndex].question;
  document.getElementById("answer-1").innerHTML = slideContents[slideContentIndex].answers[0];
  document.getElementById("answer-2").innerHTML = slideContents[slideContentIndex].answers[1];
  document.getElementById("answer-3").innerHTML = slideContents[slideContentIndex].answers[2];
  document.getElementById("answer-4").innerHTML = slideContents[slideContentIndex].answers[3];
  document.getElementById("answer-new").innerHTML = slideContents[slideContentIndex].newAnswer;

}

function UpdateSummary() {

  document.getElementById("question-1").innerHTML = slideContents[0].question;
  document.getElementById("response-1").innerHTML = slideContents[0].newAnswer;

  document.getElementById("question-2").innerHTML = slideContents[1].question;
  document.getElementById("response-2").innerHTML = slideContents[1].newAnswer;

  document.getElementById("question-3").innerHTML = slideContents[2].question;
  document.getElementById("response-3").innerHTML = slideContents[2].newAnswer;

  document.getElementById("question-4").innerHTML = slideContents[3].question;
  document.getElementById("response-4").innerHTML = slideContents[3].newAnswer;

  document.getElementById("question-5").innerHTML = slideContents[4].question;
  document.getElementById("response-5").innerHTML = slideContents[4].newAnswer;

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

  // Enter
  if (keyPressed.keyCode == 13 && slideContents[slideContentIndex].newAnswer == "") {
    if (slideContentIndex == 0) SubmitAnswerOne();
    else if (slideContentIndex == 1) SubmitAnswerTwo();
    else if (slideContentIndex == 2) SubmitAnswerThree();
    else if (slideContentIndex == 3) SubmitAnswerFour();
    else if (slideContentIndex == 4) SubmitAnswerFive();

    document.getElementById("answers-1").classList.remove('hide');
    document.getElementById("answers-2").classList.remove('hide');

    var questionNavId = "question-" + (slideContentIndex + 1) + "-nav";
    console.log("Question nav: " + questionNavId);

    document.getElementById(questionNavId).classList.add('answered');

    UpdateSlideContent();
    UpdateNav();
    UpdateControls();
  }

  // Tab
  else if (keyPressed.keyCode == 9) {

    keyPressed.preventDefault();

    if (slideContentIndex < 4) {
      slideContentIndex++;
    }
    else slideContentIndex = 0;

    UpdateSlideContent();
    UpdateNav();
    UpdateControls();
  }

  // Escape
  else if (keyPressed.keyCode == 27) {
    if (sectionIndex == 1) {
      document.getElementById("state-1").classList.remove('active');
      document.getElementById("state-3").classList.add('active');

      UpdateSummary();
      sectionIndex = 3;
    }

    else if (sectionIndex == 3) {
      videoPlaying = false;
      SubmitOff();

      var delayInMilliseconds = 5000;
      setTimeout(function() {
        location.reload();
      }, delayInMilliseconds);
    }
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

  GetAnswers(slideContents);
  console.log(slideContents);

  document.getElementById('video-1').addEventListener('ended',myHandler,false);
    function myHandler(e) {
      // What you want to do after the event
      console.log('Video 1 ended');
      document.getElementById("section-video-1").classList.add('hide');
      document.getElementById("section-prompts").classList.remove('hide');
      UpdateNav();
      UpdateSlideContent();
      UpdateControls();
    }

  document.getElementById('video-2').addEventListener('ended',myHandler,false);
    function myHandler(e) {
      // What you want to do after the event
      console.log('Video 2 ended');
      document.getElementById("section-video-2").classList.add('hide');
      document.getElementById("section-prompts").classList.remove('hide');
      UpdateNav();
      UpdateSlideContent();
      UpdateControls();
    }
});

setInterval(function() {
   console.log('Interval');

   if (!videoPlaying) {
     GetKioskSelection(kioskSelection);

     var delayInMilliseconds = 5000; //1 second

     setTimeout(function() {
       if (kioskSelection[0] == "on") {
         GetVideoSelection(videoSelection);

         setTimeout(function() {
           if (videoSelection[0] == "hike") {
             console.log("Play hiking video");
             document.getElementById("section-blank").classList.add('hide');
             document.getElementById("section-video-1").classList.remove('hide');
           }
           else if (videoSelection[0] =="city") {
             console.log("Play city video");
             document.getElementById("section-blank").classList.add('hide');
             document.getElementById("section-video-2").classList.remove('hide');
           }
         }, delayInMilliseconds);

         console.log('Lower volume');
         song.animate({volume: 0}, 1000);

         document.getElementById("song").mute = true;

         videoPlaying = true;
       }

     }, delayInMilliseconds);
   }

 }, 5000);
