function toggleSection(id) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    const selectedSection = document.getElementById(id);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
}

function toggleList(id) {
    const list = document.getElementById(id);
    if (list.style.display === "none" || list.style.display === "") {
        list.style.display = "block"; 
    } else {
        list.style.display = "none"; 
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            toggleSection(targetId);
        });
    });

    const firstSection = document.querySelector('section');
    if (firstSection) {
        firstSection.classList.add('active');
    }
});