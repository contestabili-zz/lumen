function UpdateControls(){""==document.getElementById("answer-new").innerHTML?(console.log("Response textarea is empty"),document.getElementById("directions-1").classList.remove("hide"),document.getElementById("directions-2").classList.add("hide"),document.getElementById("directions-3").classList.remove("hide"),document.getElementById("response").value="",document.getElementById("response").placeholder="Your response",document.getElementById("answers-1").classList.add("hide"),document.getElementById("answers-2").classList.add("hide"),document.responseForm.responseTextArea.focus()):(document.getElementById("directions-1").classList.add("hide"),document.getElementById("directions-2").classList.remove("hide"),document.getElementById("directions-3").classList.add("hide"),document.getElementById("answers-1").classList.remove("hide"),document.getElementById("answers-2").classList.remove("hide"))}function UpdateSlideContent(){document.getElementById("question").innerHTML=slideContents[slideContentIndex].question,document.getElementById("answer-1").innerHTML=slideContents[slideContentIndex].answers[0],document.getElementById("answer-2").innerHTML=slideContents[slideContentIndex].answers[1],document.getElementById("answer-3").innerHTML=slideContents[slideContentIndex].answers[2],document.getElementById("answer-4").innerHTML=slideContents[slideContentIndex].answers[3],document.getElementById("answer-new").innerHTML=slideContents[slideContentIndex].newAnswer}function UpdateSummary(){document.getElementById("question-1").innerHTML=slideContents[0].question,document.getElementById("response-1").innerHTML=slideContents[0].newAnswer,document.getElementById("question-2").innerHTML=slideContents[1].question,document.getElementById("response-2").innerHTML=slideContents[1].newAnswer,document.getElementById("question-3").innerHTML=slideContents[2].question,document.getElementById("response-3").innerHTML=slideContents[2].newAnswer,document.getElementById("question-4").innerHTML=slideContents[3].question,document.getElementById("response-4").innerHTML=slideContents[3].newAnswer,document.getElementById("question-5").innerHTML=slideContents[4].question,document.getElementById("response-5").innerHTML=slideContents[4].newAnswer}function UpdateNav(){document.getElementById("question-1-nav").classList.remove("active"),document.getElementById("question-2-nav").classList.remove("active"),document.getElementById("question-3-nav").classList.remove("active"),document.getElementById("question-4-nav").classList.remove("active"),document.getElementById("question-5-nav").classList.remove("active"),0==slideContentIndex?document.getElementById("question-1-nav").classList.add("active"):1==slideContentIndex?document.getElementById("question-2-nav").classList.add("active"):2==slideContentIndex?document.getElementById("question-3-nav").classList.add("active"):3==slideContentIndex?document.getElementById("question-4-nav").classList.add("active"):4==slideContentIndex&&document.getElementById("question-5-nav").classList.add("active")}var slideContents=[],slideContentIndex=0,sectionIndex=1,videoSelection=[],kioskSelection=[],videoPlaying=!1;$(document).keydown(function(e){if(13==e.keyCode&&""==slideContents[slideContentIndex].newAnswer){0==slideContentIndex?SubmitAnswerOne():1==slideContentIndex?SubmitAnswerTwo():2==slideContentIndex?SubmitAnswerThree():3==slideContentIndex?SubmitAnswerFour():4==slideContentIndex&&SubmitAnswerFive(),document.getElementById("answers-1").classList.remove("hide"),document.getElementById("answers-2").classList.remove("hide");var n="question-"+(slideContentIndex+1)+"-nav";console.log("Question nav: "+n),document.getElementById(n).classList.add("answered"),UpdateSlideContent(),UpdateNav(),UpdateControls()}else if(9==e.keyCode)e.preventDefault(),slideContentIndex<4?slideContentIndex++:slideContentIndex=0,UpdateSlideContent(),UpdateNav(),UpdateControls();else if(27==e.keyCode)if(1==sectionIndex)document.getElementById("state-1").classList.remove("active"),document.getElementById("state-3").classList.add("active"),UpdateSummary(),sectionIndex=3;else if(3==sectionIndex){videoPlaying=!1,SubmitOff();var t=5e3;setTimeout(function(){location.reload()},5e3)}}),$(document).ready(function(){function e(e){console.log("Video 1 ended"),document.getElementById("section-video-1").classList.add("hide"),document.getElementById("section-prompts").classList.remove("hide"),UpdateNav(),UpdateSlideContent(),UpdateControls()}function e(e){console.log("Video 2 ended"),document.getElementById("section-video-2").classList.add("hide"),document.getElementById("section-prompts").classList.remove("hide"),UpdateNav(),UpdateSlideContent(),UpdateControls()}var n=new Object;n.question="What do you feel most grateful for in your life right now?",n.answers=["A","B","C","D"],n.newAnswer="",slideContents[0]=n;var t=new Object;t.question="When you think about the end of life, what is most important to you?",t.answers=["E","F","G","H"],t.newAnswer="",slideContents[1]=t;var s=new Object;s.question="What do you consider a 'good' death?",s.answers=["I","J","K","L"],s.newAnswer="",slideContents[2]=s;var d=new Object;d.question="If today was your last, what would you do?",d.answers=["M","N","O","P"],d.newAnswer="",slideContents[3]=d;var o=new Object;o.question="If you were about to die, what things would feel unresolved?",o.answers=["Q","R","S","T"],o.newAnswer="",slideContents[4]=o,GetAnswers(slideContents),console.log(slideContents),document.getElementById("video-1").addEventListener("ended",e,!1),document.getElementById("video-2").addEventListener("ended",e,!1)});