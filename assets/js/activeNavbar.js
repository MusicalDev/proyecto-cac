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
    const currentPagePath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        // Compara la ruta de la página actual con el atributo href de cada enlace
        if (link.getAttribute('href') === currentPagePath) {
            link.classList.add('active');
        }
    });
});


