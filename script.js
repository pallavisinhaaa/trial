const questions = {
    javascript: [
        { question: "Which company developed JavaScript?", options: ["A) Microsoft", "B) Netscape", "C) Google", "D) Apple"], answer: 1 },
        { question: "Which symbol is used for comments in JavaScript?", options: ["A) //", "B) #", "C) <!-- -->", "D) @"], answer: 0 },
        { question: "Which method is used to write HTML output in JavaScript?", options: ["A) document.write()", "B) console.log()", "C) alert()", "D) window.write()"], answer: 0 },
        { question: "What is the correct syntax for referring to an external script called app.js?", options: ["A) <script src=app.js></script>", "B) <script href=app.js></script>", "C) <script ref=app.js></script>", "D) <script name=app.js></script>"], answer: 0 },
        { question: "How do you create a function in JavaScript?", options: ["A) function myFunction() {}", "B) def myFunction() {}", "C) function:myFunction() {}", "D) create myFunction() {}"], answer: 0 },
        { question: "How do you call a function named myFunction?", options: ["A) call myFunction();", "B) myFunction();", "C) call function myFunction();", "D) myFunction;"], answer: 1 },
        { question: "How to write an if statement in JavaScript?", options: ["A) if (x === 5)", "B) if x == 5", "C) if x = 5 then", "D) if (x = 5)"], answer: 0 },
        { question: "What is the correct way to write a JavaScript array?", options: ["A) var colors = 'red', 'green', 'blue'", "B) var colors = ['red', 'green','blue']", "C) var colors = (1:'red', 2:'green', 3:'blue')", "D) var colors = (1:'red', 2:'green', 3:'blue')"], answer: 1 },
        { question: "How do you find the number with the highest value of x and y in JavaScript?", options: ["A) Math.ceil(x, y)", "B) Math.max(x, y)", "C) Math.top(x, y)", "D) Math.high(x, y)"], answer: 1 },
        { question: "Which event occurs when the user clicks on an HTML element?", options: ["A) onchange", "B) onclick", "C) onmouseclick", "D) onmouseover"], answer: 1 },
    ],
    python: [
        { question: "What is Python?", options: ["A snake", "A programming language", "A movie", "A car"], answer: 1 },
        { question: "Who created Python?", options: ["Guido van Rossum", "Mark Zuckerberg", "Bill Gates", "Elon Musk"], answer: 0 },
        { question: "What does the print() function do in Python?", options: ["a) Reads input from the user", "b) Prints text to the console", "c) Saves data to a file", "d) Executes a script"], answer: 1 },
        { question: "Which of the following is a correct way to define a function in Python?", options: ["a) def functionName():", "b) function functionName():", "c) create functionName():", "d) define functionName():"], answer: 0 },
        { question: "How do you start a comment in Python?", options: ["a) /*", "b) <!--", "c) #", "d) --"], answer: 2 },
        { question: "What is the correct syntax to import a module named math in Python?", options: ["a) import math", "b) import(math)", "c) include math", "d) require math"], answer: 0 },
        { question: "How do you create a dictionary in Python?", options: ["a) dict = {key: value}", "b) dict = [key: value]", "c) dict = (key: value)", "d) dict = <key: value>"], answer: 0 },
        { question: "Which of the following is used to handle exceptions in Python?", options: ["a) try and except", "b) do and catch", "c) attempt and handle", "d) try and handle"], answer: 0 },
        { question: "How do you start a loop that iterates over a list in Python?", options: ["a) for i in list:", "b) foreach i in list:", "c) loop i in list", "d) iterate i in list:"], answer: 0 },
        { question: "What does the len() function do in Python?", options: ["a) Returns the length of a list, string, or other collection", "b) Converts a value to a string", "c) Calculates the power of a number", "d) Finds the maximum value in a list"], answer: 0 },
    ],
    java: [
        { question: "What is Java?", options: ["A coffee", "A type of dance", "A programming language", "A car"], answer: 2 },
        { question: "Which company developed Java?", options: ["Microsoft", "Apple", "Oracle", "Sun Microsystems"], answer: 3 },
        { question: "What is the correct way to declare a variable in Java?", options: ["a) int number;", "b) var number;", "c) declare number;", "d) num number;"], answer: 0 },
        { question: "Which method is the entry point for a Java program?", options: ["a) public void main(String[] args)", "b) public static void main(String[] args)", "c) public main(String[] args)", "d) public static main(String[] args)"], answer: 1 },
        { question: "How do you create a single-line comment in Java?", options: ["a) <!-- comment -->", "b) # comment", "c) // comment", "d) /* comment */"], answer: 2 },
        { question: "Which of the following is used to handle exceptions in Java?", options: ["a) try and except", "b) try and catch", "c) attempt and handle", "d) try and handle"], answer: 1 },
        { question: "What is the correct syntax to import a package in Java?", options: ["a) include packageName;", "b) import packageName;", "c) using packageName;", "d) require packageName;"], answer: 1 },
        { question: "How do you create an object in Java?", options: ["a) ClassName objectName = new ClassName();", "b) ClassName objectName = ClassName();", "c) objectName = new ClassName();", "d) ClassName objectName();"], answer: 0 },
        { question: "What keyword is used to inherit a class in Java?", options: ["a) inherits", "b) extends", "c) implements", "d) uses"], answer: 1 },
        { question: "Which keyword is used to define a constant in Java?", options: ["a) constant", "b) final", "c) static", "d) const"], answer: 1 },
    ],
    php: [
        { question: "What does PHP stand for?", options: ["a) Personal Home Page", "b) PHP: Hypertext Processor", "c) PHP: Hypertext Preprocessor", "d) Private Home Page"], answer: 2 },
        { question: "What is the function used to output text in PHP?", options: ["a) echo", "b) print", "c) display", "d) Both a and b"], answer: 3 },
        { question: "How do you create a variable in PHP?", options: ["a) var variableName", "b) $variableName", "c) variable variableName", "d) @variableName"], answer: 1 },
        { question: "How do you start and end a PHP block of code?", options: ["a) <?php and ?>", "b) <script> and </script>", "c) <!-- and -->", "d) <php> and </php>"], answer: 0 },
        { question: "Which function in PHP is used to get information about the PHP environment?", options: ["a) phpinfo()", "b) php_version()", "c) get_info()", "d) phpconfig()"], answer: 0 },
        { question: "How do you comment a single line in PHP?", options: ["a) <!-- comment -->", "b) // comment", "c) # comment", "d) Both b and c"], answer: 3 },
        { question: "How do you comment multiple lines in PHP?", options: ["a) <!-- comment -->", "b) // comment //", "c) /* comment */", "d) # comment #"], answer: 2 },
        { question: "What is the correct way to include the contents of an external PHP file named header.php?", options: ["a) include('header.php');", "b) require('header.php');", "c) import('header.php');", "d) Both a and b"], answer: 3 },
        { question: "What is the difference between == and === in PHP?", options: ["a) == checks for value equality, === checks for value and type equality", "b) == checks for type equality, === checks for value equality", "c) == assigns a value, === compares values", "d) There is no difference"], answer: 0 },
        { question: "How can you retrieve data sent in a form using the POST method in PHP?", options: ["a) $_POST['fieldName']", "b) $_GET['fieldName']", "c) $_REQUEST['fieldName']", "d) $_FORM['fieldName']"], answer: 0 },
    ],
};


