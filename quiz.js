// ===========================
// QUIZ DATA
// ===========================
const quizData = [
    {
        question: "도로 균열 중 '선형 균열'의 주요 특징은 무엇인가요?",
        options: [
            "여러 방향으로 퍼져나가는 균열",
            "일직선 또는 약간 구부러진 형태의 균열",
            "작은 구멍 형태의 균열",
            "블록 모양으로 나뉘어진 균열"
        ],
        correct: 1,
        explanation: "선형 균열은 일직선 또는 약간 구부러진 형태로 나타나며, 주로 시공 이음부나 하부 구조물의 불균등 침하로 발생합니다."
    },
    {
        question: "포트홀(Pothole)이 발생하는 주요 원인은 무엇인가요?",
        options: [
            "과도한 교통량만으로 발생",
            "수분 침투와 동결-융해 반복",
            "아스팔트의 자연 노화",
            "햇빛에 의한 열화"
        ],
        correct: 1,
        explanation: "포트홀은 균열 부위로 수분이 침투하고 동결-융해가 반복되면서 아스팔트가 떨어져 나가 발생합니다."
    },
    {
        question: "도로 균열의 심각도를 평가할 때 고려해야 할 주요 요소가 아닌 것은?",
        options: [
            "균열의 폭",
            "균열의 길이",
            "도로의 색상",
            "균열의 깊이"
        ],
        correct: 2,
        explanation: "균열의 심각도는 폭, 길이, 깊이, 위치 등으로 평가하며, 도로의 색상은 심각도 평가 요소가 아닙니다."
    },
    {
        question: "망상형 균열(Alligator Cracking)이 주로 발생하는 위치는?",
        options: [
            "도로 가장자리",
            "교통량이 많은 차선",
            "도로 중앙선",
            "인도와의 경계부"
        ],
        correct: 1,
        explanation: "망상형 균열은 반복적인 교통하중으로 인해 주로 교통량이 많은 차선에서 발생하며, 악어 등처럼 보여 'Alligator Cracking'이라 불립니다."
    },
    {
        question: "도로 균열 보수 시 가장 먼저 해야 할 작업은?",
        options: [
            "즉시 아스팔트 채우기",
            "균열 부위 청소 및 이물질 제거",
            "표면 도색",
            "교통 차단"
        ],
        correct: 1,
        explanation: "효과적인 보수를 위해서는 먼저 균열 부위의 먼지, 이물질, 느슨한 재료를 제거하여 보수 재료가 잘 접착될 수 있도록 해야 합니다."
    }
];

// ===========================
// QUIZ STATE
// ===========================
let currentQuestionIndex = 0;
let userAnswers = new Array(quizData.length).fill(null);
let quizCompleted = false;

// ===========================
// DOM ELEMENTS
// ===========================
const quizContent = document.getElementById('quizContent');
const progressFill = document.getElementById('progressFill');
const currentQuestionSpan = document.getElementById('currentQuestion');
const totalQuestionsSpan = document.getElementById('totalQuestions');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const submitBtn = document.getElementById('submitBtn');
const quizResult = document.getElementById('quizResult');
const resultIcon = document.getElementById('resultIcon');
const resultTitle = document.getElementById('resultTitle');
const scoreNumber = document.getElementById('scoreNumber');
const resultMessage = document.getElementById('resultMessage');
const retryBtn = document.getElementById('retryBtn');

// ===========================
// INITIALIZE QUIZ
// ===========================
function initQuiz() {
    totalQuestionsSpan.textContent = quizData.length;
    renderQuestion();
    updateProgress();
}

// ===========================
// RENDER QUESTION
// ===========================
function renderQuestion() {
    const question = quizData[currentQuestionIndex];
    const selectedAnswer = userAnswers[currentQuestionIndex];

    quizContent.innerHTML = `
        <div class="question-card">
            <div class="question-number">질문 ${currentQuestionIndex + 1}</div>
            <h3 class="question-text">${question.question}</h3>
            <div class="options-container">
                ${question.options.map((option, index) => `
                    <div class="option ${selectedAnswer === index ? 'selected' : ''}" data-index="${index}">
                        <div class="option-radio">
                            <div class="radio-inner"></div>
                        </div>
                        <span class="option-text">${option}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    // Add click handlers to options
    const options = quizContent.querySelectorAll('.option');
    options.forEach(option => {
        option.addEventListener('click', () => selectOption(option));
    });

    // Update navigation buttons
    updateNavigationButtons();
}

// ===========================
// SELECT OPTION
// ===========================
function selectOption(selectedOption) {
    if (quizCompleted) return;

    const options = quizContent.querySelectorAll('.option');
    options.forEach(opt => opt.classList.remove('selected'));

    selectedOption.classList.add('selected');
    const answerIndex = parseInt(selectedOption.dataset.index);
    userAnswers[currentQuestionIndex] = answerIndex;

    updateNavigationButtons();
}

// ===========================
// UPDATE NAVIGATION BUTTONS
// ===========================
function updateNavigationButtons() {
    // Previous button
    prevBtn.disabled = currentQuestionIndex === 0;

    // Next/Submit button
    const hasAnswer = userAnswers[currentQuestionIndex] !== null;

    if (currentQuestionIndex === quizData.length - 1) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = hasAnswer ? 'flex' : 'none';
    } else {
        nextBtn.style.display = hasAnswer ? 'flex' : 'none';
        submitBtn.style.display = 'none';
    }
}

