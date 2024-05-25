document.addEventListener("DOMContentLoaded", function() {
    // Obtener la URL de la página actual
    const currentPageURL = window.location.href;

    // Obtener todos los enlaces de la barra de navegación
    const navLinks = document.querySelectorAll('.nav-link');

    // Iterar sobre los enlaces
    navLinks.forEach(link => {
        // Comparar la URL del enlace con la URL de la página actual
        if (link.href === currentPageURL) {
            // Agregar la clase 'active' al enlace actual si coincide con la página actual
            link.classList.add('active');
        }
    });
});
