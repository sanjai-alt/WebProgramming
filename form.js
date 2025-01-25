// form.js
document.getElementById("userForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
  
    // Collect user input
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const dob = document.getElementById("dob").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
  
    // Save the user data to localStorage (for passing data to details page)
    localStorage.setItem("fullName", fullName);
    localStorage.setItem("email", email);
    localStorage.setItem("dob", dob);
    localStorage.setItem("phone", phone);
    localStorage.setItem("address", address);
  
    // Redirect to the User Details page
    window.location.href = "details.html";
});