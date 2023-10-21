const question = [
    {
        question: "Is Israel a terrorist ?",
        answers: [
            {text: "Yes", correct: true},
            {text: "Of course", correct: true},
            {text: "Sure", correct: true},
            {text: "True", correct: true},
        ]
    },
    {

        question: "هل اسرائيل ارهابية بس السؤال بالعربي ؟",
        answers: [
            {text: "اكيد", correct: true},
            {text: "دا كدا كدا", correct: true},
            {text: "حصل", correct: true},
            {text: "ايوا يبوعمو", correct: true},
        ]

    },
    
    {
        question:` أَنَّهُ مَن قَتَلَ نَفْسًا بِغَيْرِ نَفْسٍ 
         أَوْ فَسَادٍ فِي الْأَرْضِ
         <br> 
         ....فَكَأَنَّمَا` ,
        answers: [
            {text: "قتل الناس جميعًا", correct: true},
            {text: "أزهق الناس جميعًا", correct: false},
            {text: "حارب الناس جميعًا", correct: false},
            {text: "سفك الدماء جميعًا", correct: false},
        ]
    },


    {
        question: "قَالَ رَبِّ اشْرَحْ لِي ………. وَيَسِّرْ لِي أَمْرِي",
        answers: [
            {text: "قلبي", correct: false},
            {text: "صدري", correct: true},
            {text: "فؤادي", correct: false},
            {text: "نفسي", correct: false},
        ]
    },

    
];

const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("answer-Buttons")
const nextButton = document.getElementById("nextBtn")


let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    currentQuestionIndex = 0;
    score = 0
    nextButton.innerHTML = "Next"
    showQuestion();
} 


function showQuestion(){
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer)
    });

}

function resetState(){
    nextButton.style.display = "none"
    while(answerButtons.firstChild){ 
        answerButtons.removeChild(answerButtons.firstChild); 
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else {
        selectedBtn.classList.add("incorrect");
        
        }

        Array.from(answerButtons.children).forEach(button => {
            if(button.dataset.correct === "true"){
                button.classList.add("correct")
            }
            button.disabled = "true";
        })
        nextButton.style.display = "block"
}



function showScore(){
    resetState();
    questionElement.innerHTML = `Your score ${score} out of ${question.length}!`
    nextButton.innerHTML = `<h3>play Again</h3>`
    nextButton.style.display = "block"
}

function handleNextButton(){
    currentQuestionIndex ++
    if(currentQuestionIndex < question.length){
        showQuestion()
    }else{
        showScore()
    }
}



nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex  < question.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})




startQuiz();

