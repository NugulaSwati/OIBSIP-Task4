document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-message');
    var successMessage = document.getElementById('success-message');
    var messageBox = document.getElementById('message-box');

    errorMessage.textContent = '';
    successMessage.textContent = '';
    messageBox.style.display = 'none';

    if (username === 'admin' && password === 'password123') {
        successMessage.textContent = 'Login successful!';
        messageBox.style.display = 'block';
        messageBox.style.backgroundColor = 'black';
        messageBox.style.border = '2px solid #3ae306';
    } else {
        errorMessage.textContent = 'Invalid username or password';
        messageBox.style.display = 'block';
        messageBox.style.backgroundColor = 'black';
        messageBox.style.border = '2px solid #ff4d4d';
    }
});
