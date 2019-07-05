$document.ready(function(){


$("#whateverstartbuttonImake").on('click', trivia.startGame);
startGame: function(){
var correctAnswers = 0;
var incorrectAnswers = 0;

 var game = {
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    currentSet: 0,
    timer: 20,
    timerOn: false,
    timerId : '',

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
      },
 for (let i = 0; i < questions.length; i++) {
     const element = array[i];
     
 }
     
 }});
 