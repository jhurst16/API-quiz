//5 questions

//Key Value Pair

var questions = [
    {
        qPrompt: 'commonly used data types DO NOT include',
        choicesPrompt: ['strings', 'numbers', 'alerts', 'booleans'],
        answer: 'alerts',
    },
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
        answer: 'all of the above',
    },
    //question4
    {
        qPrompt:
            'string values must be enclosed within___ when being assigned to a variable',
        choicesPrompt: ['javascript', 'terminal/bash', 'quotes', 'parenthesis'],
        answer: 'quotes',
    },
    {
        qPrompt:
            'A very useful tool during development and debugging for printing content to the debugger',
        choicesPrompt: ['', '', '', ''],
        answer: '',
    },
]

var timer = 75
var currentQuestion = null
var currentQuestionIndex = 0
var score = null
var intervalId = null

function setTimer(time) {
    timer = time
    //append timer to screen from console
}

var buttonEl = document.querySelector('#start-quiz')
buttonEl.addEventListener('click', function () {
    document.getElementById('question-container').style.display = 'flex'
    setQuestion(0) //hide "start quiz" button
    intervalId = setInterval(function () {
        setTimer(timer - 1)             //decrement time here if answered wrong

        if (timer < 0) {
            //stop timer from going negative
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
}

function checkAnswer(choice) {
    //set alert for correct/incorrect
    var correctAnswer = currentQuestion.answer
    if (choice === correctAnswer) {
    } else {
        setTimer(timer - 10) //set limit to # of questions
    }
    var nextIndex = currentQuestionIndex + 1
    if (nextIndex > questions.size) {
        //show top score
        //set up a prompt to enter intials
        //set up a button to clear highscores
        clearInterval(intervalId)
        window.alert('your top score is ' + timer)
    } else {
        setQuestion(nextIndex)
    }
}

document.querySelectorAll('li').forEach(function (li) {
    li.addEventListener('click', function (e) {
        checkAnswer(e.target.textContent)
    })
})
