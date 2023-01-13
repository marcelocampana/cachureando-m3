function createProductGrid(title, image, price, code) {
  const grid = document.getElementById("product-grid");
  const card = document.createElement("div");
  card.setAttribute("id", "card");
  grid.appendChild(card).className = "card";
  card.style.width = "18rem";
  const imageCard = document.createElement("img");
  imageCard.style.maxHeight = "24rem";
  imageCard.src = image;
  imageCard.alt = title;
  card.appendChild(imageCard).className = "card-img-top img-fluid";
  const cardBody = document.createElement("div");
  card.appendChild(cardBody).className = "card-body";
  const cardTitle = document.createElement("h5");
  cardBody.appendChild(cardTitle).className = "card-title";
  cardTitle.innerText = title;
  const cardText = document.createElement("p");
  cardBody.appendChild(cardText).className = "card-text";
  cardText.innerText = `$${price}`;
  const btn = document.createElement("button");
  cardBody.appendChild(btn).className = "btn btn-primary";
  btn.setAttribute("onclick", `showDetail(${code})`);
  btn.innerText = "Comprar";
}

const productGrid = productsData.map((product) =>
  createProductGrid(
    product.titleBook,
    product.cover,
    product.price,
    product.codeBook
  )
);

function showDetail(codeBook) {
  const productFiltered = productsData.filter(
    (product) => product.codeBook == codeBook
  );

  console.log(productFiltered);

  function createProductDetail(title, cover, price, code, description) {
    document.getElementById("product-grid").className = "d-none";
    document.getElementById("product-detail").className = "row";

    let detail = (document.getElementById("product-detail").innerText = "");
    detail = document.getElementById("product-detail");
    const wrapDiv = document.createElement("div");
    detail.appendChild(wrapDiv).className = "row";
    const colDiv = document.createElement("div");
    wrapDiv.appendChild(colDiv).className = "col-6";
    const image = document.createElement("img");
    colDiv.appendChild(image).className = "w-75 img-fluid";
    image.style.maxHeight = "40rem";
    image.src = cover;
    image.alt = title;
    const productInfo = document.createElement("div");
    wrapDiv.appendChild(productInfo).className = "col-4 m-5";
    const titleBook = document.createElement("div");
    colDiv.appendChild(titleBook);
    titleBook.textContent = title;
    const descriptionBook = document.createElement("div");
    colDiv.appendChild(descriptionBook);
    descriptionBook.textContent = description;
    const priceBook = document.createElement("div");
    colDiv.appendChild(priceBook);
    priceBook.textContent = `$${price}`;
    const inputQuantity = document.createElement("input");
    inputQuantity.setAttribute("id", "quantity");
    inputQuantity.setAttribute("type", "number");
    colDiv.appendChild(inputQuantity);
    const buyBtn = document.createElement("button");
    colDiv.appendChild(buyBtn).className = "btn btn-primary";
    buyBtn.setAttribute("onclick", `addtoCart(${code})`);
    buyBtn.innerText = "Agregar al carrito";
    const backBtn = document.createElement("button");
    colDiv.appendChild(backBtn).className = "btn btn-primary";
    backBtn.setAttribute("onclick", "showProductGrid()");
    backBtn.innerText = "Seguir Comprando";
  }

  createProductDetail(
    productFiltered[0].titleBook,
    productFiltered[0].cover,
    productFiltered[0].price,
    productFiltered[0].codeBook,
    productFiltered[0].description
  );
}

function createCart(title, quantity, price, total) {
  const initialValue = 0;
  const value = total.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  const bruto = Math.round(value / 1.19);
  const iva = value - bruto;
  const discount = (value * 0.5) / 10;
  console.log(value, bruto, iva, discount);

  const cart = document.getElementById("product-cart");
  const wrap = document.createElement("div");
  cart.appendChild(wrap).className = "col";
  wrap.innerText = `${title}:${quantity * price}`;
  const inputCartQuantity = document.createElement("input");
  inputCartQuantity.setAttribute("type", "number");
  inputCartQuantity.setAttribute("value", quantity);
  wrap.appendChild(inputCartQuantity);
  const backBtn = document.createElement("button");
  wrap.appendChild(backBtn).className = "btn btn-primary";
  backBtn.setAttribute("onclick", "showProductGrid()");
  backBtn.innerText = "Seguir Comprando";
  const totalDiv = document.createElement("div");
  wrap.appendChild(totalDiv);
  totalDiv.innerText = value >= 100000 ? Math.round(value - discount) : value;
}
const total = [];
function addtoCart(codeBook) {
  document.getElementById("product-cart").className = "col";
  document.getElementById("product-detail").className = "d-none";
  const quantity = document.getElementById("quantity").value;
  const productSelected = productsData
    .filter((product) => product.codeBook == codeBook)
    .map((product) => ({
      titleBook: product.titleBook,
      price: product.price,
      quantity: quantity,
    }));

  total.push(productSelected[0].quantity * productSelected[0].price);

  productSelected.map(() =>
    createCart(
      productSelected[0].titleBook,
      productSelected[0].quantity,
      productSelected[0].price,
      total
    )
  );
}

function showProductGrid() {
  document.getElementById("product-grid").className = "row";
  document.getElementById("product-detail").className = "d-none";
  document.getElementById("product-cart").className = "d-none";
}
