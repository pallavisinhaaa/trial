function register() {
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const email = document.getElementById('reg-email').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Check if the username is already registered
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.username === username);

    if (userExists) {
        alert('Username is already taken.');
        return;
    }

    const newUser = { username, password, email };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful!');
    window.location.href = 'home.html'; // Redirect to home page after successful registration
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const validUser = users.find(user => user.username === username && user.password === password);

    if (validUser) {
        localStorage.setItem('username', username);
        alert('Login successful!');
        window.location.href = 'home.html'; // Redirect to home page after successful login
    } else {
        alert('Invalid username or password.');
    }
}

function showSignup() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('registration-form').style.display = 'block';
}

function logout() {
    localStorage.removeItem('username');
    alert('Logged out successfully!');
    window.location.href = 'login.html'; // Redirect to login page after logout
}








