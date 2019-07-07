$( document ).ready(function() {
  console.log( "ready!");
});


var labels = ["first", "second", "third", "forth"];
var questionDisplay = function() {
  $(".questions :not('#pleaseEnd')").empty();

  for (var i = 0; i < 10; i++) {
      $('.questions').prepend('<div class="' + questions[i].name + '"></div>');
      $(questions[i].divClass).append('<div class ="ques-title">' + questions[i].ques + '</div>');

      for (var i = 0; i <= 3; i++) {
          $(questions[i].divClass).append('<input name="' + questions[i].name + '" value="' + questions[i].ans[i] + '"/><label for="' + labels[i] + '">' + questions[i].ans[i] + '</label>');
      }
      $('.questions').prepend('<hr>');
  }
}
var questions = [{
  ques: "Who succeeded Vic Sage as The Question after his death?",
  ans: ["Renee Montoya", "Jim Corrigan", "Ralph Dibny", "Oliver Queen"],
  name: "vicSage",
  correct: "Renee Montoya",
  divClass: ".theQuestion"
},
{
  ques: "What Lantern Corp does the Ion represent?",
  ans: ["Red", "Indigo", "Green", "Yellow"],
  name: "ion",
  correct: "Green",
  divClass: ".ion"
},
{
  ques: "Who has Daredevil NOT had romantic ties with in the comics",
  ans: ["Moondragon", "Spider Woman", "Elektra", "Black Widow"],
  name: "ddDates",
  correct: "Spider Woman",
  divClass: ".ddDates"
},
{
  ques: "Which clone took over for Peter Parker in the 1990's?",
  ans: ["0", "1", "2", "3"],
  name: "clone",
  correct: "Ben Reilly",
  divClass: ".clone"
},
{
  ques: "How many fingers does Nightcrawler have total?",
  ans: ["0", "1", "2", "3"],
  name: "fist",
  correct: "6",
  divClass: ".fist"
},
{
  ques: "Which one of these heroes does not have a biological child?",
  ans: ["Batman", "Green Arrow", "Moon Knight", "Aquaman"],
  name: "child",
  correct: "Moon Knight",
  divClass: ".child"
},
{
  ques: "Which of these characters hasn't died in mineline continuity?",
  ans: ["Wolverine", "Thor", "Squirrel Girl", "The Hulk"],
  name: "death",
  correct: "Squirrel Girl",
  divClass: ".death"
},
{
  ques: "Who created Adamantium in Marvel's main universe (616)?",
  ans: ["Dr. Myron MacLain", "Dr. Moira Mactaggert", "Hercules", "Dr. Abraham Cornelius"],
  name: "adamantium",
  correct: "Dr. Myron MacLain",
  divClass: ".adamantium"
},
{
  ques: "9",
  ans: ["0", "1", "2", "3"],
  name: "name",
  correct: "1",
  divClass: ".name"
},
{
  ques: "10",
  ans: ["0", "1", "2", "3"],
  name: "name",
  correct: "0",
  divClass: ".name"
}
]
//$("#whateverstartbuttonImake").on('click', trivia.startGame);
var startGame = $("#begin").on('click', function() {
  $(this).parent().hide();
  $('.container').show();
  countdown(616);
  questionDisplay();
});

 
      
 //for (let i = 0; i <questions.length; i++) {
   //  const element = array[i];
     
 
//timer
var countdown = function(seconds) {

  var timer = setInterval(function() {
      seconds = seconds - 1;
      $("#tR").html(seconds);

      if (seconds <= 0) {
          $('.container').fadeOut(500);
          var correctAnswers = 0;
          var wrongAnswers = 0;
          var unAnswered = 0;

          // match html elements to answers
          for (var i = 0; i < 10; i++) {

              if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

                  correctAnswers++;
                  console.log("correct number:" + i)
              } else {
                  wrongAnswers++;
                  console.log("wrong number:" + i)
              };
          }
          $('#cTUp').append(correctAnswers);
          $('#wTUp').append(wrongAnswers);
          $('#tUp').fadeIn(1000).show();

          clearInterval(timer);
          return;
      }
  }, 1000);

  // click event for submit button to stop timer
  $('#pleaseEnd').on('click', function() {
      clearInterval(timer);
  })
}; 

var gradeQuiz = $('#pleaseEnd').on('click', function() {

  var correctAnswers = 0;
  var wrongAnswers = 0;
  var unAnswered = 0;

  for (var i = 0; i < 10; i++) {

      if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

          correctAnswers++;
      } else {
          wrongAnswers++;
      };
  };
  countdown();
  // fade questions
  $('.container').fadeOut(500);
  // answerScreen
  $('#aS').show();
  // correctScreen
  $('#cS').append(correctAnswers);
  // wrongScreen
  $('#wS').append(wrongAnswers);
});
 /** 
  * I started with the harder one, and I still want to get back to it, so I'm leaving this here
  * var game = {
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    currentSet: 0,
    timer: 616,
    timerOn: false,
    timerId : '.timer',

    questions: {
        q1: '1',
        q2: '2',
        q3: '3',
        q4: '4',
        q5: '5',
        q6: '6',
        q7: '7',
        q8: '8',
      },
      options: {
        q1: ['0','1','2','3'],
        q2: ['0','1','2','3'],
        q3: ['0','1','2','3'],
        q4: ['0','1','2','3'],
        q5: ['0','1','2','3'],
        q6: ['0','1','2','3'],
        q7: ['0','1','2','3'],
        q8: ['0','1','2','3'],
      },
      answers: {
        q1: '0',
        q2: '0',
        q3: '0',
        q4: '0',
        q5: '0',
        q6: '0',
        q7: '0',
        q8: '0',
      },*/