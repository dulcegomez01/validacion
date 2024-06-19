function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    var icon = document.getElementById('toggleIcon');

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove('far', 'fa-eye');
        icon.classList.add('fas', 'fa-eye-slash');
    } else {
        passwordInput.type = "password";
        icon.classList.remove('fas', 'fa-eye-slash');
        icon.classList.add('far', 'fa-eye');
    }
}

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden.');
        event.preventDefault();
    }
});