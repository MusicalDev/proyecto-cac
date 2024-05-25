let Hamburger = `

<div class="hamburger">
  <label for="check" class="menuButton">
    <input id="check" type="checkbox">
    <span class="top"></span>
    <span class="mid"></span>
    <span class="bot"></span>
  </label>
  <nav class="mobile-navigation">  
    <a href="/" class="nav-link">Home</a>
    <a href="/Swap.html" class="nav-link">Swap</a>
    <a href="/MisProductos.html" class="nav-link">Mis productos</a>
    <a href="/Perfil.html" class="nav-link">Perfil</a>
    <a href="/Login.html" class="nav-link">Login</a>
    <a href="/Contacto.html" class="nav-link">Contacto</a>
    </nav>
</div>`

document.querySelector("hamburger").innerHTML = Hamburger;