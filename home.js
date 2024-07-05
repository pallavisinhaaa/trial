function getUsername() {
    return localStorage.getItem('username') || 'User';
}

function setUsername() {
    document.getElementById('username').textContent = getUsername();
}

// Function to start the quiz with a 3-second delay and countdown display
function startQuiz() {
    const countdownElement = document.createElement('p');
    countdownElement.id = 'countdown';
    countdownElement.textContent = 'Starting quiz in 3 seconds...';
    document.getElementById('welcome-message').appendChild(countdownElement);

    let countdown = 3;
    const countdownInterval = setInterval(() => {
        countdown -= 1;
        countdownElement.textContent = `Starting quiz in ${countdown} seconds...`;

        if (countdown === 0) {
            clearInterval(countdownInterval);
            window.location.href = 'index.html'; // Redirect to index.html for the quiz
        }
    }, 1000);
}

// Function to show rules and automatically hide after 10 seconds
function showRules() {
    const rulesDiv = document.getElementById('rules');
    rulesDiv.classList.remove('hidden'); // Show rules

    // Smooth scroll to rules section
    rulesDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Automatically hide rules after 10 seconds
    setTimeout(() => {
        rulesDiv.classList.add('hidden');
    }, 10000); // 10 seconds (10000 milliseconds)
}

// Function to show contact and automatically hide after 10 seconds
function showContact() {
    const contactDiv = document.getElementById('contact');
    contactDiv.classList.remove('hidden'); // Show contact

    // Smooth scroll to contact section
    contactDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Automatically hide contact after 10 seconds
    setTimeout(() => {
        contactDiv.classList.add('hidden');
    }, 10000); // 10 seconds (10000 milliseconds)
}

// Function to logout
function logout() {
    // Clear the stored username and redirect to the login page
    localStorage.removeItem('username');
    window.location.href = 'login.html';
}

// Set the username when the page loads
window.onload = function () {
    setUsername();
};

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("history-link").addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = "history.html";
    });
});
