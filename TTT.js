let turn = "X"; // Start with player1

function checkWinner() {
  const cells = document.querySelectorAll(".cell");
  const winningCombinations = [
    [0, 1, 2], // Row 1
    [3, 4, 5], // Row 2
    [6, 7, 8], // Row 3
    [0, 3, 6], // Column 1
    [1, 4, 7], // Column 2
    [2, 5, 8], // Column 3
    [0, 4, 8], // Diagonal \
    [2, 4, 6]  // Diagonal / 
  ];

  cells.forEach((cell, index) => {
  if (winningCombinations.some(combination => combination.every(i => cells[i].textContent === cell.textContent && cell.textContent !== ""))) {
      alert(`Player ${cell.textContent} wins!`);
      resetGame();
    };
  });

  if ([...cells].every(cell => cell.textContent !== "")) {
    alert("It's a draw!");
    resetGame();
  };
};

function resetGame() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => {
    cell.textContent = ""; // Clear the cell
  });
}

function select(cell) {
  if (cell.textContent !== "") return;// Cell already taken

  //if (turn === "X")cell.textContent = "X"; // Player 1's symbol
  
  
cell.textContent = turn; // Player 2's symbol


  //cell.textContent = turn; // Set the cell to the current player's symbol
  turn = turn === "X" ? "O" : "X"; // Switch turns


  checkWinner();

}


document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".cell").forEach(div => {
        div.addEventListener("click", () => {
            if (div.textContent === "") {
                select(div);
            }
        });
    });
})

