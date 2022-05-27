var startBtn = document.querySelector('#start')
var gameField = document.querySelector('#game')

var score = 0

function renderGenerateBoxes() {
    gameField.innerHTML = ''
    var box = document.createElement('div')
    box.setAttribute('data-box', 'true')

    generateBoxStyles(box)
    gameField.insertAdjacentElement('afterbegin', box)
}

function generateBoxStyles(box) {
    box.style.height = box.style.width = '50px'
    box.style.position = 'absolute'
    box.style.backgroundColor = '#000'
    box.style.top = '50px'
    box.style.left = '60px'
    box.style.cursor = 'pointer'
}

function startGame() {
    gameField.style.backgroundColor = '#fff'
    startBtn.classList.add('hide')

    renderGenerateBoxes()
}

function handleBoxClick(e) {
    if (e.target.dataset.box) {
        score++
        renderGenerateBoxes()
    }
}

startBtn.addEventListener('click', startGame)
gameField.addEventListener('click', handleBoxClick)