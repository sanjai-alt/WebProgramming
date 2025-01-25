// details.js
document.addEventListener("DOMContentLoaded", function () {
    // Retrieve user data from localStorage
    const fullName = localStorage.getItem("fullName");
    const email = localStorage.getItem("email");
    const dob = localStorage.getItem("dob");
    const phone = localStorage.getItem("phone");
    const address = localStorage.getItem("address");
  
    // Display the user details
    document.getElementById("displayFullName").textContent = fullName;
    document.getElementById("displayEmail").textContent = email;
    document.getElementById("displayDob").textContent = dob;
    document.getElementById("displayPhone").textContent = phone;
    document.getElementById("displayAddress").textContent = address;
  });