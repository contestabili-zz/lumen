function Shuffle(o) {
  
  for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  return o;
  
};

function GetAnswers(slideContents) {

  // Answers to question 1
  blockspring.runParsed("query-google-spreadsheet", {
    // Here is where you need to decide what data you are grabbing with the Google query syntax
    // I am finding elements that match the variable num, which is from a previous part of the code
    // Google syntax makes you request columns with letters as opposed to your column titles.
    "query": "SELECT A, B",
    // This is the full URL of your sheet. Just copy and paste from your browser.
    "url": "https://docs.google.com/spreadsheets/d/1T-cQY9HeagTqJjNuFVdr4HhhWbREPFiYvKtq7gQmRmQ/edit?usp=sharing"
    // Cache is false so that your browser does not run an old function when you change your code
    }, { cache: false, expiry: 7200}, function(res) {
    // All results are part of the res.params.data object.
    // in my case, I requested two columns from my spreadsheet, one named skill and one named key.
    // There is one matching row in this case, with two elements
    var answers = res.params.data;
    Shuffle(answers);

    slideContents[0].answers[0] = answers[0]['answer'];
    slideContents[0].answers[1] = answers[1]['answer'];
    slideContents[0].answers[2] = answers[2]['answer'];
    slideContents[0].answers[3] = answers[3]['answer'];
  });

  // Answers to question 2
  blockspring.runParsed("query-google-spreadsheet", {
    // Here is where you need to decide what data you are grabbing with the Google query syntax
    // I am finding elements that match the variable num, which is from a previous part of the code
    // Google syntax makes you request columns with letters as opposed to your column titles.
    "query": "SELECT A, B",
    // This is the full URL of your sheet. Just copy and paste from your browser.
    "url": "https://docs.google.com/spreadsheets/d/1LYivVWGrnL-qDOF9VzotX0YU79j1UIe0X2hIqTOpFsA/edit?usp=sharing"
    // Cache is false so that your browser does not run an old function when you change your code
    }, { cache: false, expiry: 7200}, function(res) {
    // All results are part of the res.params.data object.
    // in my case, I requested two columns from my spreadsheet, one named skill and one named key.
    // There is one matching row in this case, with two elements
    var answers = res.params.data;
    Shuffle(answers);

    slideContents[1].answers[0] = answers[0]['answer'];
    slideContents[1].answers[1] = answers[1]['answer'];
    slideContents[1].answers[2] = answers[2]['answer'];
    slideContents[1].answers[3] = answers[3]['answer'];
  });

  // Answers to question 3
  blockspring.runParsed("query-google-spreadsheet", {
    // Here is where you need to decide what data you are grabbing with the Google query syntax
    // I am finding elements that match the variable num, which is from a previous part of the code
    // Google syntax makes you request columns with letters as opposed to your column titles.
    "query": "SELECT A, B",
    // This is the full URL of your sheet. Just copy and paste from your browser.
    "url": "https://docs.google.com/spreadsheets/d/1x2nvE9a3QeKXMpVhUc0lwwFFP2AhFfYa8d9HA9QPw6M/edit?usp=sharing"
    // Cache is false so that your browser does not run an old function when you change your code
    }, { cache: false, expiry: 7200}, function(res) {
    // All results are part of the res.params.data object.
    // in my case, I requested two columns from my spreadsheet, one named skill and one named key.
    // There is one matching row in this case, with two elements
    var answers = res.params.data;
    Shuffle(answers);

    slideContents[2].answers[0] = answers[0]['answer'];
    slideContents[2].answers[1] = answers[1]['answer'];
    slideContents[2].answers[2] = answers[2]['answer'];
    slideContents[2].answers[3] = answers[3]['answer'];
  });

  // Answers to question 4
  blockspring.runParsed("query-google-spreadsheet", {
    // Here is where you need to decide what data you are grabbing with the Google query syntax
    // I am finding elements that match the variable num, which is from a previous part of the code
    // Google syntax makes you request columns with letters as opposed to your column titles.
    "query": "SELECT A, B",
    // This is the full URL of your sheet. Just copy and paste from your browser.
    "url": "https://docs.google.com/spreadsheets/d/1pCagbmxHIUin7EaImNo8jcB4Buca203a5Rq_54h_Rpc/edit?usp=sharing"
    // Cache is false so that your browser does not run an old function when you change your code
    }, { cache: false, expiry: 7200}, function(res) {
    // All results are part of the res.params.data object.
    // in my case, I requested two columns from my spreadsheet, one named skill and one named key.
    // There is one matching row in this case, with two elements
    var answers = res.params.data;
    Shuffle(answers);

    slideContents[3].answers[0] = answers[0]['answer'];
    slideContents[3].answers[1] = answers[1]['answer'];
    slideContents[3].answers[2] = answers[2]['answer'];
    slideContents[3].answers[3] = answers[3]['answer'];
  });

  // Answers to question 5
  blockspring.runParsed("query-google-spreadsheet", {
    // Here is where you need to decide what data you are grabbing with the Google query syntax
    // I am finding elements that match the variable num, which is from a previous part of the code
    // Google syntax makes you request columns with letters as opposed to your column titles.
    "query": "SELECT A, B",
    // This is the full URL of your sheet. Just copy and paste from your browser.
    "url": "https://docs.google.com/spreadsheets/d/1rgn2BoghLseE_KoM2GbYkWHLRiBou2MH3q4sch8V2kI/edit?usp=sharing"
    // Cache is false so that your browser does not run an old function when you change your code
    }, { cache: false, expiry: 7200}, function(res) {
    // All results are part of the res.params.data object.
    // in my case, I requested two columns from my spreadsheet, one named skill and one named key.
    // There is one matching row in this case, with two elements
    var answers = res.params.data;
    Shuffle(answers);

    slideContents[4].answers[0] = answers[0]['answer'];
    slideContents[4].answers[1] = answers[1]['answer'];
    slideContents[4].answers[2] = answers[2]['answer'];
    slideContents[4].answers[3] = answers[3]['answer'];
  });
}

