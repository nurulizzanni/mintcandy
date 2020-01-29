const question = document.getElementById("question123");
const idQue = document.getElementById("id000");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById("progressText");
const scoreText1 = document.getElementById("score1");
const scoreText2 = document.getElementById("score2");
const scoreText3 = document.getElementById("score3");

const progressBarFull = document.getElementById("progressBarFull");
let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];
localStorage.clear();
sessionStorage.clear();

let questions = [
  {
    question123:"Saya rasa susah untuk bertenang",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id123: 1,
    test2: 2,
    test3: 3,
    test4: 4,
    level1: "normal",
    level2: "ringan",
    level3: "sederhana",
    level4: "teruk",
    level5: "sangat teruk"

  },
  {
    question123:"Saya sedar mulut saya rasa kering",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id123: 2,
    test2: 2,
    test3: 3,
    test4: 4,
    level1: "normal",
    level2: "ringan",
    level3: "sederhana",
    level4: "teruk",
    level5: "sangat teruk"

  },
  {
    question123:"Saya seolah-olah tidak dapat mengalami perasaan positif sama sekali",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id123: 3,
    test2: 2,
    test3: 3,
    test4: 4,
    level1: "normal",
    level2: "ringan",
    level3: "sederhana",
    level4: "teruk",
    level5: "sangat teruk"

  },
  {
    question123:"Saya mengalami kesukaran bernafas (contohnya, bernafas terlalu cepat, tercungap-cungap walaupun tidak melakukan aktiviti fizikal)",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id123: 4,
    test2: 2,
    test3: 3,
    test4: 4,
    level1: "normal",
    level2: "ringan",
    level3: "sederhana",
    level4: "teruk",
    level5: "sangat teruk"

  },
  {
    question123:"Saya rasa tidak bersemangat untuk memulakan sesuatu keadaan",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id123: 5,
    test2: 2,
    test3: 3,
    test4: 4,
    level1: "normal",
    level2: "ringan",
    level3: "sederhana",
    level4: "teruk",
    level5: "sangat teruk"

  },
  {
    question123:"Saya cenderung bertindak secara berlebihan kepada sesuatu keadaan",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id123: 6,
    test2: 2,
    test3: 3,
    test4: 4,
    level1: "normal",
    level2: "ringan",
    level3: "sederhana",
    level4: "teruk",
    level5: "sangat teruk"

  },
  {
    question123:"Saya pernah menggeletar (contohnya tangan)",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id123: 7,
    test2: 2,
    test3: 3,
    test4: 4,
    level1: "normal",
    level2: "ringan",
    level3: "sederhana",
    level4: "teruk",
    level5: "sangat teruk"

  },
  {
    question123:"Saya rasa saya terlalu gelisahan",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id123: 8,
    test2: 2,
    test3: 3,
    test4: 4,
    level1: "normal",
    level2: "ringan",
    level3: "sederhana",
    level4: "teruk",
    level5: "sangat teruk"

  },
  {
    question123:"Saya risau akan berlaku keadaan di mana saya panik dan berkelakuan bodoh",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id123: 9,
    test2: 2,
    test3: 3,
    test4: 4,
    level1: "normal",
    level2: "ringan",
    level3: "sederhana",
    level4: "teruk",
    level5: "sangat teruk"

  },
  {
    question123:"Saya rasa tidak ada apa yang saya harapkan (putus harapan)",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id123: 10,
    test2: 2,
    test3: 3,
    test4: 4,
    level1: "normal",
    level2: "ringan",
    level3: "sederhana",
    level4: "teruk",
    level5: "sangat teruk"

  },
  {
    question123:"Saya dapati saya mudah resah",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id123: 11,
    test2: 2,
    test3: 3,
    test4: 4,
    level1: "normal",
    level2: "ringan",
    level3: "sederhana",
    level4: "teruk",
    level5: "sangat teruk"

  },
  {
    question123:"Saya berasa sukar untuk relaks",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id123: 12,
    test2: 2,
    test3: 3,
    test4: 4,
    level1: "normal",
    level2: "ringan",
    level3: "sederhana",
    level4: "teruk",
    level5: "sangat teruk"

  },
  {
    question123:"Saya rasa muram dan sedih",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id123: 13,
    test2: 2,
    test3: 3,
    test4: 4,
    level1: "normal",
    level2: "ringan",
    level3: "sederhana",
    level4: "teruk",
    level5: "sangat teruk"
  
  },
  {
    question123:"Saya tidak boleh terima apa jua yang menghalangi saya daripada meneruskan apa yang saya sedang lakukan",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id123: 14,
    test1: 1,
    test2: 2,
    test3: 3,
    test4: 4,
    level1: "normal",
    level2: "ringan",
    level3: "sederhana",
    level4: "teruk",
    level5: "sangat teruk"

  },
  {
    question123:"Saya rasa hampir panik",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id123: 15,
    test1: 1,
    test2: 2,
    test3: 3,
    test4: 4,
    level1: "normal",
    level2: "ringan",
    level3: "sederhana",
    level4: "teruk",
    level5: "sangat teruk"

  },
  {
    question123:"Saya tidak bersemangat langsung",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id123: 16,
    test1: 1,
    test2: 2,
    test3: 3,
    test4: 4,
    level1: "normal",
    level2: "ringan",
    level3: "sederhana",
    level4: "teruk",
    level5: "sangat teruk"

  },
  {
    question123:"Saya rasa diri saya tidak berharga",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id123: 17,
    test1: 1,
    test2: 2,
    test3: 3,
    test4: 4,
    level1: "normal",
    level2: "ringan",
    level3: "sederhana",
    level4: "teruk",
    level5: "sangat teruk"

  },
  {
    question123:"Saya mudah tersinggung",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id123: 18,
    test1: 1,
    test2: 2,
    test3: 3,
    test4: 4,
    level1: "normal",
    level2: "ringan",
    level3: "sederhana",
    level4: "teruk",
    level5: "sangat teruk"
 
  },
  {
    question123:"Walaupun saya tidak melakukan aktiviti fizikal, saya sedar akan debaran jantung saya (contoh degupan jantung lebih cepat)",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id123: 19,
    test1: 1,
    test2: 2,
    test3: 3,
    test4: 4,
    level1: "normal",
    level2: "ringan",
    level3: "sederhana",
    level4: "teruk",
    level5: "sangat teruk"

  },
  {
    question123:"Saya rasa takut tanpa sebab",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id123: 20,
    test1: 1,
    test2: 2,
    test3: 3,
    test4: 4,
    level1: "normal",
    level2: "ringan",
    level3: "sederhana",
    level4: "teruk",
    level5: "sangat teruk"

  },
  {
    question123:"Saya rasa hidup ini tidak bererti lagi",
    choice1: "Tidak Pernah",
    choice2: "Jarang",
    choice3: "Kerap",
    choice4: "Sangat Kerap",
    id123: 21,
    test1: 1,
    test2: 2,
    test3: 3,
    test4: 4,
    level1: "normal",
    level2: "ringan",
    level3: "sederhana",
    level4: "teruk",
    level5: "sangat teruk"

  }
];

