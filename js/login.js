document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = emailInput.value;
        const password = passwordInput.value;

        // Simple validation
        if (!email || !password) {
            errorMessage.textContent = 'Please fill in all fields';
            return;
        }

        // TODO: Replace with actual authentication
        // For demo purposes, we'll just simulate a successful login
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userEmail', email);
        
        // Redirect to home page instead of dashboard
        window.location.href = 'home.html';
    });
}); 