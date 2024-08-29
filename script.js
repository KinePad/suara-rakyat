let clickCount = 0;

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    clickCount++;
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    if (clickCount >= 5) {
        window.location.href = 'easter_egg.html';
    } else if (username === 'user' && password === 'password') {
        window.location.href = 'kritik.html';
    } else {
        errorMessage.textContent = 'Username atau password salah!';
    }
});