// ===========================
// UPDATE PROGRESS
// ===========================
function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / quizData.length) * 100;
    progressFill.style.width = `${progress}%`;
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
}

// ===========================
// NAVIGATE TO NEXT QUESTION
// ===========================
function nextQuestion() {
    if (currentQuestionIndex < quizData.length - 1) {
        currentQuestionIndex++;
        renderQuestion();
        updateProgress();

        // Scroll to quiz section
        document.getElementById('quiz').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ===========================
// NAVIGATE TO PREVIOUS QUESTION
// ===========================
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderQuestion();
        updateProgress();

        // Scroll to quiz section
        document.getElementById('quiz').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ===========================
// SUBMIT QUIZ
// ===========================
function submitQuiz() {
    quizCompleted = true;

    // Calculate score
    let score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === quizData[index].correct) {
            score++;
        }
    });

    // Hide quiz content and navigation
    quizContent.style.display = 'none';
    document.querySelector('.quiz-navigation').style.display = 'none';
    document.querySelector('.quiz-progress').style.display = 'none';

    // Show result
    displayResult(score);
}

// ===========================
// DISPLAY RESULT
// ===========================
function displayResult(score) {
    const percentage = (score / quizData.length) * 100;

    // Determine result level
    let icon, title, message, color;

    if (percentage === 100) {
        icon = '🏆';
        title = '완벽합니다!';
        message = '도로 균열 보수의 전문가시네요! 모든 문제를 정확히 맞추셨습니다.';
        color = '#4FACFE';
    } else if (percentage >= 80) {
        icon = '🎉';
        title = '훌륭해요!';
        message = '도로 균열에 대해 잘 이해하고 계시네요. 조금만 더 공부하면 완벽합니다!';
        color = '#667EEA';
    } else if (percentage >= 60) {
        icon = '👍';
        title = '좋아요!';
        message = '기본적인 내용은 잘 알고 계시네요. 조금 더 학습하면 더 좋은 결과를 얻을 수 있어요.';
        color = '#F093FB';
    } else {
        icon = '📚';
        title = '다시 도전해보세요!';
        message = '아직 배울 것이 많아요. 학습 자료를 다시 확인하고 퀴즈에 재도전해보세요!';
        color = '#F5576C';
    }

    resultIcon.textContent = icon;
    resultTitle.textContent = title;
    scoreNumber.textContent = score;
    resultMessage.textContent = message;

    // Apply color
    resultIcon.style.background = `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)`;

    // Show result with animation
    quizResult.style.display = 'flex';
    setTimeout(() => {
        quizResult.classList.add('show');
    }, 100);

    // Show detailed answers
    showDetailedAnswers(score);
}

// ===========================
// SHOW DETAILED ANSWERS
// ===========================
function showDetailedAnswers(score) {
    const answersContainer = document.createElement('div');
    answersContainer.className = 'detailed-answers';

    let answersHTML = '<h3 class="answers-title">정답 확인</h3>';

    quizData.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correct;

        answersHTML += `
            <div class="answer-item ${isCorrect ? 'correct' : 'incorrect'}">
                <div class="answer-header">
                    <span class="answer-number">질문 ${index + 1}</span>
                    <span class="answer-status">${isCorrect ? '✓ 정답' : '✗ 오답'}</span>
                </div>
                <p class="answer-question">${question.question}</p>
                <p class="answer-your">
                    <strong>당신의 답:</strong> ${question.options[userAnswer]}
                </p>
                ${!isCorrect ? `
                    <p class="answer-correct">
                        <strong>정답:</strong> ${question.options[question.correct]}
                    </p>
                ` : ''}
                <p class="answer-explanation">
                    <strong>해설:</strong> ${question.explanation}
                </p>
            </div>
        `;
    });

    answersContainer.innerHTML = answersHTML;
    quizResult.appendChild(answersContainer);
}

// ===========================
// RETRY QUIZ
// ===========================
function retryQuiz() {
    // Reset state
    currentQuestionIndex = 0;
    userAnswers = new Array(quizData.length).fill(null);
    quizCompleted = false;

    // Remove detailed answers if exists
    const detailedAnswers = document.querySelector('.detailed-answers');
    if (detailedAnswers) {
        detailedAnswers.remove();
    }

    // Hide result
    quizResult.classList.remove('show');
    setTimeout(() => {
        quizResult.style.display = 'none';
    }, 300);

    // Show quiz content and navigation
    quizContent.style.display = 'block';
    document.querySelector('.quiz-navigation').style.display = 'flex';
    document.querySelector('.quiz-progress').style.display = 'flex';

    // Render first question
    renderQuestion();
    updateProgress();

    // Scroll to quiz section
    document.getElementById('quiz').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ===========================
// EVENT LISTENERS
// ===========================
prevBtn.addEventListener('click', previousQuestion);
nextBtn.addEventListener('click', nextQuestion);
submitBtn.addEventListener('click', submitQuiz);
retryBtn.addEventListener('click', retryQuiz);

// ===========================
// INITIALIZE ON LOAD
// ===========================
document.addEventListener('DOMContentLoaded', initQuiz);
