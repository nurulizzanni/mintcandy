const highScoresList = document.getElementById("highScoresList");



highScoresList.innerHTML = highScores
  .map(score => {
    return CORRECT3;
  })
  .join("");
 ;