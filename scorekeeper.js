const p1 = {
    score: 0,
    button: document.querySelector("#p1Button"),
    display: document.querySelector("#p1Display")
}
const p2 = {
    score: 0,
    button: document.querySelector("#p2Button"),
    display: document.querySelector("#p2Display")
}

const resetButton = document.querySelector("#resetButton");
const playToSelect = document.querySelector("#playTo");

let winningScore = 3;
let isGameOver = false;

playToSelect.addEventListener("change", function () {
    winningScore = parseInt(this.value);
    reset();
});

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score++;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add("has-text-primary");
            opponent.display.classList.add("has-text-danger");
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }

}
p1.button.addEventListener("click", function () {
    updateScore(p1, p2);
});

p2.button.addEventListener("click", function () {
    updateScore(p2, p1);
});
resetButton.addEventListener("click", reset);

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = p.score;
        p.display.classList.remove("has-text-primary", "has-text-danger");
        p.button.disabled = false;

    }
}