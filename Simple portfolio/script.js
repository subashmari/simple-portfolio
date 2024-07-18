document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll("nav li");
    const sections = document.querySelectorAll(".dashboard-section");

    navItems.forEach((item, index) => {
        item.addEventListener("click", () => {
            navItems.forEach((navItem) => navItem.classList.remove("active"));
            sections.forEach((section) => section.style.display = "none");

            item.classList.add("active");
            sections[index].style.display = "block";
        });
    });

    document.getElementById("login-form").addEventListener("submit", function (event) {
        event.preventDefault();

        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        if (username === "subash" && password === "subash") {
            window.location.href = "dashboard.html"; // Redirect to the dashboard page
        } else {
            document.getElementById("status").textContent = "Invalid credentials. Please try again.";
        }
    });

    const passwordForm = document.getElementById("password-form");
    if (passwordForm) {
        passwordForm.addEventListener("submit", function (event) {
            event.preventDefault();
            // Password change logic here
        });
    }
});
