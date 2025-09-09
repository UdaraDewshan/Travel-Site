function loginUser() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let storedEmail = localStorage.getItem("userEmail");
    let storedPassword = localStorage.getItem("userPassword");
    let loginButton = document.getElementById("login").value;

    if (email === storedEmail && password === storedPassword) {
        alert("Login Successful!");

        document.body.innerHTML = `
            <div class="d-flex justify-content-center align-items-center vh-100 bg-dark text-light">
            <div class="card shadow-lg p-5 rounded-4 text-center" style="max-width: 500px; background: linear-gradient(135deg, #ffcc00, #ff9900);">
            <h2 class="fw-bold mb-3">🌴 Welcome to <span class="text-dark">Lanka Tours</span></h2>
            <p class="mb-4">You are now logged in as <b>${email}</b>.</p>
            <a href="logAfterPage.html" class="btn btn-dark w-100 fw-bold rounded-pill">Go to Homepage</a>
            </div>
        </div>
        `;


        return false; 



    } else {
        alert("Invalid Email or Password!");
        return false;
    }
}