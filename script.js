document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');
    
    if (username === 'user' && password === 'password') {
        window.location.href = 'kritik.html';
    } else {
        errorMessage.textContent = 'Username atau password salah!';
    }
});

document.getElementById('kritikForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const kritikText = document.getElementById('kritikText').value;
    const successMessage = document.getElementById('successMessage');
    
    successMessage.textContent = 'Kritik Anda telah dikirim!';
    document.getElementById('kritikText').value = ''; // Clear the textarea
});
