// document.addEventListener("DOMContentLoaded", function () {
//     const currentPageURL = window.location.href;
//     const navLinks = document.querySelectorAll('.nav-link');
//     navLinks.forEach(link => {
//         if (link.href === currentPageURL) {
//             link.classList.add('active');
//         }
//     });
// });
document.addEventListener("DOMContentLoaded", function () {
    const currentPagePath = window.location.pathname; // Obtener solo la parte de la ruta de la URL actual
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname; // Obtener solo la parte de la ruta del enlace
        if (linkPath === currentPagePath) {
            link.classList.add('active');
        }
    });
});

