document.getElementById("random-game-btn").addEventListener("click", function() {
    const games = ["Game 1", "Game 2", "Game 3", "Game 4", "Game 5"];
    const randomGame = games[Math.floor(Math.random() * games.length)];
    document.getElementById("random-game").textContent = Try this game: ${randomGame};
});