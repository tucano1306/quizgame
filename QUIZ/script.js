const questions = [
    
    {
        category: "Ciencia",
        question: "¿Cuál es el planeta más grande del sistema solar?",
        options: ["Marte", "Júpiter", "Saturno", "Urano"],
        correct: 1
    },
    {
        category: "Ciencia",
        question: "¿Cuál es el elemento químico más abundante en el universo?",
        options: ["Oxígeno", "Carbono", "Helio", "Hidrógeno"],
        correct: 3
    },
    {
        category: "Ciencia",
        question: "¿Cuál es el órgano más grande del cuerpo humano?",
        options: ["Corazón", "Hígado", "Piel", "Pulmones"],
        correct: 2
    },
    {
        category: "Ciencia",
        question: "¿Qué vitamina es producida por el cuerpo cuando se expone al sol?",
        options: ["Vitamina A", "Vitamina C", "Vitamina D", "Vitamina E"],
        correct: 2
    },
    {
        category: "Ciencia",
        question: "¿Cuál es la velocidad de la luz?",
        options: ["299,792 km/s", "199,792 km/s", "399,792 km/s", "499,792 km/s"],
        correct: 0
    },
    // Historia
    {
        category: "Historia",
        question: "¿En qué año comenzó la Primera Guerra Mundial?",
        options: ["1914", "1916", "1918", "1920"],
        correct: 0
    },
    {
        category: "Historia",
        question: "¿Quién fue el primer presidente de Estados Unidos?",
        options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
        correct: 2
    },
    {
        category: "Historia",
        question: "¿En qué año cayó el Muro de Berlín?",
        options: ["1987", "1988", "1989", "1990"],
        correct: 2
    },
    {
        category: "Historia",
        question: "¿Cuál fue la primera civilización de la historia?",
        options: ["Egipcia", "Sumeria", "China", "India"],
        correct: 1
    },
    {
        category: "Historia",
        question: "¿En qué año llegó Cristóbal Colón a América?",
        options: ["1490", "1491", "1492", "1493"],
        correct: 2
    },
    
    {
        category: "Arte",
        question: "¿Quién pintó La Noche Estrellada?",
        options: ["Pablo Picasso", "Claude Monet", "Vincent van Gogh", "Leonardo da Vinci"],
        correct: 2
    },
    {
        category: "Arte",
        question: "¿Quién pintó la Mona Lisa?",
        options: ["Miguel Ángel", "Leonardo da Vinci", "Rafael", "Donatello"],
        correct: 1
    },
    {
        category: "Arte",
        question: "¿En qué ciudad se encuentra el Louvre?",
        options: ["Londres", "Roma", "Madrid", "París"],
        correct: 3
    },
    {
        category: "Arte",
        question: "¿Quién pintó 'El Grito'?",
        options: ["Edvard Munch", "Gustav Klimt", "Salvador Dalí", "Pablo Picasso"],
        correct: 0
    },
    {
        category: "Arte",
        question: "¿Qué artista es conocido por cortar su propia oreja?",
        options: ["Pablo Picasso", "Claude Monet", "Vincent van Gogh", "Salvador Dalí"],
        correct: 2
    },
    
    {
        category: "Geografía",
        question: "¿Cuál es el río más largo del mundo?",
        options: ["Nilo", "Amazonas", "Yangtsé", "Misisipi"],
        correct: 1
    },
    {
        category: "Geografía",
        question: "¿Cuál es el país más grande del mundo?",
        options: ["China", "Estados Unidos", "Canadá", "Rusia"],
        correct: 3
    },
    {
        category: "Geografía",
        question: "¿En qué continente se encuentra Egipto?",
        options: ["África", "Asia", "Europa", "Medio Oriente"],
        correct: 0
    },
    {
        category: "Geografía",
        question: "¿Cuál es la capital de Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        correct: 2
    },
    {
        category: "Geografía",
        question: "¿Cuál es el océano más grande?",
        options: ["Atlántico", "Índico", "Ártico", "Pacífico"],
        correct: 3
    },
    
    {
        category: "Deportes",
        question: "¿En qué deporte se usa un implemento llamado 'raqueta'?",
        options: ["Fútbol", "Tenis", "Baloncesto", "Voleibol"],
        correct: 1
    },
    {
        category: "Deportes",
        question: "¿Cuántos jugadores tiene un equipo de fútbol en el campo?",
        options: ["9", "10", "11", "12"],
        correct: 2
    },
    {
        category: "Deportes",
        question: "¿Cada cuántos años se celebran los Juegos Olímpicos?",
        options: ["2 años", "3 años", "4 años", "5 años"],
        correct: 2
    },
    {
        category: "Deportes",
        question: "¿En qué país se inventó el voleibol?",
        options: ["Estados Unidos", "Brasil", "Italia", "Rusia"],
        correct: 0
    },
    {
        category: "Deportes",
        question: "¿Cuántos puntos vale un touchdown en fútbol americano?",
        options: ["4", "5", "6", "7"],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;
let questionAnswered = false;


const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next-btn');
const currentQuestionSpan = document.getElementById('current-question');
const scoreSpan = document.getElementById('score');
const quizContent = document.getElementById('quiz-content');
const resultContainer = document.getElementById('result-container');
const finalScoreSpan = document.getElementById('final-score');
const categoryElement = document.getElementById('current-category');
const restartButton = document.getElementById('restart-btn');

function showQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    categoryElement.textContent = `Categoría: ${question.category}`;
    optionsElement.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option';
        button.textContent = option;
        button.addEventListener('click', () => selectOption(index));
        optionsElement.appendChild(button);
    });

    nextButton.disabled = true;
    questionAnswered = false;
    currentQuestionSpan.textContent = currentQuestion + 1;
}

function selectOption(selectedIndex) {
    if (questionAnswered) return;

    questionAnswered = true;
    const correct = questions[currentQuestion].correct;
    const options = optionsElement.children;

    for (let i = 0; i < options.length; i++) {
        options[i].classList.remove('correct', 'incorrect');
        if (i === correct) {
            options[i].classList.add('correct');
        }
    }

    if (selectedIndex === correct) {
        score++;
        scoreSpan.textContent = score;
    } else {
        options[selectedIndex].classList.add('incorrect');
    }

    nextButton.disabled = false;
}



function showResults() {
    quizContent.style.display = 'none';
    resultContainer.style.display = 'block';
    
    const correctAnswers = score;
    const wrongAnswers = questions.length - score;
    
    document.getElementById('final-score').textContent = score;
    document.getElementById('correct-answers').textContent = correctAnswers;
    document.getElementById('wrong-answers').textContent = wrongAnswers;

    const resultMessage = document.getElementById('result-message');
    
    
    if (correctAnswers > questions.length / 2) {
        resultMessage.innerHTML = `
            <div class="trophy animated-trophy">🏆</div>
            <div class="winner-message">¡Felicitaciones, Ganador!</div>
        `;
    } else {
        resultMessage.innerHTML = `
            <div class="loser-message">¡Perdedor!</div>
        `;
    }
}


nextButton.addEventListener('click', () => {
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
});


restartButton.addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;
    scoreSpan.textContent = score;
    quizContent.style.display = 'block';
    resultContainer.style.display = 'none';
    document.getElementById('result-message').innerHTML = '';
    showQuestion();
});


showQuestion();
