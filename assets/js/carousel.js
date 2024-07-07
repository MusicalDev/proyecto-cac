
let Carousel = `
<div class="carousel-container">
<main class="carousel">
  <ul class='slider'>
    <li class='item' style="background-image: url('./assets/images/back10.jpg')">
      <div class='content'>
        <h2 class='title'>Fomenta la economía local</h2>
        <p class='description'> Apoya a negocios y emprendedores de tu zona. </p>
          <a href="/contacto.html"><button>Leer más</button></a>
      </div>
    </li>
    <li class='item' style="background-image: url('./assets/images/back2.jpeg')">
      <div class='content'>
        <h2 class='title'>Optimiza tus recursos</h2>
        <p class='description'> Intercambia cosas que no necesitas por aquellas que sí te son esenciales. </p>
        <button>Leer más</button>
      </div>
    </li>
    <li class='item' style="background-image: url('./assets/images/back8.jpg')">
      <div class='content'>
        <h2 class='title'>Reduce el consumo</h2>
        <p class='description'> Minimiza el impacto ambiental al dar una segunda vida a los objetos y servicios. </p>
        <button>Leer más</button>
      </div>
    </li>
    <li class='item' style="background-image: url('./assets/images/back5.jpg')">
      <div class='content'>
        <h2 class='title'>Ahorra dinero</h2>
        <p class='description'>
        Accede a bienes y servicios que necesitas sin tener que gastar dinero.
        </p>
        <button>Leer más</button>
      </div>
    </li>
    <li class='item' style="background-image: url('./assets/images/back4.jpg')">
      <div class='content'>
        <h2 class='title'>Promueve la sostenibilidad</h2>
        <p class='description'>
        Reduce el consumo y el impacto ambiental al dar una segunda vida a los objetos.
        </p>
        <button>Leer más</button>
      </div>
    </li>
    <li class='item' style="background-image: url('./assets/images/back6.jpg')">
      <div class='content'>
        <h2 class='title'>Fortalece tu red de contactos</h2>
        <p class='description'> Conoce gente nueva y establece relaciones profesionales valiosas. </p>
        <button>Leer más</button>
      </div>
    </li>
  </ul>
  <nav class='nav'>
    <ion-icon class='btn prev' name="arrow-back-outline"></ion-icon>
    <ion-icon class='btn next' name="arrow-forward-outline"></ion-icon>
  </nav>
</main>
</div>

<script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
`

document.querySelector("carousel").innerHTML = Carousel;