function SubmitAnswerOne() {

  var answer = document.getElementById("response").value;
  var data = {};
  data[0] = answer;

  blockspring.runParsed("append-to-google-spreadsheet", {
  // middle parameter from Google Spreadsheet URL
  // https://docs.google.com/spreadsheets/d/FILE_ID/edit?usp=sharing
  "file_id": "1T-cQY9HeagTqJjNuFVdr4HhhWbREPFiYvKtq7gQmRmQ",
  // The first sheet within the particular doc will always be 0
  "worksheet_id": 0,
  //The array of arrays, as stated above
  "values": data},
  //Provided on the page at https://open.blockspring.com/pkpp1233/append-to-google-spreadsheet
  { "api_key": "c155f5a32843c24811a08f684545a5aa" },
  function(res){
    //console.log to check for errors
    console.log(res);
  });

  slideContents[0].newAnswer = answer;
  document.getElementById("answer-new").innerHTML = answer;
  console.log("Answer submitted: " + answer);
};

function SubmitAnswerTwo() {

  var answer = document.getElementById("response").value;
  var data = {};
  data[0] = answer;

  blockspring.runParsed("append-to-google-spreadsheet", {
  // middle parameter from Google Spreadsheet URL
  // https://docs.google.com/spreadsheets/d/FILE_ID/edit?usp=sharing
  "file_id": "1LYivVWGrnL-qDOF9VzotX0YU79j1UIe0X2hIqTOpFsA",
  // The first sheet within the particular doc will always be 0
  "worksheet_id": 0,
  //The array of arrays, as stated above
  "values": data},
  //Provided on the page at https://open.blockspring.com/pkpp1233/append-to-google-spreadsheet
  { "api_key": "c155f5a32843c24811a08f684545a5aa" },
  function(res){
    //console.log to check for errors
    console.log(res);
  });

  slideContents[1].newAnswer = answer;
  document.getElementById("answer-new").innerHTML = answer;
  console.log("Answer submitted: " + answer);

};

function SubmitAnswerThree() {

  var answer = document.getElementById("response").value;
  var data = {};
  data[0] = answer;

  blockspring.runParsed("append-to-google-spreadsheet", {
  // middle parameter from Google Spreadsheet URL
  // https://docs.google.com/spreadsheets/d/FILE_ID/edit?usp=sharing
  "file_id": "1x2nvE9a3QeKXMpVhUc0lwwFFP2AhFfYa8d9HA9QPw6M",
  // The first sheet within the particular doc will always be 0
  "worksheet_id": 0,
  //The array of arrays, as stated above
  "values": data},
  //Provided on the page at https://open.blockspring.com/pkpp1233/append-to-google-spreadsheet
  { "api_key": "c155f5a32843c24811a08f684545a5aa" },
  function(res){
    //console.log to check for errors
    console.log(res);
  });

  slideContents[2].newAnswer = answer;
  document.getElementById("answer-new").innerHTML = answer;
  console.log("Answer submitted: " + answer);

};

function SubmitAnswerFour() {

  var answer = document.getElementById("response").value;
  var data = {};
  data[0] = answer;

  blockspring.runParsed("append-to-google-spreadsheet", {
  // middle parameter from Google Spreadsheet URL
  // https://docs.google.com/spreadsheets/d/FILE_ID/edit?usp=sharing
  "file_id": "1pCagbmxHIUin7EaImNo8jcB4Buca203a5Rq_54h_Rpc",
  // The first sheet within the particular doc will always be 0
  "worksheet_id": 0,
  //The array of arrays, as stated above
  "values": data},
  //Provided on the page at https://open.blockspring.com/pkpp1233/append-to-google-spreadsheet
  { "api_key": "c155f5a32843c24811a08f684545a5aa" },
  function(res){
    //console.log to check for errors
    console.log(res);
  });

  slideContents[3].newAnswer = answer;
  document.getElementById("answer-new").innerHTML = answer;
  console.log("Answer submitted: " + answer);

};

function SubmitAnswerFive() {

  var answer = document.getElementById("response").value;
  var data = {};
  data[0] = answer;

  blockspring.runParsed("append-to-google-spreadsheet", {
  // middle parameter from Google Spreadsheet URL
  // https://docs.google.com/spreadsheets/d/FILE_ID/edit?usp=sharing
  "file_id": "1rgn2BoghLseE_KoM2GbYkWHLRiBou2MH3q4sch8V2kI",
  // The first sheet within the particular doc will always be 0
  "worksheet_id": 0,
  //The array of arrays, as stated above
  "values": data},
  //Provided on the page at https://open.blockspring.com/pkpp1233/append-to-google-spreadsheet
  { "api_key": "c155f5a32843c24811a08f684545a5aa" },
  function(res){
    //console.log to check for errors
    console.log(res);
  });

  slideContents[4].newAnswer = answer;
  document.getElementById("answer-new").innerHTML = answer;
  console.log("Answer submitted: " + answer);

};