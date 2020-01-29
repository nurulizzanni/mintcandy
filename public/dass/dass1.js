const question = document.getElementById("question5");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const progressBarFull = document.getElementById("progressBarFull");
const score1Text = document.getElementById("score1");
const score2Text = document.getElementById("score2");
const score3Text = document.getElementById("score3");
const result1Text = document.getElementById("result1");
const result2Text = document.getElementById("result2");
const result3Text = document.getElementById("result3");


let currentQuestion = {};
let acceptingAnswers = false;
let questionCounter = 0;
let availableQuestions = [];
let questions=[
  {
    question123:"Saya rasa susah untuk bertenang",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id123: 1

  },
  {
    question123:"Saya sedar mulut saya rasa kering",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id123: 2

  },
  {
    question123:"Saya seolah-olah tidak dapat mengalami perasaan positif sama sekali",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id123: 3

  },
  {
    question123:"Saya mengalami kesukaran bernafas (contohnya, bernafas terlalu cepat, tercungap-cungap walaupun tidak melakukan aktiviti fizikal)",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id123: 4

  },
  {
    question123:"Saya rasa tidak bersemangat untuk memulakan sesuatu keadaan",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id123: 5

  },
  {
    question123:"Saya cenderung bertindak secara berlebihan kepada sesuatu keadaan",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id123: 6

  },
  {
    question123:"Saya pernah menggeletar (contohnya tangan)",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id123: 7

  },
  {
    question123:"Saya rasa saya terlalu gelisahan",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id123: 8

  },
  {
    question123:"Saya risau akan berlaku keadaan di mana saya panik dan berkelakuan bodoh",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id123: 9

  },
  {
    question123:"Saya rasa tidak ada apa yang saya harapkan (putus harapan)",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id123: 10

  },
  {
    question123:"Saya dapati saya mudah resah",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id123: 11

  },
  {
    question123:"Saya berasa sukar untuk relaks",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id123: 12

  },
  {
    question123:"Saya rasa muram dan sedih",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id123: 13
  
  },
  {
    question123:"Saya tidak boleh terima apa jua yang menghalangi saya daripada meneruskan apa yang saya sedang lakukan",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id123: 14

  },
  {
    question123:"Saya rasa hampir panik",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id123: 15

  },
  {
    question123:"Saya tidak bersemangat langsung",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id123: 16

  },
  {
    question123:"Saya rasa diri saya tidak berharga",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id123: 17

  },
  {
    question123:"Saya mudah tersinggung",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id123: 18
 
  },
  {
    question123:"Walaupun saya tidak melakukan aktiviti fizikal, saya sedar akan debaran jantung saya (contoh degupan jantung lebih cepat)",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id123: 19

  },
  {
    question123:"Saya rasa takut tanpa sebab",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id123: 20

  },
  {
    question123:"Saya rasa hidup ini tidak bererti lagi",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id123: 21

  }
];

//CONSTANTS
const MAX_QUESTIONS =21;
 CORRECT1 = 0;
 CORRECT2 = 0;
 CORRECT3 = 0;


newGame = () => {
  questionCounter = 0;
  level = ""
  score = 0;
  availableQuestions = [...questions];
  getAns();

};

getAns = () => {
  

  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    //go to the end page
    return window.location.assign("/score");
  }
 
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  //Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question123;
  question.num = currentQuestion.id123;


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
      getAns();
    }, 500);
  }); 
});


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

///////////////////////////////////////////

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

///////////////////////////////////////
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

newGame();
