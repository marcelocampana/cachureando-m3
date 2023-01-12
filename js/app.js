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

const carrito = ` <h3>Carrito de compra</h3>


    <div class="container h-100 py-5">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-10">
  
          <div class="d-flex justify-content-between align-items-center mb-4">
            <h3 class="fw-normal mb-0 text-black">Shopping Cart</h3>
            <div>
              <p class="mb-0"><span class="text-muted">Sort by:</span> <a href="#!" class="text-body">price <i
                    class="fas fa-angle-down mt-1"></i></a></p>
            </div>
          </div>
        </div>
      </div>
    </div>`;
document.getElementById("cart").innerHTML = carrito;
