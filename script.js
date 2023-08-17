const startBtn = document.querySelector(".start-btn button");
const infoBox = document.querySelector(".info-box");
const exitBtn = infoBox.querySelector(".quit-quiz");
const continueBtn = infoBox.querySelector(".restart");
const quizBox = document.querySelector(".quiz-box");
const nextBtn = document.querySelector(".next-btn");
const resultBox = document.querySelector(".result-box");
let optionList = document.querySelector(".option-list");



startBtn.onclick = () => infoBox.classList.add("visible");

exitBtn.onclick = () => infoBox.classList.remove("visible");

continueBtn.onclick = () => {
    infoBox.classList.remove("visible");
    quizBox.classList.add("visible");
    showQuestions(questionCount);
};

let questionCount = 0;

showQuestions = (i) => {
    let questionText = document.querySelector(".question-text");
    let questionTag = `${questions[i].num}. ${questions[i].question}`;
    let optionTags = '';
    let currentQ = document.querySelector(".current-q");
    let totalQ = document.querySelector(".total-q");
    currentQ.innerHTML = questions[i].num;
    totalQ.innerHTML = questions.length;

    for (let optionIndex = 0; optionIndex < questions[i].options.length; optionIndex++) {
        let optionWrap = document.createElement("div");
        optionWrap.classList.add("option");
        optionWrap.textContent = questions[i].options[optionIndex];
        optionTags += optionWrap.outerHTML;
    }

    questionText.textContent = questionTag;
    optionList.innerHTML = optionTags;

    const option = optionList.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", 'optionSelected(this)');

    }
};

optionSelected = (ans) => {
    let userAnswer = ans.textContent;
    let correctAnswer = questions[questionCount].answer;
    let allOptions = optionList.children.length;
    if (userAnswer == correctAnswer) {
        ans.classList.add("correct");
        console.log('right');
    }
    else {
        ans.classList.add("incorrect");
        console.log('wrong');

        for (let i = 0; i < allOptions; i++) {
            if (optionList.children[i].textContent == correctAnswer) {
                optionList.children[i].setAttribute("class", "correct option");
            }

        }
    }

    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add("disabled")

    }

}



nextBtn.onclick = () => {
    if (questionCount < questions.length - 2) {
        questionCount++;
        showQuestions(questionCount);
    }
    else if (questionCount < questions.length - 1) {
        questionCount++;
        showQuestions(questionCount);
        nextBtn.innerHTML = `Submit Exam<i class="fa-solid fa-check"></i>`
    }
    else {
        quizBox.classList.remove("visible");
        resultBox.classList.add("visible");
    };
}
