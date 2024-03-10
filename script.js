var gameBoard = document.querySelector(".gameboard__section");
gameBoard = gameBoard.children;

var gameBoardCells = [];

//aca voy a almacenar cada celda en el array "gameBoardCells"
for(let i = 0; i < gameBoard.length; i++){
    gameBoardCells.push(gameBoard[i])
}

console.log(gameBoardCells);
