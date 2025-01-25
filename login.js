// Handle the login form submission
document.getElementById("login").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Find the user that matches the entered email and password
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert("Login successful!");
        window.location.href = "form.html"; // Redirect to the User Information Form page
    } else {
        alert("Invalid email or password. Please try again.");
    }
});

// Handle the registration form submission
document.getElementById("register").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const firstName = document.getElementById('registerFirstName').value;
    const lastName = document.getElementById('registerLastName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Retrieve existing users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if the email already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        alert("An account with this email already exists.");
        return;
    }

    // Create a new user object
    const newUser = {
        firstName,
        lastName,
        email,
        password
    };

    console.log("New user to be saved:", newUser);

    // Save the new user to localStorage
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful! You can now log in.");
});