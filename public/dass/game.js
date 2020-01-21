const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const score1Text = document.getElementById("score1");
const score2Text = document.getElementById("score2");
const score3Text = document.getElementById("score3");
const result1Text = document.getElementById("result1");
const result2Text = document.getElementById("result2");
const result3Text = document.getElementById("result3");


let questions = [
  {
    question:"Saya rasa susah untuk bertenang",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id: 1,

  },
  {
    question:"Saya sedar mulut saya rasa kering",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id: 2,

  },
  {
    question:"Saya seolah-olah tidak dapat mengalami perasaan positif sama sekali",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id: 3,

  },
  {
    question:"Saya mengalami kesukaran bernafas (contohnya, bernafas terlalu cepat, tercungap-cungap walaupun tidak melakukan aktiviti fizikal)",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id: 4,

  },
  {
    question:"Saya rasa tidak bersemangat untuk memulakan sesuatu keadaan",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id: 5,

  },
  {
    question:"Saya cenderung bertindak secara berlebihan kepada sesuatu keadaan",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id: 6,

  },
  {
    question:"Saya pernah menggeletar (contohnya tangan)",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id: 7,

  },
  {
    question:"Saya rasa saya terlalu gelisahan",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id: 8,

  },
  {
    question:"Saya risau akan berlaku keadaan di mana saya panik dan berkelakuan bodoh",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id: 9,

  },
  {
    question:"Saya rasa tidak ada apa yang saya harapkan (putus harapan)",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id: 10,

  },
  {
    question:"Saya dapati saya mudah resah",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id: 11,

  },
  {
    question:"Saya berasa sukar untuk relaks",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id: 12,

  },
  {
    question:"Saya rasa muram dan sedih",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id: 13,
  
  },
  {
    question:"Saya tidak boleh terima apa jua yang menghalangi saya daripada meneruskan apa yang saya sedang lakukan",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id: 14,

  },
  {
    question:"Saya rasa hampir panik",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id: 15,

  },
  {
    question:"Saya tidak bersemangat langsung",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id: 16,

  },
  {
    question:"Saya rasa diri saya tidak berharga",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id: 17,

  },
  {
    question:"Saya mudah tersinggung",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id: 18,
 
  },
  {
    question:"Walaupun saya tidak melakukan aktiviti fizikal, saya sedar akan debaran jantung saya (contoh degupan jantung lebih cepat)",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id: 19,

  },
  {
    question:"Saya rasa takut tanpa sebab",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id: 20,

  },
  {
    question:"Saya rasa hidup ini tidak bererti lagi",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id: 21,

  }
 
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
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();

};

getNewQuestion = () => {
  
  if (questionCounter == MAX_QUESTIONS) {
    //go to the end page
    return window.location.assign("/score");
  }

  questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  //Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
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
  }
   if(question.num == 2 || question.num == 4 || question.num == 7 || question.num == 9 ||question.num == 15|| question.num == 19 || question.num == 20 )
  {
    classToApply = "anxiety";
    b = CORRECT_BONUS;
    CORRECT2 = CORRECT2 + b;
    score2Text.innerText = CORRECT2;
  }
   if(question.num == 3 || question.num == 5 || question.num == 10 || question.num == 13 ||question.num == 16|| question.num == 17 || question.num == 21 )
  { 
    classToApply = "depress";
    c = CORRECT_BONUS;
    CORRECT3 = CORRECT3 + c;
    score3Text.innerText = CORRECT3;
  }

  
    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 500);
  }); 
});


startGame();

if (CORRECT3<6 ){
  level = "normal";
  result3.innerText = level;

}
if (CORRECT3>6 && CORRECT1<8  ){
  level = "ringan";
  result3.innerText = level;
}
if (CORRECT3>7 && CORRECT3<11 ){
  level = "sederhana";
  result3.innerText = level;
}
if (CORRECT3>10 && CORRECT3<13  ){
  level = "teruk";
  result3.innerText = level;
}
if (CORRECT3>14 ){
  level = "sangat teruk";
  result3.innerText = level;
}
/////////////////////////////////////////
if (CORRECT2<5 ){
  level = "normal";
  result2.innerText = level;
}
if (CORRECT2>4 && CORRECT1<7  ){
  level = "ringan";
  result2.innerText = level;
}
if (CORRECT2>6 && CORRECT3<9 ){
  level = "sederhana";
  result2.innerText = level;
}
if (CORRECT2>8 && CORRECT3<11  ){
  level = "teruk";
  result2.innerText = level;
}
if (CORRECT2>10 ){
  level = "sangat teruk";
  result2.innerText = level;
}
////////////////////////////////////////

if (CORRECT1<8 ){
  level = "normal";
  result1.innerText = level;
}
if (CORRECT1>7 && CORRECT1<10 ){
  level = "ringan";
  result1.innerText = level;
}
if (CORRECT1>9 && CORRECT3<14 ){
  level = "sederhana";
  result1.innerText = level;
}
if (CORRECT1>13 && CORRECT3<18 ){
  level = "teruk";
  result1.innerText = level;
}
if (CORRECT1>17 ){
  level = "sangat teruk";
  result1.innerText = level;
}