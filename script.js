const questions = [
    {
        question: "Who is known as the father of the computer?",
        answers: [
            {text: "Bill Gates", correct: false},
            {text: "Alan Turing", correct: false},
            {text: "Charles Babbage", correct: true},
            {text: "Steve Jobs", correct: false},
        ]
    },
    {
        question: "Which company developed the Android operating system?",
        answers: [
            {text: "Apple", correct: false},
            {text: "Microsoft", correct: false},
            {text: "Google", correct: true},
            {text: "Samsung", correct: false},
        ]
    },
    {
        question: "Which programming language is primarily used for web development?",
        answers: [
            {text: "Python", correct: false},
            {text: "JavaScript", correct: true},
            {text: "C++", correct: false},
            {text: "Java", correct: false},
        ]
    },
    {
        question: "Which company created the Windows operating system?",
        answers: [
            {text: "Apple", correct: false},
            {text: "Microsoft", correct: true},
            {text: "IBM", correct: false},
            {text: "Google", correct: false},
        ]
    },
    {
        question: "Who invented the lightbulb?",
        answers: [
            {text: "Isaac Newton", correct: false},
            {text: "Thomas Edison", correct: true},
            {text: "Nikola Tesla", correct: false},
            {text: "Albert Einstein", correct: false},
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            {text: "Earth", correct: false},
            {text: "Mars", correct: true},
            {text: "Jupiter", correct: false},
            {text: "Venus", correct: false},
        ]
    },
    {
        question: "What is the capital city of Japan?",
        answers: [
            {text: "Kyoto", correct: false},
            {text: "Osaka", correct: false},
            {text: "Tokyo", correct: true},
            {text: "Hiroshima", correct: false},
        ]
    },
    {
        question:"Which is the largest desert in the world?",
        answers: [
            {text:"kalahari", correct:false},
            {text:"Gobi", correct:false},
            {text:"Sahara", correct:false},
            {text:"Antartica", correct:true},

        ]

    },
    {
        question:"Which is the smallest continent in the world?",
        answers: [
            {text:"Asia", correct:false},
            {text:"Australia", correct:true},
            {text:"Arctic", correct:false},
            {text:"Africa", correct:false},

        ]
    },
    {
        question:"Which is the smallest conuntry in the world?",
        answers: [
            {text:"Vatican City", correct:true},
            {text:"Bhutan", correct:false},
            {text:"Nepal", correct:false},
            {text:"Shri Lanka   ", correct:false},

        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score =0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(){
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
    
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display ="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
handleNextButton();
    }
    else{
        startQuiz();
    }
});
startQuiz();