//CONSTANTS
const kira = 10;
const MAX_QUESTIONS = 21;
koko1 = 0;
koko2 = 0;
koko3 = 0;

startdd = () => {
  questionCounter = 0;
  score = 0;
  level = "";
  availableQuesions = [...questions];
  getN();
};

getN = () => {
  if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    if (koko1<8 ){
      fufu1 = currentQuestion.level1; 
    }
    if (koko1>7 && koko1<10 ){
      fufu1 = currentQuestion.level2;
    }
    if (koko1>9 && koko1<14 ){
      fufu1 = currentQuestion.level3;  
    }
    if (koko1>13 && koko1<18 ){
      fufu2 = currentQuestion.level4;
    }
    if (koko1>17 ){
      fufu2 = currentQuestion.level5;
    }
    /////////////////////////////
    if (koko2<5 ){
      fufu2 = currentQuestion.level1; 
    }
    if (koko2>4 && koko2<7 ){
      fufu2 = currentQuestion.level2;
    }
    if (koko2>6 && koko2<9 ){
      fufu2 = currentQuestion.level3;  
    }
    if (koko2>8 && koko2<11 ){
      fufu2 = currentQuestion.level4;
    }
    if (koko2>10 ){
      fufu2 = currentQuestion.level5;
    }
    //////////////////////////////////////////////////
    if (koko3<6 ){
      fufu3 = currentQuestion.level1; 
    }
    if (koko3>5 && koko3<8 ){
      fufu3 = currentQuestion.level2;
    }
    if (koko3>7 && koko3<11 ){
      fufu3 = currentQuestion.level3;  
    }
    if (koko3>10 && koko3<13 ){
      fufu3 = currentQuestion.level4;
    }
    if (koko3>14 ){
      fufu3 = currentQuestion.level5;
    }

    localStorage.setItem("mostRecentScore1", fufu1);
    localStorage.setItem("mostRecentScore2", fufu2);
    localStorage.setItem("mostRecentScore3", fufu3);
    //go to the end page
    return window.location.assign("/score");
  }
  questionCounter++;
  progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
  //Update the progress bar
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionIndex = Math.floor(Math.random() * availableQuesions.length);
  currentQuestion = availableQuesions[questionIndex];
  question.innerText = currentQuestion.question123;
  idQue.innerText = currentQuestion.id123;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuesions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect"; 

      if (selectedAnswer==currentQuestion.test1){
        koko=0;
      }
      if (selectedAnswer==currentQuestion.test2){
        koko=1;
      }
      if (selectedAnswer==currentQuestion.test3){
        koko=2;
      }
      if (selectedAnswer==currentQuestion.test4){
        koko=3;
      }
      /////////////////////////////////////////////

      if(currentQuestion.id123 == 1 || currentQuestion.id123 == 6 || currentQuestion.id123 == 8 || currentQuestion.id123 == 11 ||currentQuestion.id123 == 12|| currentQuestion.id123 == 14 || currentQuestion.id123 == 18 )
      {
         koko1=koko1+koko;
         scoreText1.innerText = koko1;
      }
      if(currentQuestion.id123 == 2 || currentQuestion.id123 == 4 || currentQuestion.id123 == 7 || currentQuestion.id123 == 9 ||currentQuestion.id123 == 15|| currentQuestion.id123 == 19 || currentQuestion.id123 == 20 )
      {

        koko2 = koko2 + koko;
        scoreText2.innerText = koko2;
   
      }
      if(currentQuestion.id123 == 3 || currentQuestion.id123 == 5 || currentQuestion.id123 == 10 || currentQuestion.id123 == 13 ||currentQuestion.id123 == 16|| currentQuestion.id123 == 17 || currentQuestion.id123 == 21 )
      { 
    
        koko3 = koko3 + koko;
        scoreText3.innerText = koko3;

      }
     

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getN();
    }, 500);
  });
});




startdd();
