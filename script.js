const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const home = document.getElementById('home');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.getElementById("home").addEventListener("click", function(event) {
    event.preventDefault();  // Prevent form submission
    window.location.href = "home.html";  // Redirect to home.html
});