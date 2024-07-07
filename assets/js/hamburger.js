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
    <a href="/swap.html" class="nav-link">Swap</a>
    <a href="/misproductos.html" class="nav-link">Mis productos</a>
    <a href="/perfil.html" class="nav-link">Perfil</a>
    <a href="/login.html" class="nav-link">Login</a>
    <a href="/contacto.html" class="nav-link">Contacto</a>
    </nav>
</div>`

document.querySelector("hamburger").innerHTML = Hamburger;