let selectedLanguage;
let currentQuestionIndex = 0;
let score = 0;
let timer;

function startQuiz(language) {
    selectedLanguage = language;
    document.getElementById('language-selection').classList.add('hidden');
    document.getElementById('quiz').classList.remove('hidden');
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex < questions[selectedLanguage].length) {
        const questionData = questions[selectedLanguage][currentQuestionIndex];
        document.getElementById('question').innerText = questionData.question;
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        questionData.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.innerText = option;
            button.onclick = () => checkAnswer(index);
            optionsContainer.appendChild(button);
        });
        startTimer();
    } else {
        endQuiz();
    }
}

function checkAnswer(selectedOption) {
    clearInterval(timer);
    const questionData = questions[selectedLanguage][currentQuestionIndex];
    questionData.selectedOption = selectedOption; // Store the selected option index

    if (selectedOption === questionData.answer) {
        score++;
    }
    currentQuestionIndex++;
    loadQuestion();
}


function startTimer() {
    let timeLeft = 30;
    document.getElementById('time').innerText = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('time').innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            currentQuestionIndex++;
            loadQuestion();
        }
    }, 1000);
}

function endQuiz() {
    document.getElementById('quiz').classList.add('hidden');
    document.getElementById('result').classList.remove('hidden');
    document.getElementById('score').innerText = `You scored ${score} out of ${questions[selectedLanguage].length}`;
    const reviewContainer = document.getElementById('review');
    reviewContainer.innerHTML = '';

    questions[selectedLanguage].forEach((q, index) => {
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item');

        const questionText = document.createElement('p');
        questionText.classList.add('question-text');
        questionText.innerText = `${index + 1}. ${q.question}`;
        reviewItem.appendChild(questionText);

        const optionsList = document.createElement('ul');
        optionsList.classList.add('options-list');
        q.options.forEach((option, optionIndex) => {
            const optionItem = document.createElement('li');
            optionItem.innerText = option;

            // Add a check mark or cross based on the correctness of the option
            const checkIcon = document.createElement('span');
            checkIcon.classList.add('check-icon');
            if (optionIndex === q.answer) {
                checkIcon.innerText = '✅'; // Correct answer
                checkIcon.classList.add('correct-answer');
            } else if (optionIndex === q.selectedOption) {
                checkIcon.innerText = '❌'; // Incorrect answer selected by user
                checkIcon.classList.add('incorrect-answer');
            }
            optionItem.appendChild(checkIcon);

            optionsList.appendChild(optionItem);
        });

        reviewItem.appendChild(optionsList);
        reviewContainer.appendChild(reviewItem);
    });
}




function saveScore() {
    const username = document.getElementById('username').value;
    if (username.trim() === '') {
        alert('Please enter your name');
        return;
    }
    const scoreData = {
        name: username,
        score: score,
        language: selectedLanguage
    };
    let scoreHistory = JSON.parse(localStorage.getItem('scoreHistory')) || [];
    scoreHistory.push(scoreData);
    localStorage.setItem('scoreHistory', JSON.stringify(scoreHistory));
    alert('Score saved successfully!');
}

function restartQuiz() {
    document.getElementById('result').classList.add('hidden');
    document.getElementById('language-selection').classList.remove('hidden');
    score = 0;
    currentQuestionIndex = 0;
}

function viewHistory() {
    window.location.href = 'history.html';
}