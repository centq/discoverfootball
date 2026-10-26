javascript
// Get the menu elements
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

// Open and close the navigation menu
if (menuToggle && navbar) {

    menuToggle.addEventListener("click", function () {

        navbar.classList.toggle("open");

    });

}

// Highlight the current page in the menu
const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".navbar a").forEach(function (link) {

    if (link.getAttribute("href") === currentPage) {

        link.classList.add("active");

    } else {

        link.classList.remove("active");

    }

});

