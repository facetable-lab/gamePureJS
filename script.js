var startBtn = document.querySelector('#start')
var gameField = document.querySelector('#game')

function renderGenerateBoxes() {

}

function startGame() {
    gameField.style.backgroundColor = '#fff'
    startBtn.classList.add('hide')

    renderGenerateBoxes()
}

startBtn.addEventListener('click', startGame)