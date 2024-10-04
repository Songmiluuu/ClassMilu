document.getElementById('loginForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    });

    const result = await response.json();
    
    if (result.success) {
        // Redirect to schedule page
        window.location.href = 'schedule.html';
    } else {
        document.getElementById('error-message').textContent = result.message;
    }
});
