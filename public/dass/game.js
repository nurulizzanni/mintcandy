const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const progressBarFull = document.getElementById("progressBarFull");
const score1Text = document.getElementById("score1");
const score2Text = document.getElementById("score2");
const score3Text = document.getElementById("score3");
const result1Text = document.getElementById("result1");
const result2Text = document.getElementById("result2");
const result3Text = document.getElementById("result3");


let questions = [
  
 
];


let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];



//CONSTANTS
const MAX_QUESTIONS =3;
 CORRECT1 = 0;
 CORRECT2 = 0;
 CORRECT3 = 0;


startGame = () => {
  questionCounter = 0;
  level = ""
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();

};

getNewQuestion = () => {
  

  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    //go to the end page
    return window.location.assign("/score");
  }
 
  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;
  question.num = currentQuestion.id;


  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

///////////////////////////////////////////////////////////////////////////////////
choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
    CORRECT_BONUS = 0;

     if (selectedAnswer == 1)
    {
       CORRECT_BONUS =0;
    }
     if (selectedAnswer == 2)
    {
       CORRECT_BONUS =1;
    }
     if (selectedAnswer == 3)
    {
       CORRECT_BONUS =2;
    }
    if (selectedAnswer == 4)
    {
       CORRECT_BONUS =3;
    }

//////////////////////////////////    
    if(question.num == 1 || question.num == 6 || question.num == 8 || question.num == 11 ||question.num == 12|| question.num == 14 || question.num == 18 )
  {
     classToApply = "stress";
     a = CORRECT_BONUS;
     CORRECT1=CORRECT1 + a;
     score1Text.innerText = CORRECT1;

     if (CORRECT1<8 ){
      level = "normal";
    }
    if (CORRECT1>7 && CORRECT1<10 ){
      level = "ringan";
    }
    if (CORRECT1>9 && CORRECT3<14 ){
      level = "sederhana";  
    }
    if (CORRECT1>13 && CORRECT3<18 ){
      level = "teruk";
    }
    if (CORRECT1>17 ){
      level = "sangat teruk";
    }
    result1Text.innerText = level;

  }
   if(question.num == 2 || question.num == 4 || question.num == 7 || question.num == 9 ||question.num == 15|| question.num == 19 || question.num == 20 )
  {
    classToApply = "anxiety";
    b = CORRECT_BONUS;
    CORRECT2 = CORRECT2 + b;
    score2Text.innerText = CORRECT2;

    if (CORRECT2<5 ){
      level = "normal";
    }
    if (CORRECT2>4 && CORRECT1<7  ){
      level = "ringan";
    }
    if (CORRECT2>6 && CORRECT3<9 ){
      level = "sederhana";
    }
    if (CORRECT2>8 && CORRECT3<11  ){
      level = "teruk";
    }
    if (CORRECT2>10 ){
      level = "sangat teruk";
    }
    result2Text.innerText = level;
  }
   if(question.num == 3 || question.num == 5 || question.num == 10 || question.num == 13 ||question.num == 16|| question.num == 17 || question.num == 21 )
  { 
    classToApply = "depress";
    c = CORRECT_BONUS;
    CORRECT3 = CORRECT3 + c;
    score3Text.innerText = CORRECT3;

    if (CORRECT3<6 ){
      level = "normal";
    }
    if (CORRECT3>6 && CORRECT1<8  ){
      level = "ringan";
    }
    if (CORRECT3>7 && CORRECT3<11 ){
      level = "sederhana";
    }
    if (CORRECT3>10 && CORRECT3<13  ){
      level = "teruk";
    }
    if (CORRECT3>14 ){
      level = "sangat teruk";
    }
    result3Text.innerText = level;
  }

  
    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 500);
  }); 
});

startGame();

//if (CORRECT3<6 ){
//  level = "normal";
//}
//if (CORRECT3>6 && CORRECT1<8  ){
//  level = "ringan";
//}
//if (CORRECT3>7 && CORRECT3<11 ){
//  level = "sederhana";
//}
//if (CORRECT3>10 && CORRECT3<13  ){
//  level = "teruk";
//}
//if (CORRECT3>14 ){
//  level = "sangat teruk";
//}
///////////////////////////////////////////
//if (CORRECT2<5 ){
//  level = "normal";
//
//}
//if (CORRECT2>4 && CORRECT1<7  ){
//  level = "ringan";
//
//}
//if (CORRECT2>6 && CORRECT3<9 ){
//  level = "sederhana";
// 
//}
//if (CORRECT2>8 && CORRECT3<11  ){
//  level = "teruk";
//
//}
//if (CORRECT2>10 ){
//  level = "sangat teruk";
//
//}
//////////////////////////////////////////
//
//if (CORRECT1<8 ){
//  level = "normal";
//  result1Text.innerText = level;
//}
//if (CORRECT1>7 && CORRECT1<10 ){
//  level = "ringan";
//
//}
//if (CORRECT1>9 && CORRECT3<14 ){
//  level = "sederhana";
//
//}
//if (CORRECT1>13 && CORRECT3<18 ){
//  level = "teruk";
//
//}
//if (CORRECT1>17 ){
//  level = "sangat teruk";
//
//}