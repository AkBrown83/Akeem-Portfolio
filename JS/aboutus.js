/* Sidebar */
document.addEventListener("DOMContentLoaded", function () {
    // Sidebar toggle button functionality
    const sidebarToggle = document.getElementById("sidebarToggle");
    const sidebar = document.getElementById("sidebar");
    const body = document.querySelector('body');

    sidebarToggle.addEventListener("click", function () {
        sidebar.classList.toggle("collapsed");
        if (sidebar.classList.contains("collapsed")) {
            sidebar.style.marginLeft = "-250px"; // adjust to your sidebar width
        } else {
            sidebar.style.marginLeft = "0";
        }
    });

    // Navbar collapse button functionality
    const navbarToggle = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.getElementById("navbarNavDropdown");

    navbarToggle.addEventListener("click", function () {
        navbarCollapse.classList.toggle("show");
    });
});
