function getUsername() {
    return localStorage.getItem('username') || 'User';
}

function setUsername() {
    document.getElementById('username').textContent = getUsername();
}

function viewScoreHistory() {
    const username = document.getElementById('history-username').value;
    if (username.trim() === '') {
        alert('Please enter your name');
        return;
    }
    const scoreHistory = JSON.parse(localStorage.getItem('scoreHistory')) || [];
    const userHistory = scoreHistory.filter(entry => entry.name.toLowerCase() === username.toLowerCase());
    const historyContainer = document.getElementById('score-history');
    historyContainer.innerHTML = '';
    if (userHistory.length === 0) {
        historyContainer.innerHTML = '<p>No scores found for this user.</p>';
        return;
    }
    userHistory.forEach(entry => {
        const historyItem = document.createElement('p');
        historyItem.innerText = `Name: ${entry.name},
         Score: ${entry.score},
          Language: ${entry.language}`;
        historyContainer.appendChild(historyItem);
    });
}
z