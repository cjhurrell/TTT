let turn = "X"; // Start with player1

function select(cell) {
  if (cell.textContent !== "") return;// Cell already taken

  //if (turn === "X")cell.textContent = "X"; // Player 1's symbol
  
  
cell.textContent = turn; // Player 2's symbol


  //cell.textContent = turn; // Set the cell to the current player's symbol
  turn = turn === "X" ? "O" : "X"; // Switch turns


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

