document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.querySelector(".Log-in");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        const emailInput = loginForm.querySelector("input[type='email']").value.trim();
        const passwordInput = loginForm.querySelector("input[type='password']").value.trim();

        // Get stored users from localStorage
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Find user in stored data
        let foundUser = users.find(user => user.email === emailInput && user.password === passwordInput);

        if (foundUser) {
            // Login successful, redirect to index3 (Home Page)
            window.location.href = "index3.html";
        } else {
            // Redirect to sign-up page if user doesn't exist
            alert("Account not found. Please sign up.");
            window.location.href = "index2.html";
        }
    });
});
