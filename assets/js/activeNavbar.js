// document.addEventListener("DOMContentLoaded", function () {
//     const currentPageURL = window.location.href;
//     const navLinks = document.querySelectorAll('.nav-link');
//     const misProductosLink = document.querySelector('.mis-productos-link');

//     console.log("Current Page URL:", currentPageURL);
//     console.log("Mis Productos Link:", misProductosLink);

//     // Marcar "Mis productos" como activo si la URL contiene cualquiera de las siguientes páginas
//     if (
//         currentPageURL.includes('altas.html') ||
//         currentPageURL.includes('listado.html') ||
//         currentPageURL.includes('listadoEliminar.html') ||
//         currentPageURL.includes('modificaciones.html') ||
//         currentPageURL.includes('MisProductos.html')
//     ) {
//         if (misProductosLink) {
//             misProductosLink.classList.add('active');
//             console.log("Mis productos link marked as active");
//         } else {
//             console.log("Mis productos link not found");
//         }
//     } else {
//         navLinks.forEach(link => {
//             if (link.href === currentPageURL) {
//                 link.classList.add('active');
//                 console.log(`Link ${link.href} marked as active`);
//             }
//         });
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
    const currentPageURL = window.location.pathname.toLowerCase();
    const navLinks = document.querySelectorAll('.nav-link');
    const misProductosLink = document.querySelector('.mis-productos-link');

    console.log("Current Page URL:", currentPageURL);
    console.log("Mis Productos Link:", misProductosLink);

    // Marcar "Mis productos" como activo si la URL contiene cualquiera de las siguientes páginas
    const productPages = [
        '/altas.html',
        '/listado.html',
        '/listadoeliminar.html',
        '/modificaciones.html',
        '/misproductos.html'
    ];

    if (productPages.includes(currentPageURL)) {
        if (misProductosLink) {
            misProductosLink.classList.add('active');
            console.log("Mis productos link marked as active");
        } else {
            console.log("Mis productos link not found");
        }
    } else {
        navLinks.forEach(link => {
            if (link.pathname.toLowerCase() === currentPageURL) {
                link.classList.add('active');
                console.log(`Link ${link.href} marked as active`);
            }
        });
    }
});
