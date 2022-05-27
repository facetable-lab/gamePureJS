var startBtn = document.querySelector('#start')
var gameField = document.querySelector('#game')
var time = document.querySelector('#time')
var result = document.querySelector('#result')
var timeHeader = document.querySelector('#time-header')
var resultHeader = document.querySelector('#result-header')
var gameTime = document.querySelector('#game-time')

var score = 0
var isGameStarted = false

function startGame() {
    gameTime.setAttribute('disabled', 'true')
    score = 0
    setGameTime()
    isGameStarted = true

    gameField.style.backgroundColor = '#fff'
    hide(startBtn)

    var interval = setInterval(function () {
        var timeContent = parseFloat(time.textContent)
        if (timeContent <= 0) {
            clearInterval(interval)
            endGame()
        } else {
            time.textContent = (timeContent - 0.1).toFixed(1)
        }
    }, 100)

    renderGenerateBoxes()
}

function resetGameFieldAfterEndGame() {
    show(startBtn)
    gameField.innerHTML = ''
    gameField.style.backgroundColor = '#ccc'
    hide(timeHeader)
    show(resultHeader)
}

function resetTitleAfterEndGame() {
    show(timeHeader)
    hide(resultHeader)
}

function calcGameScore() {
    result.textContent = score.toString()
}

function setGameTime() {
    var timeStartNewGame = +gameTime.value
    time.textContent = timeStartNewGame.toFixed(1)
    resetTitleAfterEndGame()
}

function endGame() {
    gameTime.removeAttribute('disabled')
    isGameStarted = false
    calcGameScore()
    resetGameFieldAfterEndGame()
}

function handleBoxClick(e) {
    if (!isGameStarted) {
        return
    }

    if (e.target.dataset.box) {
        score++
        renderGenerateBoxes()
    }
}

function renderGenerateBoxes() {
    gameField.innerHTML = ''
    var box = document.createElement('div')
    var boxSize = generateBoxSize(30, 100)
    var gameFieldSize = gameField.getBoundingClientRect()
    var maxTop = generateLambdaNums(gameFieldSize, boxSize)[0] //gameFieldSize.height - boxSize
    var maxLeft = generateLambdaNums(gameFieldSize, boxSize)[1] //gameFieldSize.width - boxSize

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
    boxColor = generateRandomColor()
    console.log(boxColor)
    box.style.backgroundColor = 'rgb('+ boxColor[0] +','+ boxColor[1] +','+ boxColor[2] +')'
    console.log(box.style.backgroundColor.toString())
    box.style.top = generateBoxSize(0, maxTop) + 'px'
    box.style.left = generateBoxSize(0, maxLeft) + 'px'
    box.style.cursor = 'pointer'
}

function generateRandomColor() {
    valueRed = Math.floor(Math.random() * 255)
    valueGreen = Math.floor(Math.random() * 255)
    valueBlue = Math.floor(Math.random() * 255)
    return [valueRed, valueGreen, valueBlue]
}

startBtn.addEventListener('click', startGame)
gameField.addEventListener('click', handleBoxClick)
gameTime.addEventListener('input', setGameTime)

function show(el) {
    el.classList.remove('hide')
}

function hide(el) {
    el.classList.add('hide')
}