const mostRecentScore01 = localStorage.getItem("mostRecentScore1");
const mostRecentScore02 = localStorage.getItem("mostRecentScore2");
const mostRecentScore03 = localStorage.getItem("mostRecentScore3");
const result1 = document.getElementById("result01");
const result2 = document.getElementById("result02");
const result3 = document.getElementById("result03");

result1.innerText = mostRecentScore01;
result2.innerText = mostRecentScore02;
result3.innerText = mostRecentScore03;

