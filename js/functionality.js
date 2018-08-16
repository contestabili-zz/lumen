var slideContents = [];
var slideContentIndex = 0;
var sectionIndex = 1;
var videoSelection = [];
var kioskSelection = [];
var videoPlaying = false;
var delayInMilliseconds = 5000; 
var song = new Audio('assets/audio/song.mp3');  
var live = false;

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
      if (videoSelection[0] = "hike") {
        document.getElementById("section-video-1").classList.add('hide');
      }
      else if (videoSelection[0] = "city") {
        document.getElementById("section-video-1").classList.add('hide');
      }
      
      document.getElementById("section-blank").classList.remove('hide');
      
      sectionIndex = 1;
      videoPlaying = false;
      SubmitOff();
      FadeAudio("out");
      
      var delayInMilliseconds = 5000;
      setTimeout(function() {
        location.reload();
      }, delayInMilliseconds);
    }
  }
});

$(document).ready(function(){
  
  var slideContentOne = new Object();
  slideContentOne.question = "What matters most to you in life?";
  slideContentOne.answers = ["My friends and my family", "Being able to do meaningful work", "Having the energy to do the things that I love the most", "my family and friends and my health"];
  slideContentOne.newAnswer = "";

  slideContents[0] = slideContentOne;

  var slideContentTwo = new Object();
  slideContentTwo.question = "If today was your last, what would you do?";
  slideContentTwo.answers = ["spend it with family and friends", "hangout with friends, call my family and just relax", "I might spend all my money on steam", "I would go eat pizza"];
  slideContentTwo.newAnswer = "";

  slideContents[1] = slideContentTwo;

  var slideContentThree = new Object();
  slideContentThree.question = "If you were about to die, what things would feel unresolved?";
  slideContentThree.answers = ["Being around my family", "Being at home and in a warm bed", "Not losing my mind", "Having the physical ability to be able to do whatever I want"];
  slideContentThree.newAnswer = "";

  slideContents[2] = slideContentThree;

  var slideContentFour = new Object();
  slideContentFour.question = "What do you consider a “good” death?";
  slideContentFour.answers = ["i would like to hopefully die in my sleep peaceful without immense pain", "Every death is good", "Being with someone I love", "Dying in my sleep"];
  slideContentFour.newAnswer = "";

  slideContents[3] = slideContentFour;

  var slideContentFive = new Object();
  slideContentFive.question = "What do you feel most grateful for in your life right now?";
  slideContentFive.answers = ["My friends and my family", "Being able to do meaningful work", "Having the energy to do the things that I love the most", "my family and friends and my health"];
  slideContentFive.newAnswer = "";

  slideContents[4] = slideContentFive;
  
  GetAnswers(slideContents);
  UpdateSlideContent();
  UpdateNav();
  UpdateControls();
  
  console.log(slideContents);

  document.getElementById('video-1').addEventListener('ended',myHandler,false);
    function myHandler(e) {
      console.log('Video 1 ended');
      document.getElementById("section-video-1").classList.add('hide');
      document.getElementById("section-prompts").classList.remove('hide');
      UpdateNav();
      UpdateSlideContent();
      UpdateControls();
      FadeAudio("in");
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
      FadeAudio("in");
    }
  
  // Remove if live
  kioskSelection[0] = "on";
  videoSelection[0] = "city";
  
});

setInterval(function() {
 console.log('Interval');

 if (!videoPlaying) {
   GetKioskSelection(kioskSelection);

   setTimeout(function() {
     if (kioskSelection[0] == "on") {

       GetVideoSelection(videoSelection);

       setTimeout(function() {
         if (videoSelection[0] == "hike") {
           console.log("Play hiking video");
           document.getElementById("section-blank").classList.add('hide');
           document.getElementById("section-video-1").classList.remove('hide');
           var video = document.getElementById("video-1"); 
           video.play();
         }
         else if (videoSelection[0] =="city") {
           console.log("Play city video");
           document.getElementById("section-blank").classList.add('hide');
           document.getElementById("section-video-2").classList.remove('hide');
           var video = document.getElementById("video-2"); 
           video.play();
         }
       }, delayInMilliseconds);

       videoPlaying = true;
     }

   }, delayInMilliseconds);
 }

}, delayInMilliseconds);

function FadeAudio(setting) {
  if (setting == "out") {
    console.log("Fade out song");
    
    var fadeOutInterval = setInterval(function(){
      actualVolume = (parseFloat(actualVolume) - 0.1).toFixed(1);
      if(actualVolume >= 0){
        song.volume = actualVolume;
      } else {
        song.pause();
        status = 'pause';
        clearInterval(fadeOutInterval);
      }
    }, 1000);
    
  }
  else if (setting == "in") {
    console.log("Fade in song");
    
    var actualVolume = 0;
    song.play();
    song.volume = 0;
    var fadeInInterval = setInterval(function(){
      actualVolume = (parseFloat(actualVolume) + 0.1).toFixed(.5);
      if(actualVolume <= 1){
          song.volume = actualVolume;
      } else {
          clearInterval(fadeInInterval);
      }
    }, 1000);
  }
}
