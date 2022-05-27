var startBtn = document.querySelector('#start')
var gameField = document.querySelector('#game')

var score = 0

function renderGenerateBoxes() {
    gameField.innerHTML = ''
    var box = document.createElement('div')
    var boxSize = generateBoxSize(30, 125)
    var gameFieldSize = gameField.getBoundingClientRect()
    var maxTop = generateLambdaNums(gameFieldSize, boxSize)[0] //gameFieldSize.height - boxSize
    var maxLeft = generateLambdaNums(gameFieldSize, boxSize)[1] //gameFieldSize.width - boxSize
    console.log(gameFieldSize)

    box.setAttribute('data-box', 'true')

    generateBoxStyles(box, boxSize, maxTop, maxLeft)

    gameField.insertAdjacentElement('afterbegin', box)
}

function generateLambdaNums(gameFieldSize, boxSize) {
    return [gameFieldSize.height - boxSize, gameFieldSize.width - boxSize]
}

function generateBoxSize(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function generateBoxStyles(box, boxSize, maxTop, maxLeft) {
    box.style.height = box.style.width = boxSize + 'px'
    box.style.position = 'absolute'
    box.style.backgroundColor = '#000'
    box.style.top = generateBoxSize(0, maxTop) + 'px'
    box.style.left = generateBoxSize(0, maxLeft) + 'px'
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