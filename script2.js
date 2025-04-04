document.addEventListener("DOMContentLoaded", function () {
    const signUpForm = document.querySelector(".Sign-Up");

    signUpForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        const nameInput = document.getElementById("name").value.trim();
        const emailInput = document.getElementById("email").value.trim();
        const passwordInput = document.getElementById("password").value.trim();
        const confirmPasswordInput = document.getElementById("confirm-password").value.trim();

        // Get stored users from localStorage
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Check if email already exists
        let emailExists = users.some(user => user.email === emailInput);

        if (emailExists) {
            alert("Email already exists. Please log in.");
            window.location.href = "index1.html"; // Redirect to login if email exists
            return;
        }

        // Check if passwords match
        if (passwordInput !== confirmPasswordInput) {
            alert("Passwords do not match. Please try again.");
            return;
        }

        // Save new user to localStorage
        users.push({ name: nameInput, email: emailInput, password: passwordInput });
        localStorage.setItem("users", JSON.stringify(users));

        alert("Account created successfully! Redirecting to home page...");

        // Redirect to home page (index3.html)
        window.location.href = "index3.html";
    });
});
