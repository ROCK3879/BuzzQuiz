/**
 * Starts the game by hiding the start button, resetting the score, and displaying the first question.
 */
const questions = [
    {
        question: 'The body of most insects consists of?', 
        answers: [
            { text: '8 parts', correct: false},
            { text: '4 parts', correct: false},
            { text: '6 parts', correct: false},
            { text: '3 parts', correct: true}
        ]
    },
    {
        question: 'The complete transformation of insects is called?', 
        answers: [
            { text: 'Holometabolic transformation', correct: true},
            { text: 'Retarded transformation', correct: false},
            { text: 'Pheromone transformation', correct: false},
            { text: 'Hemimetabolic transformation', correct: false}
        ]
    },
    {
        question: 'Mosquitoes belong to the type of insects we call?', 
        answers: [
            { text: 'Right wingers', correct: false},
            { text: 'Biplane', correct: true},
            { text: 'Hymenoptera', correct: false},
            { text: 'Hard-wings', correct: false}
        ]
    },
    {
        question: 'Meganeura monyi is?', 
        answers: [
            { text: 'Latin word in medicine', correct: false},
            { text: 'Insect of the new age', correct: false},
            { text: 'A prehistoric insect', correct: true},
            { text: 'It does not belong to any kind of insect', correct: false}
        ]
    },
    {
        question: 'The production of light in fireflies serves for?', 
        answers: [
            { text: 'To catch them more easily', correct: false},
            { text: 'To attract a partner', correct: true},
            { text: 'For defense against predators', correct: false},
            { text: 'To avoid a partner', correct: false}
        ]
    },
    {
        question: 'Which of the insects are considered the fastest runners?', 
        answers: [
            { text: 'Ant', correct: false},
            { text: 'Cockchafer', correct: false},
            { text: 'Stinkbug', correct: false},
            { text: 'Cockroach', correct: true}
        ]
    },
    {
        question: 'Who are the oldest living chewing herbivores?', 
        answers: [
            { text: 'Mantis', correct: false},
            { text: 'Cricket', correct: false},
            { text: 'Grasshoppers', correct: true},
            { text: 'Termite', correct: false}
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
];

const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const resultsContainer = document.getElementById('results-container');
const resultsElement = document.getElementById('results');
let shuffledQuestions, currentQuestionIndex;
let score = 0;

document.addEventListener("DOMContentLoaded", (event) => {
  startButton.addEventListener('click', startGame);
  nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});
});

/**
 * Starts the game click the start button.
 */
function startGame() {
    startButton.classList.add('hide');
    resultsContainer.classList.add('hide'); 
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    score = 0; // Reset the score
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

/**
 * Sets the next question in the quiz.
 */
function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

/**
 * Displays the given question on the screen.
 * The question object containing the question text and answers.
 */
function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

/**
 * Resets the state of the quiz by clearing the answer buttons and hiding the next button.
 */
function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

/**
 * Handles the selection of an answer by the player.
 */
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    if (correct) {
        score++;
    }
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) { 
      nextButton.classList.remove('hide');
    } else {
        displayResults();
    }
}

/**
 * Displays the final results of the quiz, showing the player's score and an option to restart the game.
 */
function displayResults() {
    questionContainerElement.classList.add('hide');
    resultsContainer.classList.remove('hide');
    

    const percentageScore = (score / questions.length) * 100;
    

    resultsElement.innerText = `You scored ${score} out of ${questions.length} (${percentageScore.toFixed(2)}%)`;
    

    const existingRestartButton = document.querySelector('.restart-btn');
    if (existingRestartButton) {
        existingRestartButton.remove();
    }


    const restartButton = document.createElement('button');
    restartButton.innerText = 'Restart Game';
    restartButton.classList.add('restart-btn', 'btn');
    restartButton.addEventListener('click', () => {
        resultsContainer.classList.add('hide');
        startGame();
    });

    resultsContainer.appendChild(restartButton);
}

/**
 * Sets the CSS class on the given element based on whether the answer was correct or not.
 */
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

/**
 * Clears the status class from the given element.
 */
function clearStatusClass (element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}