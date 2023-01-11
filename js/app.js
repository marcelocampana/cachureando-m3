//console.log(productsData);
const productoCard = productsData.map(
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

document.getElementById("app").innerHTML = productoCard;

function showDetail(codeBook) {
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
    <button type="button" class="btn btn-primary mt-5">Agregar al carrito</button>
  </div>
</div>`;
  console.log(productFiltered);

  document.getElementById("app").innerHTML = detailProduct;
}

const productoCard1 = productsData.map((element) => element.price);
