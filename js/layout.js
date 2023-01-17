const nav = `
<div class="bg-body-tertiary">
<nav class="navbar navbar-expand-lg bg-body-tertiary container">
<div class="container-fluid">
  <button class="navbar-brand border-0 bg-transparent" onclick="showStoreComponent('product-grid')">Tienda</button>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item">
        <button class="nav-link border-0 bg-transparent" aria-current="page" onclick="showStoreComponent('product-grid')">Catálogo</button>
      </li>
      <li class="nav-item">
         <button class="nav-link border-0 bg-transparent" aria-current="page" onclick="showStoreComponent('product-cart')"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width:24px">
  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
</svg>
</button>
      </li>
    </ul>
  </div>
</div>
</nav>
</div>
`;
const footer = `<footer class="bg-light text-center text-lg-start ">
        <!-- Grid container -->
        <div class="container p-4">
          <!--Grid row-->
          <div class="row d-flex justify-content-evenly">
            <!--Grid column-->
            <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
              <h5 class="text-uppercase">Garantía</h5>
      
              <p>
                Garantía en tus despachos
              </p>
            </div>
            <!--Grid column-->
      
            <!--Grid column-->
            <div class="col-lg-4 col-md-12 mb-4 mb-md-0">
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
