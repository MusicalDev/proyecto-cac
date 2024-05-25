document.addEventListener("DOMContentLoaded", function () {
    const currentPageURL = window.location.href;
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.href === currentPageURL) {
            link.classList.add('active');
        }
    });
});
