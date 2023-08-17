const startBtn = document.querySelector(".start-btn button");
const infoBox = document.querySelector(".info-box");
const exitBtn = infoBox.querySelector(".quit-quiz");
const continueBtn = infoBox.querySelector(".restart");
const quizBox = document.querySelector(".quiz-box");
const nextBtn = document.querySelector(".next-btn");
const resultBox = document.querySelector(".result-box");
const scoreValue = document.querySelector(".score");
const timeCount = quizBox.querySelector(".timer-sec");
const timeLine = quizBox.querySelector(".time-line");
let optionList = document.querySelector(".option-list");
let tickIcon = '<div class="icon tick"><i class="fa-solid fa-square-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fa-solid fa-square-xmark"></i></div>';

let score = 0;

let counter;
let timeValue = 150;


startBtn.onclick = () => infoBox.classList.add("visible");

exitBtn.onclick = () => infoBox.classList.remove("visible");

continueBtn.onclick = () => {
    infoBox.classList.remove("visible");
    quizBox.classList.add("visible");
    showQuestions(questionCount);
    startTimer(timeValue);
};

function startTimer(time) {
    counter = setInterval(timer, 100);

    function timer() {
        timeCount.textContent = Math.floor(time / 10);

        let percentageRemaining = (time / timeValue) * 100;
        timeLine.style.width = percentageRemaining + "%";

        time--;

        if (time < 99) {
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }

        if (time < 0) {
            clearInterval(counter);
            timeCount.textContent = "00";
        }
    }
}

let questionCount = 0;

showQuestions = (i) => {
    let questionText = document.querySelector(".question-text");
    let questionTag = `${questions[i].num}. ${questions[i].question}`;
    let optionTags = '';
    let currentQ = document.querySelector(".current-q");
    let totalQ = document.querySelector(".total-q");
    currentQ.innerHTML = questions[i].num;
    totalQ.innerHTML = questions.length;
    timeLine.style.width = 100 + "%";

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
    clearInterval(counter);
    let userAnswer = ans.textContent;
    let correctAnswer = questions[questionCount].answer;
    let allOptions = optionList.children.length;
    if (userAnswer == correctAnswer) {
        ans.classList.add("correct");
        console.log('right');
        ans.insertAdjacentHTML("beforeend", tickIcon);
        score++;
    }
    else {
        ans.classList.add("incorrect");
        console.log('wrong');
        ans.insertAdjacentHTML("beforeend", crossIcon);
        for (let i = 0; i < allOptions; i++) {
            if (optionList.children[i].textContent == correctAnswer) {
                optionList.children[i].setAttribute("class", "correct option");
                optionList.children[i].insertAdjacentHTML("beforeend", tickIcon);
            }

        }
    }

    for (let i = 0; i < allOptions; i++) {
        optionList.children[i].classList.add("disabled")

    }

}

nextBtn.onclick = () => {
    let allTotal = document.querySelector(".all-total");
    if (questionCount < questions.length - 2) {
        questionCount++;
        showQuestions(questionCount);
        clearInterval(counter);
        startTimer(timeValue);
    }
    else if (questionCount < questions.length - 1) {
        questionCount++;
        showQuestions(questionCount);
        nextBtn.innerHTML = `Submit Exam<i class="fa-solid fa-check"></i>`;
        clearInterval(counter);
        startTimer(timeValue);
    }
    else {
        allTotal.innerHTML = questions.length;
        scoreValue.innerHTML = score;
        quizBox.classList.remove("visible");
        resultBox.classList.add("visible");
    };
}