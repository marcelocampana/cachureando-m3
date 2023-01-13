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
  document.getElementById("product-detail").className = "d-block";
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
  document.getElementById("product-cart").className = "d-block";
  document.getElementById("product-detail").className = "d-none";
  const quantity = document.getElementById("quantity").value;
  const productSelected = productsData
    .filter((product) => product.codeBook == codeBook)
    .map((product) => ({
      title: product.titleBook,
      price: product.price,
      quantity,
      cover: product.cover,
    }));

  /* const productSelectedPrice = productsData
    .filter((product) => product.codeBook == codeBook)
    .map((product) => product.price); */

  //productSelected.push(quantity, productSelectedPrice[0]);
  //productSelected.push();
  //productSelected.push(productSelectedPrice);

  console.log(productSelected);

  const cartHtml = ` 
<section class="h-100" style="background-color: #eee;">
<div class="container h-100 py-1">
  <div class="row d-flex justify-content-center align-items-center h-100">            
      <div class="card rounded-3 ">
        <div class="card-body p-4">
          <div class="row d-flex justify-content-between align-items-center">
            <div class="col-md-2 col-lg-2 col-xl-2">
              <img
                src="${productSelected[0].cover}"
                class="img-fluid rounded-3" alt="${
                  productSelected[0].titleBook
                }">
            </div>
            <div class="col-md-3 col-lg-3 col-xl-3">
              <p class="lead fw-normal mb-2">${productSelected[0].title}</p>
         
            </div>
            <div class="col-md-1 col-lg-1 col-xl-1 d-flex">
              <button class="btn btn-link px-2"
                onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                <i class="fas fa-minus"></i>
              </button>

              <input id="form1" min="0" name="quantity" value="${
                productSelected[0].quantity
              }" type="number"
                class="form-control form-control-sm" />

              <button class="btn btn-link px-2"
                onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                <i class="fas fa-plus"></i>
              </button>
            </div>
            <div class="col-md-1 col-lg-1 col-xl-1 offset-lg-1">
              <h5 class="mb-0">$ ${productSelected[0].price}</h5>      
            </div>  
             <div class="col-md-1 col-lg-1 col-xl-1 offset-lg-1">
              <h5 class="mb-0">$ ${
                productSelected[0].price * productSelected[0].quantity
              }</h5>      
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
  productSelected.map(
    () => (document.getElementById("product-cart").innerHTML += cartHtml)
  );
}

const btnBack = document.createElement("button");
btnBack.className = "btn btn-primary m-3";
btnBack.setAttribute("onclick", "showGridProducts()");
btnBack.textContent = "Seguir Comprando";

document.getElementById("product-cart").appendChild(btnBack);

function showGridProducts() {
  document.getElementById("product-grid").className = "row";
  document.getElementById("product-cart").className = "d-none";
}
