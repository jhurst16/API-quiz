//5 questions

//Key Value Pair

var questions = [
    {
        qPrompt: 'commonly used data types DO NOT include',
        choicesPrompt: [
            'strings',
            'numbers',
            'alerts',
            'booleans'
        ], 
        answer:'alerts'
    },
    {
        qPrompt: 'The condition in an if/else statement us enclosed within',
        choicesPrompt: [
            'quotes',
            'curly braces',
            'parenthesis',
            'square brackets'
        ], 
        answer:'curly braces'
    },
    //question3
    {
        qPrompt: 'arrays in javascript can be used to store',
        choicesPrompt: [
            'numbers and strings',
            'arrays',
            'booleans',
            'all of the above'
        ], 
        answer:'all of the above'
    },
    //question4
    {
        qPrompt: 'string values must be enclosed within___ when being assigned to a variable',
        choicesPrompt: [
            'javascript',
            'terminal/bash',
            'quotes',
            'parenthesis'
        ], 
        answer:'quotes'
    },
    {
        qPrompt: '',
        choicesPrompt: [
            '',
            '',
            '',
            ''
        ], 
        answer:''
    },
]


var timer = 75

 function setTimer(time) {
    timer = time
    console.log(timer)//append here
 }
 setInterval(function() {
    setTimer(timer - 1)//decrement time here if answered wrong



    if (timer <0) {
        //stop timer from going negative
    }
 },1000)






