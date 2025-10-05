const squares = document.querySelectorAll('.square')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const startButton = document.querySelector('#start-button')

let result = 0
let hitPosition
let currentTime = 30
let timerId = null
let countDownTimerId = null

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id === hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

function moveMole() {
    timerId = setInterval(randomSquare, 700)
}

//start game
function startGame() {
    result = 0
    score.textContent = result
    currentTime = 30
    timeLeft.textContent = currentTime
    if (timerId) clearInterval(timerId)
        timerId = setInterval(randomSquare, 700)

    if (countDownTimerId) clearInterval(countDownTimerId)
        countDownTimerId = setInterval(countDown, 1000)
}

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime
    if (currentTime === 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('Game Over! Your final score is ' + result)
    }
}

// start game when button clicked
startButton.addEventListener('click', startGame)
