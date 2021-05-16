//5 questions

//Key Value Pair

var questions = [
    //question 1
    {
        qPrompt: 'commonly used data types DO NOT include',
        choicesPrompt: ['strings', 'numbers', 'alerts', 'booleans'],
        answer: 'alerts',
    },
    //question 2
    {
        qPrompt: 'The condition in an if/else statement us enclosed within',
        choicesPrompt: ['quotes', 'curly braces', 'parenthesis', 'square brackets'],
        answer: 'curly braces',
    },
    //question3
    {
        qPrompt: 'arrays in javascript can be used to store',
        choicesPrompt: [
            'numbers and strings',
            'arrays',
            'booleans',
            'all of the above',
        ],
        answer: 'all of the above'
    },
    //question4
    {
        qPrompt:
            'string values must be enclosed within___ when being assigned to a variable',
        choicesPrompt: ['javascript', 'terminal/bash', 'quotes', 'parenthesis'],
        answer: 'quotes',
    },
    //question 5
    {
        qPrompt:
            'A very useful tool during development and debugging for printing content to the debugger is',
        choicesPrompt: ['javascript', 'terminal/bash', 'for loops', 'console log'],
        answer: 'console log',
    }
]

var timer = 75
var currentQuestion = null
var currentQuestionIndex = 0
var score = null
var intervalId = null
var timerEl = document.getElementById('timer')

function setTimer(time) {
    timer = time
    timerEl.innerHTML = time
    //append timer to screen from console
}

var buttonEl = document.querySelector('#start-quiz')
buttonEl.addEventListener('click', function () {
    document.getElementById('question-container').style.display = 'flex'
    document.getElementById('start-container').style.display = 'none'
    setQuestion(0) //hide "start quiz" button
    intervalId = setInterval(function () {
        setTimer(timer - 1)             //decrement time here if answered wrong

        if (timer < 1) {
            //stop timer from going negative
            clearInterval(intervalId)
            window.alert('your top score is ' + timer)
        }
    }, 1000)
})

function setQuestion(index) {
    //sets question to registered index


    currentQuestionIndex = index
    currentQuestion = questions[index]
    document.getElementById('question-content').innerHTML =
        currentQuestion.qPrompt

    document.getElementById('choice1').innerHTML =
        currentQuestion.choicesPrompt[0]

    document.getElementById('choice2').innerHTML =
        currentQuestion.choicesPrompt[1]

    document.getElementById('choice3').innerHTML =
        currentQuestion.choicesPrompt[2]

    document.getElementById('choice4').innerHTML =
        currentQuestion.choicesPrompt[3]

    document.getElementById('choice5').innerHTML =
        currentQuestion.choicesPrompt[4]
}

function checkAnswer(choice) {
    //set alert for correct/incorrect
    var correctAnswer = currentQuestion.answer

    if (choice === correctAnswer) {

    }

    else {
        setTimer(timer - 10) //set limit to # of questions
    }

    var nextIndex = currentQuestionIndex + 1

    if (nextIndex >= questions.length) {
        clearInterval(intervalId)
        var questionContainer = document.querySelector('#question-container')
        questionContainer.style.display = "none"
        var displayScore = document.querySelector('#display-score')
        document.getElementById('save-highscore')
            .addEventListener('click', function () {
                var highscores = JSON.parse(localStorage.getItem("highscore"))
                highscores.push({
                    intials: document.getElementById('initials').value,
                    score: timer
                })
                window.localStorage.setItem("highscore", JSON.stringify(highscores));
                displayScore.style.display = 'none'
                var displayHighscores = document.querySelector('#display-highscores')
                displayHighscores.style.display = 'block'
            })




        displayScore.style.display = 'block'

        //set up a button to clear highscores


        document.getElementById('highscore').innerHTML = timer
    }
    else {
        setQuestion(currentQuestionIndex + 1)
    }
}



document.querySelectorAll('li').forEach(function (li) {
    li.addEventListener('click', function (e) {
        checkAnswer(e.target.textContent)
    })
})
