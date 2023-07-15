const quizQuestions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Text Markup Language", "Hyper Text Making Links"],
        correctAnswer: "Hyper Text Markup Language"
    },
    {
        question: "What is CSS used for in web development?",
        options: ["Creating dynamic web pages", "Handling server-side operations", "Styling and formatting web pages", "Managing databases"],
        correctAnswer: "Styling and formatting web pages"
    },
    {
        question: "What is the purpose of JavaScript in web development?",
        options: ["Styling web pages", "Creating responsive layouts", "Adding interactivity and dynamic functionality", "Managing server-side operations"],
        correctAnswer: "Adding interactivity and dynamic functionality"
    },
    {
        question: "What does CSS stand for?",
        options: ["Creative Styling Sheets", "Cascading Style Sheets", "Coded Style Sheets", "Custom Styling Syntax"],
        correctAnswer: "Cascading Style Sheets"
    },
    {
        question: "What is the standard markup language for creating web pages?",
        options: ["HTML", "CSS", "JavaScript", "PHP"],
        correctAnswer: "HTML"
    },
    {
        question: "What is the purpose of a media query in responsive web design?",
        options: ["To play media files on a web page", "To target specific devices or screen sizes", "To add visual effects and animations", "To optimize database queries"],
        correctAnswer: "To target specific devices or screen sizes"
    },
    {
        question: "Which programming language is commonly used for server-side web development?",
        options: ["Python", "JavaScript", "Ruby", "PHP"],
        correctAnswer: "PHP"
    },
    {
        question: "What is the purpose of the <canvas> element in HTML5?",
        options: ["To display images", "To play audio and video files", "To create animations", "To draw graphics dynamically"],
        correctAnswer: "To draw graphics dynamically"
    },
    {
        question: "What does API stand for in web development?",
        options: ["Application Programming Interface", "Advanced Programming Interface", "Automated Programming Interface", "Application Process Integration"],
        correctAnswer: "Application Programming Interface"
    },
    {
        question: "What is the purpose of the <form> element in HTML?",
        options: ["To define a section of a webpage", "To add styling and layout to a webpage", "To display images and multimedia", "To create an interactive input interface"],
        correctAnswer: "To create an interactive input interface"
    },
    {
        question: "Which technology is used to style web pages and define their appearance?",
        options: ["CSS", "HTML", "JavaScript", "XML"],
        correctAnswer: "CSS"
    },
    {
        question: "What is the purpose of a database in web development?",
        options: ["To store and manage data", "To enhance website security", "To create dynamic web pages", "To generate responsive layouts"],
        correctAnswer: "To store and manage data"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit-btn");
const feedbackElement = document.getElementById("feedback");
const leaderboardElement = document.getElementById("leaderboard");
const resultElement = document.getElementById("result");
const leaderboardContainer = document.getElementById("leaderboard-container");

const displayQuestion = () => {
    const { question, options } = quizQuestions[currentQuestion];
    questionElement.textContent = `Question ${currentQuestion + 1}: ${question}`;
    optionsElement.innerHTML = "";

    // Create a default option
    const defaultOption = document.createElement("option");
    defaultOption.textContent = "--Please choose an option--";
    optionsElement.appendChild(defaultOption);

    options.forEach(option => {
        const optionElement = document.createElement("option");
        optionElement.textContent = option;
        optionsElement.appendChild(optionElement);
    });
};

const handleOptionSubmit = () => {
    const selectedOption = optionsElement.value;
    const { correctAnswer } = quizQuestions[currentQuestion];

    if (selectedOption === "--Please choose an option--") {
        return; // Exit the function if no option is selected
    }

    const isCorrect = selectedOption === correctAnswer;
    isCorrect ? score++ : null;

    feedbackElement.textContent = isCorrect ? "Status: Correct!" : "Status: Wrong answer!";
    feedbackElement.classList.add(isCorrect ? "correct" : "incorrect");
    feedbackElement.classList.remove(isCorrect ? "incorrect" : "correct");

    if (!isCorrect) {
        feedbackElement.style.background = "red"; // Set background color to red for wrong answer
    } else {
        feedbackElement.style.background = "green";
    }

    currentQuestion++;

    if (currentQuestion < quizQuestions.length) {
        displayQuestion();
    } else {
        submitButton.style.display = "none";
        leaderboardContainer.style.display = "flex";
        showLeaderboard();
    }
};

const showLeaderboard = () => {
    leaderboardElement.innerHTML = `
            <th>Total Right Question</th>
            <th>Total Wrong Question</th> 
            <tr>
            <td>${score}</td>
            <td>${quizQuestions.length - score}</td>
        </tr>
    `;
    resultElement.textContent = getResultMessage();
};

const getResultMessage = () => {
    const percentage = (score / quizQuestions.length) * 100;

    if (percentage === 100) {
        return "Congratulations! You got a perfect score!";
    } else if (percentage >= 80) {
        return "Great job! You did really well!";
    } else if (percentage >= 60) {
        return "Good effort! You passed the quiz.";
    } else {
        return "Keep practicing! You can improve.";
    }
};

submitButton.addEventListener("click", handleOptionSubmit);

displayQuestion();