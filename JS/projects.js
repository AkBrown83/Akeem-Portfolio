// Sample projects array to simulate backend data (replace with real data source)
const projects = [
    { title: 'Collins Construction', type: 'Website', imageUrl: '/images/ai-generated-8363801_1280.png' },
    { title: 'Avery Landscaping', type: 'Logo Design', imageUrl: '/images/ai-generated-8363801_1280.png' },
    { title: 'Project 3', type: 'Mobile App', imageUrl: '/images/ai-generated-8363801_1280.png' },
    { title: 'Project 4', type: 'Website', imageUrl: '/images/ai-generated-8363801_1280.png' },
    { title: 'Project 5', type: 'Branding', imageUrl: '/images/ai-generated-8363801_1280.png' },
    // Add more projects
];

let currentIndex = 0;
const projectsPerPage = 9;

// Function to load projects into the grid
function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');

    for (let i = currentIndex; i < currentIndex + projectsPerPage && i < projects.length; i++) {
        const project = projects[i];
        const projectCard = document.createElement('div');
        projectCard.classList.add('col');

        projectCard.innerHTML = `
            <div class="card project-card" style="background-image: url('${project.imageUrl}');">
                <div class="card-img-overlay">
                    <h4>${project.title}</h4>
                    <p>Project Type: ${project.type}</p>
                </div>
            </div>
        `;

        projectsGrid.appendChild(projectCard);
    }

    currentIndex += projectsPerPage;

    // Hide "Load More" button if there are no more projects to load
    if (currentIndex >= projects.length) {
        document.getElementById('loadMoreBtn').style.display = 'none';
    }
}

// Load initial set of projects on page load
loadProjects();

// Load more projects when the "Load More" button is clicked
document.getElementById('loadMoreBtn').addEventListener('click', loadProjects);

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

