import Game from './Game'

const game = new Game() //initializing the game

//html elements
const grid = document.querySelector("._game-grid")
const gameContainer = document.querySelector("._game-container")
const gameStatusContainer = document.querySelector("._game-status-container")
const statusDisplay = document.querySelector("._game-status")
const restartBtn = document.querySelector("._restart")

//create grid cells and add click event using DOM manipulation
for (let i = 0; i < 9; i++) {
    let gridCell = document.createElement("div")
    gridCell.setAttribute("class", "_game-grid-item")
    grid.appendChild(gridCell)
    gridCell.addEventListener("click", () => {
        if(game.checkIfDisabled(i)){
            let turn = game.turn //X or O's turn
            game.onSelect(i) //trigger function when you click on a cell
            gridCell.classList.add(turn) //puts X or O into the cell
            //check if there was a win or a tie
            if(game.status){
                setTimeout(() => {
                    gameContainer.classList.add('_hide')
                    gameStatusContainer.classList.remove('_hide')
                    statusDisplay.innerHTML = game.status //display win or tie
                }, 500);
            }
        }
    })
}

//reset the game and the DOM
restartBtn.addEventListener("click", () => {
    game.restart()
    document.querySelectorAll("._game-grid-item").forEach((gridCell) => {
        gridCell.classList.remove('x', 'o')
        gameContainer.classList.remove('_hide')
        gameStatusContainer.classList.add('_hide')
        statusDisplay.innerHTML = ''
    })
})