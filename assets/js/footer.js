document.addEventListener("DOMContentLoaded", function () {
    let Footer = `
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css">
    <footer class="footer-distributed">
      <div class="footer-left">
        <h3>Rosario&nbsp;<span>Swap</span></h3>
        <div class="footer-links">
          <a href="/">Home</a>
          <a href="/Swap.html">Swap</a>
          <a href="/Index.html#about">About</a>
          <a href="Contacto.html">Contact</a>
        </div>
        <div class="footer-company-name">Copyright © 2024 <strong>Rosario Swap</strong> All rights reserved</div>
      </div>
      <div class="footer-center">
        <div>
          <i class="fa fa-map-marker"></i>
          <p><span>Argentina</span><p>Rosario</p></p>
        </div>
        <div>
          <i class="fa fa-phone"></i>
          <p>+54341584732</p>
        </div>
        <div>
          <i class="fa fa-envelope"></i>
          <p><a href="mailto:rosarioswap@email.com">rosarioswap@gmail.com</a></p>
        </div>
      </div>
      <div class="footer-right">
        <p class="footer-company-about">
          <div class="sobre-nosotros">Sobre nosotros</div>
          <p id="parrafo"><strong>Rosario Swap</strong> Somos una plataforma online que te permite intercambiar bienes y servicios con otros miembros de la comunidad, de forma gratuita y sin necesidad de dinero. Es una excelente manera de deshacerte de aquello que ya no necesitas, mientras que encuentras algo nuevo y útil para ti.</p>
        </p>
        <div class="footer-icons">
          <a href="#"><i class="fa fa-facebook"></i></a>
          <a href="#"><i class="fa fa-instagram"></i></a>
          <a href="#"><i class="fa fa-linkedin"></i></a>
          <a href="#"><i class="fa fa-twitter"></i></a>
          <a href="#"><i class="fa fa-youtube"></i></a>
        </div>
      </div>
    </footer>
    `;
    document.querySelector("footer-distributed").innerHTML = Footer;
});
