const startBtn = document.querySelector(".start-btn button");
const infoBox = document.querySelector(".info-box");
const exitBtn = infoBox.querySelector(".quit-quiz");
const continueBtn = infoBox.querySelector(".restart");
const quizBox = document.querySelector(".quiz-box");
const nextBtn = document.querySelector(".next-btn");



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
    let questionTag = `<span>${questions[i].question}</span>`;
    let optionTags = '';

    for (let optionIndex = 0; optionIndex < questions[i].options.length; optionIndex++) {
        optionTags += `<div class="option">${questions[i].options[optionIndex]}</div>`;
    }

    questionText.innerHTML = questionTag;
    optionList.innerHTML = optionTags;

    // Render options' content as plain text
    optionList.querySelectorAll('.option').forEach(option => {
        option.textContent = option.textContent;
    });
};




nextBtn.onclick = () => {
    questionCount++;
    showQuestions(questionCount);
}