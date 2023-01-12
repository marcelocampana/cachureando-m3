//console.log(productsData);
const productCard = productsData.map(
  (product) =>
    `<div class="card" style="width: 18rem;">
<img src="${product.cover}" class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${product.titleBook}</h5>
  <p class="card-text">$ ${product.price}</p> 
  <button onclick="showDetail(${product.codeBook})" class="btn btn-primary">Comprar</button>
</div>
</div>`
);

document.getElementById("product-grid").innerHTML = productCard;

function showDetail(codeBook) {
  document.getElementById("product-grid").className = "d-none";
  const productFiltered = productsData.filter(
    (product) => product.codeBook == codeBook
  );

  const detailProduct = `<div class="row">
  <div class="col-6">

    <img src="${productFiltered[0].cover}" alt=" " class="w-100">
  </div>
  <div class="col-4 m-5">
    <div>${productFiltered[0].titleBook}</div>
    <div>${productFiltered[0].description}</div>
    <div>$${productFiltered[0].price}</div>
    <input type="number" id="quantity"/>
    <button type="button" onclick="addtoCart(${productFiltered[0].codeBook})" class="btn btn-primary mt-5">Agregar al carrito</button>
  </div>
  <button onclick="showGridProducts()" class="btn btn-primary">Seguir comprando</button>
</div>`;
  console.log(productFiltered);

  document.getElementById("product-detail").innerHTML = detailProduct;
}

//let productsSelected = [];
function addtoCart(codeBook) {
  const quantity = document.getElementById("quantity").value;
  const productSelected = productsData
    .filter((product) => product.codeBook == codeBook)
    .map((product) => ({
      title: product.titleBook,
      price: product.price,
      queantity: quantity,
    }));

  /* const productSelectedPrice = productsData
    .filter((product) => product.codeBook == codeBook)
    .map((product) => product.price); */

  //productSelected.push(quantity, productSelectedPrice[0]);
  //productSelected.push();
  //productSelected.push(productSelectedPrice);

  console.log(productSelected);

  //const multiplication = productSelected[1] * productSelected[2];

  const cart = productSelected.map(
    () =>
      `<div>${productSelected[0].queantity * productSelected[0].price}</div>`
  );

  document.getElementById("product-cart").innerHTML += cart;
}

function showGridProducts() {
  document.getElementById("product-cart").innerHTML = productCard;
}

const carrito = ` 
<section class="h-100" style="background-color: #eee;">
<div class="container h-100 py-5">
  <div class="row d-flex justify-content-center align-items-center h-100">            
      <div class="card rounded-3 mb-4">
        <div class="card-body p-4">
          <div class="row d-flex justify-content-between align-items-center">
            <div class="col-md-2 col-lg-2 col-xl-2">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                class="img-fluid rounded-3" alt="Cotton T-shirt">
            </div>
            <div class="col-md-3 col-lg-3 col-xl-3">
              <p class="lead fw-normal mb-2">Basic T-shirt</p>
              <p><span class="text-muted">Size: </span>M <span class="text-muted">Color: </span>Grey</p>
            </div>
            <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
              <button class="btn btn-link px-2"
                onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                <i class="fas fa-minus"></i>
              </button>

              <input id="form1" min="0" name="quantity" value="2" type="number"
                class="form-control form-control-sm" />

              <button class="btn btn-link px-2"
                onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                <i class="fas fa-plus"></i>
              </button>
            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
              <h5 class="mb-0">$499.00</h5>
            </div>
            <div class="col-md-1 col-lg-1 col-xl-1 text-end">
              <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
            </div>
          </div>
        </div>
      </div>     
    </div>
  </div>
</div>
</section>`;
document.getElementById("cart").innerHTML = carrito;
