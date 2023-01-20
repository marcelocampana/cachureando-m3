/* ------------GRILLA DE PRODUCTOS----------------------------------- */

//Título de la sección
const gridMainTitle = document.createElement("h1");
gridMainTitle.classList.add("my-5");
gridMainTitle.innerText = "Catálogo de productos";

//Container
const gridContainer = document.createElement("div");
gridContainer.classList.add("row");

DOMgrid.appendChild(gridMainTitle);
DOMgrid.appendChild(gridContainer);

//Función que crea la grilla de productos
function createProductGrid(title, image, price, code) {
  // Tamaño de las card
  const cardWrap = document.createElement("div");
  cardWrap.classList.add("col-6", "col-md-3", "col-lg-2");

  //Card de producto
  const card = document.createElement("div");
  card.classList.add("card", "mb-3", "w-100");
  card.setAttribute("id", "card");
  card.style.height = "480px";

  //Imagen de la card
  const imageCard = document.createElement("img");
  imageCard.classList.add("card-img-top", "img-fluid");
  imageCard.style.maxHeight = "24rem";
  imageCard.src = image;
  imageCard.alt = title;

  //Cuerpo de la card
  const cardBody = document.createElement("div");
  cardBody.classList.add(
    "card-body",
    "d-flex",
    "flex-column",
    "justify-content-end"
  );

  //Titulo de la card
  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.innerText = title;

  //Precio de la card
  const cardPrice = document.createElement("p");
  cardPrice.classList.add("card-text", "mb-5");
  cardPrice.innerText = "$" + Intl.NumberFormat("es-CL").format(price);

  //boton de la card
  const btn = document.createElement("button");
  btn.classList.add("btn", "btn-primary", "mt-1");
  btn.setAttribute("onclick", `displayProductDetail(${code})`);
  btn.innerText = "Comprar";

  //Agregando elementos al DOM
  gridContainer.appendChild(cardWrap);
  cardWrap.appendChild(card);
  card.appendChild(imageCard);
  card.appendChild(cardBody);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardPrice);
  cardBody.appendChild(btn);

  //Mostrando solo elementos dentro del id #product-grid
  showStoreComponent("product-grid");
}

//Obteniendo los datos del array y creando la grilla de productos
productsData.map((product) =>
  createProductGrid(
    product.titleBook,
    product.cover,
    product.price,
    product.codeBook
  )
);
