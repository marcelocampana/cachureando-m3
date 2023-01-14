const DOMgrid = document.getElementById("product-grid");

function createProductGrid(title, image, price, code) {
  // Tamano de las card
  const wrap = document.createElement("div");

  //Card de producto
  const card = document.createElement("div");
  card.setAttribute("id", "card");
  card.style.height = "480px";

  //Imagen de la card
  const imageCard = document.createElement("img");
  imageCard.style.maxHeight = "24rem";
  imageCard.src = image;
  imageCard.alt = title;

  //Cuerpo de la card
  const cardBody = document.createElement("div");

  //Titulo de la card
  const cardTitle = document.createElement("h5");
  cardTitle.innerText = title;

  //Precio de la card
  const cardPrice = document.createElement("p");
  cardPrice.innerText = `$${price}`;

  //boton de la card
  const btn = document.createElement("button");
  btn.setAttribute("onclick", `showDetail(${code})`);
  btn.innerText = "Comprar";

  //agregando elementos al DOM y asignadoles clases
  DOMgrid.appendChild(wrap).className = "col-6 col-md-3 col-lg-2";
  wrap.appendChild(card).className = "card  mb-3 w-100";
  card.appendChild(imageCard).className = "card-img-top img-fluid";
  card.appendChild(cardBody).className = "card-body";
  cardBody.appendChild(cardTitle).className = "card-title";
  cardBody.appendChild(cardPrice).className = "card-text";
  cardBody.appendChild(btn).className = "btn btn-primary";
}

const productGrid = productsData.map((product) =>
  createProductGrid(
    product.titleBook,
    product.cover,
    product.price,
    product.codeBook
  )
);
