const nav = `<nav class="navbar navbar-expand-lg bg-body-tertiary">
<nav class="navbar" style="background-color: #3d515f;">
    <!-- Navbar content -->
  </nav>
<div class="container-fluid">
  <a class="navbar-brand" href="#">Tienda</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Inicio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Comprar</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Sobre nosotros</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Más
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Contacto</a></li>
          <li><a class="dropdown-item" href="#">Productos</a></li>
          <li><a class="dropdown-item" href="#">Atrás</a></li>
        </ul>
      </li>
    </ul>
  </div>
</div>
</nav>`;
const footer = `<footer class="bg-light text-center text-lg-start">
        <!-- Grid container -->
        <div class="container p-4">
          <!--Grid row-->
          <div class="row">
            <!--Grid column-->
            <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 class="text-uppercase">Garantía</h5>
      
              <p>
                Garantía en tus despachos
              </p>
            </div>
            <!--Grid column-->
      
            <!--Grid column-->
            <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 class="text-uppercase">Pago 100% seguro</h5>
      
              <p>
                Seguridad de tus datos
              </p>
            </div>
            <!--Grid column-->
          </div>
          <!--Grid row-->
        </div>
        <!-- Grid container -->
      
        <!-- Copyright -->
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
          © 2023 Cachureando
          <a class="text-dark" href="https://mdbootstrap.com/"</a>
        </div>
        <!-- Copyright -->
</footer>`;

document.getElementById("nav").innerHTML = nav;

document.getElementById("footer").innerHTML = footer;
