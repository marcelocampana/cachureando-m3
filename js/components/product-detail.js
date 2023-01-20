/* ------------DETALLE DE PRODUCTO----------------------------------- */

//Creando componente detalle de producto
function createProductDetail(
  mainTitle,
  code,
  title,
  imageUrl,
  price,
  description
) {
  //Eliminar todo el contenido
  DOMdetail.textContent = "";

  const detailMainTitle = document.createElement("h1");
  detailMainTitle.classList.add("mb-5");
  detailMainTitle.innerText = mainTitle;
  //Div inicial
  const wrapDetail = document.createElement("div");
  wrapDetail.classList.add("col-6", "d-flex", "justify-content-center");
  //Imagen
  const imageDetail = document.createElement("img");
  imageDetail.src = imageUrl;
  imageDetail.alt = title;
  imageDetail.classList.add("h-75");
  //Cuerpo
  const bodyDetail = document.createElement("div");
  bodyDetail.classList.add("col-4", "mx-5");
  //Titulo
  const detailTitle = document.createElement("h1");
  detailTitle.setAttribute("name", code);
  detailTitle.innerText = title;
  //Descripcion
  const detailDescription = document.createElement("div");
  detailDescription.innerText = description;
  //Precio
  const detailPrice = document.createElement("h5");
  detailPrice.classList.add("text-left", "pt-4", "pb-4");
  detailPrice.innerText = "$" + Intl.NumberFormat("es-CL").format(price);
  //Disponibilidad
  const detailAvailability = document.createElement("h5");
  detailAvailability.classList.add("pb-4");
  detailAvailability.innerText = "Disponibilidad: en stock";
  //input de cantidad
  const detailQuantityTitle = document.createElement("h6");
  detailQuantityTitle.innerText = "Cantidad";
  const detailQuantityInput = document.createElement("input");
  detailQuantityInput.setAttribute("type", "number");
  detailQuantityInput.setAttribute("min", "1");
  detailQuantityInput.setAttribute("value", "1");
  detailQuantityInput.setAttribute("id", "quantity");
  //Boton enviar al carrito
  const detailSendToCartBtn = document.createElement("button");
  detailSendToCartBtn.classList.add(
    "btn",
    "btn-primary",
    "btn-lg",
    "mt-3",
    "d-flex",
    "justify-content-end"
  );

  detailSendToCartBtn.setAttribute("onclick", `cartAction(${code},'add' )`);
  detailSendToCartBtn.innerText = "Agregar al Carrito";
  //Boton continuar comprando
  const detailBtnBack = document.createElement("button");
  detailBtnBack.setAttribute("type", "button");
  detailBtnBack.setAttribute("onclick", "showStoreComponent('product-grid')");
  detailBtnBack.classList.add("btn", "btn-outline-primary", "mt-5");
  detailBtnBack.innerText = "Continuar comprando";

  //Agregando elementos al DOM
  DOMdetail.appendChild(detailMainTitle);
  DOMdetail.appendChild(wrapDetail);
  wrapDetail.appendChild(imageDetail);
  DOMdetail.appendChild(bodyDetail);
  bodyDetail.appendChild(detailTitle);
  bodyDetail.appendChild(detailDescription);
  bodyDetail.appendChild(detailPrice);
  bodyDetail.appendChild(detailQuantityTitle);
  bodyDetail.appendChild(detailQuantityInput);
  bodyDetail.appendChild(detailSendToCartBtn);
  bodyDetail.appendChild(detailBtnBack);
}

//mostrar el producto seleccionado
function displayProductDetail(codeBook) {
  const productSelected = productsData.filter(
    (product) => product.codeBook == codeBook
  );

  createProductDetail(
    "Detalle del producto",
    productSelected[0].codeBook,
    productSelected[0].titleBook,
    productSelected[0].cover,
    productSelected[0].price,
    productSelected[0].description
  );
  showStoreComponent("product-detail");
}
