const dead = document.getElementById("dead");
const lost = document.getElementById("lost");
let deadCount = 0;
let lostCount = 0;

const reload = function () {
  dead.textContent = deadCount;
  lost.textContent = lostCount;
};

function newGame(result) {
  alert("Вы " + result);
  deadCount = 0;
  lostCount = 0;
  reload();
  return;
}

function scoreGame() {
  if (deadCount === 10) {
    result = "победили";
    newGame(result);
  }
  if (lostCount === 5) {
    result = "проиграли";
    newGame(result);
  }
}

function getHole(index) {
  for (let i = 1; i <= index; i++) {
    let hole = document.getElementById(`hole${i}`);
    hole.onclick = function () {
      if (hole.className.includes("hole_has-mole")) {
        deadCount++;
        reload();
        scoreGame();
      } else {
        lostCount++;
        reload();
        scoreGame();
      }
    };
  }
}

getHole(8)