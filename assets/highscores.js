const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const clearScores = document.getElementById("clearScores");

highScoresList.innerHTML = highScores
  .map(score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");

  clearScores.addEventListener("click", e => {
    localStorage.clear();
    location.reload();
  })