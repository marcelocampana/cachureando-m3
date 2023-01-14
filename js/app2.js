/* Injección de Grilla de productos */
const productCard = productsData
  .map(
    (product) =>
      `<div class="col-6 col-md-3 col-lg-2">
      <div class="card mb-3 w-100 " style="height: 480px;">
      <img src="${product.cover}" class="card-img-top" alt="${
        product.titleBook
      }" onclick="showStoreComponent('product-detail')">
      <div class="card-body">
        <h5 class="card-title">${product.titleBook}</h5>
        <p class="card-text">$ ${Intl.NumberFormat("es-CL").format(
          product.price
        )}</p> 
        <button onclick="displayProductDetail(${
          product.codeBook
        })" class="btn btn-primary">Comprar</button>
      </div>
      </div>
    </div>`
  )
  .join("");

document.getElementById("product-grid").innerHTML = productCard;
showStoreComponent("product-grid");

/* Injección detalle de productos */
function displayProductDetail(codeBook) {
  showStoreComponent("product-detail");

  //Mostrando el producto  seleccionado en la grilla
  const productSelected = productsData.filter(
    (product) => product.codeBook == codeBook
  );

  const productDetail = `<div class="row">
    <div class="col-6 d-flex justify-content-center">
      <img src="${productSelected[0].cover}" alt=" " class="h-75">
    </div>
    <div class="col-4 mx-5">
      <div>
        <h1>${productSelected[0].titleBook}<h1>
      </div>
      <div>${productSelected[0].description}</div>
      <div>
        <h5 class="text-left pt-4 pb-4">$${Intl.NumberFormat("es-CL").format(
          productSelected[0].price
        )}<h5>
      </div>
      <div> 
        <h5 class="pb-4" >Disponibilidad: en stock</h5> 
      </div>
      <div>
        <h6>Cantidad</h6>
      </div>
      <input type="number" value="1" min="1" id="quantity"/>
      <button type="button" onclick="addProductToCart(${
        productSelected[0].codeBook
      })" class="btn btn-primary btn-lg mt-3 d-flex justify-content-end">Agregar al carrito</button>
      <button type="button" onclick="showStoreComponent('product-grid')" class="btn btn-outline-primary mt-5">Seguir comprando</button> 
      </div>
    </div>  
  `;
  document.getElementById("product-detail").innerHTML = productDetail;
}

/* Injección carrito de compra */

let cartItems = [];
function addProductToCart(codeBook) {
  showStoreComponent("product-cart");
  const quantity = document.getElementById("quantity").value;
  //Agregando al carrito el producto que contiene el codeBook dado
  const productAddedToCart = productsData
    .filter((product) => product.codeBook == codeBook)
    .map((product) => ({
      codeBook: product.codeBook,
      title: product.titleBook,
      price: product.price,
      quantity,
      cover: product.cover,
    }));

  cartItems.push(productAddedToCart[0]);
  // crear un funcion

  const productCard = ` 
<div class="h-100" id="${productAddedToCart[0].codeBook}">
    <div class="container h-100 py-1">
      <div class="row d-flex justify-content-center align-items-center h-100">            
        <div class="card rounded-3">
          <div class="card-body p-4">
            <div class="row d-flex justify-content-between align-items-center">
              <div class="col-1">
                <img
                  src="${productAddedToCart[0].cover}"
                  class="img-fluid rounded-3" alt="${
                    productAddedToCart[0].titleBook
                  }">
              </div>
              <div class="col-2">
                <p class="lead fw-normal mb-2">${
                  productAddedToCart[0].title
                }</p>
              </div>
              <div class="col-2 d-flex">
                <button class="btn btn-link px-2"
                  onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                  <i class="fas fa-minus"></i>
                </button>
                <input  min="1" name="quantity" value="${
                  productAddedToCart[0].quantity
                }" type="number"
                  class="form-control form-control-sm" />
                <button class="btn btn-link px-2"
                  onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                  <i class="fas fa-plus"></i>
                </button>
            </div>
            <div class="col-2 offset-1">
                <h5 class="mb-0">$ ${Intl.NumberFormat("es-CL").format(
                  productAddedToCart[0].price
                )}</h5>      
            </div>  
            <div class="col-2 offset-1">
              <h5 class="mb-0">$ ${Intl.NumberFormat("es-CL").format(
                productAddedToCart[0].price * productAddedToCart[0].quantity
              )}</h5>      
              </div>       
              <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                <button class="text-danger fs-6" onclick="deteleProduct(${
                  productAddedToCart[0].codeBook
                });"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="fs-6" style="width:24px">
                    <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
                   <path fill-rule="evenodd" d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.133 2.845a.75.75 0 011.06 0l1.72 1.72 1.72-1.72a.75.75 0 111.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 11-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 11-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06z" clip-rule="evenodd" />
                    </svg>
                </i></button>
              </div>
            </div>
          </div>
        </div>     
      </div>
    </div>
  </div>
</div>`;

  console.log("pc", productAddedToCart);
  productAddedToCart.map(
    () => (document.getElementById("product-cart").innerHTML += productCard)
  );

  console.log("ci", cartItems);

  /*  const productCardEmpty = `<div style="height:400px" class=text-center>
<h3>El carrito está vacío</h3></div>`;
    document.getElementById("cart-empty").innerHTML = productCardEmpty; */
}

function deleteProduct(id) {
  // identificar array con dato a eliminar
  // hacer un filter del array para que me gurade todos los registros que sean diferentes al cconsulltado
  const productDeleted = cartItems.filter((product) => product.codeBook != id);
  console.log(productDeleted[0].codeBook);

  const child = document.getElementById("product-cart");
  child.removeChild(productDeleted[0].codeBook);
}

//mostrar el array resultante.
//llamar a la funcion con onclic desde el html

/* Funcion para mostrar/ocultar componentes de la tienda (grilla, detalle de productos, carrito de compra) */

function showStoreComponent(component) {
  document.getElementById("product-grid").className =
    component === "product-grid" ? "row" : "d-none";
  document.getElementById("product-detail").className =
    component === "product-detail" ? "row" : "d-none";
  document.getElementById("product-cart").className =
    component === "product-cart" ? "row" : "d-none";
}
