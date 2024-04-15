const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex +1) { 
      nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass (element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What xxxxxxxxxxxxxxx?', 
        answers: [
            { text: 'xxxxx', correct: false},
            { text: 'xxxxx', correct: false},
            { text: 'xxxx', correct: false},
            { text: 'xxxx', correct: true}
        ]
    },
    {
        question: 'What xxxxxxxxxxxxxxx?', 
        answers: [
            { text: 'xx', correct: true},
            { text: 'xx', correct: false},
            { text: 'xx', correct: false},
            { text: 'xx', correct: false}
        ]
    },
    {
        question: 'What xxxxxxxxxxxxxxx?', 
        answers: [
            { text: 'xxx', correct: false},
            { text: 'xxx', correct: true},
            { text: 'xxx', correct: false},
            { text: 'xxx', correct: false}
        ]
    },
    {
        question: 'What xxxxxxxxxxxxxxx?', 
        answers: [
            { text: 'xxcc', correct: false},
            { text: 'xxcc', correct: false},
            { text: 'xxcc', correct: true},
            { text: 'xxcc', correct: false}
        ]
    },
    {
        question: 'What xxxxxxxxxxxxxxx?', 
        answers: [
            { text: 'ccvv', correct: false},
            { text: 'bbvv', correct: true},
            { text: 'ggvv', correct: false},
            { text: 'ffdd', correct: false}
        ]
    },
    {
        question: 'What xxxxxxxxxxxxxxx?', 
        answers: [
            { text: 'ssss', correct: false},
            { text: 'dddd', correct: false},
            { text: 'ffff', correct: false},
            { text: 'eeee', correct: true}
        ]
    },
    {
        question: 'What xxxxxxxxxxxxxxx?', 
        answers: [
            { text: 'wwss', correct: false},
            { text: 'gdfr', correct: false},
            { text: 'pdfpr', correct: true},
            { text: 'pdse', correct: false}
        ]
    },
    {
        question: 'What kind of insects are bees?', 
        answers: [
            { text: 'Wingless insects', correct: false},
            { text: 'Winged insects', correct: true },
            { text: 'Eusocial insects', correct: false},
            { text: 'Pets', correct: false}
        ]
    },
    {
        question: 'How many legs does a bee have?', 
        answers: [
            { text: 'four', correct: false},
            { text: 'eight', correct: false },
            { text: 'six', correct: true},
            { text: 'two', correct: false}
        ]
    },
    {
        question: 'How long is the life cycle of a bee?', 
        answers: [
            { text: '2-4 years', correct: false },
            { text: '18-30 days', correct: true },
            { text: '60-90 days', correct: false },
            { text: '24 hours', correct: false}
        ]
    },
]