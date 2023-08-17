const startBtn = document.querySelector(".start-btn button");
const infoBox = document.querySelector(".info-box");
const exitBtn = infoBox.querySelector(".quit-quiz");
const continueBtn = infoBox.querySelector(".restart");
const quizBox = document.querySelector(".quiz-box");
const nextBtn = document.querySelector(".next-btn");
const resultBox = document.querySelector(".result-box");



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
    let optionList = document.querySelector(".option-list");
    let questionTag = `${questions[i].question}`;
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
};



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
