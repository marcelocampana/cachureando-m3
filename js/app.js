//Variables globales
const DOMgrid = document.getElementById("product-grid");
const DOMdetail = document.getElementById("product-detail");
const DOMcart = document.getElementById("product-cart");
const DOMForm = document.getElementById("form");
const DomTotalsArea = document.getElementById("product-totals");
const cartWrap = document.createElement("div");
let arrayCart = [];

/* ------------GRILLA DE PRODUCTOS----------------------------------- */

function createProductGrid(title, image, price, code) {
  // Tamaño de las card
  const wrap = document.createElement("div");
  wrap.classList.add("col-6", "col-md-3", "col-lg-2");

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
  cardBody.classList.add("card-body");

  //Titulo de la card
  const cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.innerText = title;

  //Precio de la card
  const cardPrice = document.createElement("p");
  cardPrice.classList.add("card-text");
  cardPrice.innerText = "$" + Intl.NumberFormat("es-CL").format(price);

  //boton de la card
  const btn = document.createElement("button");
  btn.classList.add("btn", "btn-primary");
  btn.setAttribute("onclick", `displayProductDetail(${code})`);
  btn.innerText = "Comprar";

  //Agregando elementos al DOM
  DOMgrid.appendChild(wrap);
  wrap.appendChild(card);
  card.appendChild(imageCard);
  card.appendChild(cardBody);
  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardPrice);
  cardBody.appendChild(btn);

  //Mostrando solo elementos dentro del id #product-grid
  showStoreComponent("product-grid");
}

const productGrid = productsData.map((product) =>
  createProductGrid(
    product.titleBook,
    product.cover,
    product.price,
    product.codeBook
  )
);

/* ------------DETALLE DE PRODUCTO----------------------------------- */

//Creando componente detalle de producto
function createProductDetail(code, title, imageUrl, price, description) {
  //Eliminar todo el contenido
  DOMdetail.textContent = "";
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
    productSelected[0].codeBook,
    productSelected[0].titleBook,
    productSelected[0].cover,
    productSelected[0].price,
    productSelected[0].description
  );
  showStoreComponent("product-detail");
}

/* ------------CARRITO DE COMPRA----------------------------------- */

function createProductCart(code, title, imageUrl, price, quantity) {
  //Container de cada producto agregado al carrito(este elemento contiene el #id )
  cartWrap.classList.add("container", "h-100", "py-1");
  const cartContainer = document.createElement("div");
  cartContainer.classList.add(
    "row",
    "d-flex",
    "justify-content-center",
    "align-items-center",
    "h-100"
  );
  //contruyendo la card de cada producto del carrito
  const cartCard = document.createElement("div");
  cartCard.classList.add("card", "rounded-3", "mb-1");
  const cartCardBody = document.createElement("div");
  cartCardBody.classList.add("card-body", "p-3");
  const cartCardBodyRow = document.createElement("div");
  cartCardBodyRow.classList.add(
    "row",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  //Imagen
  const cartImageCol = document.createElement("div");
  cartImageCol.classList.add("col-1");
  const cartImage = document.createElement("img");
  cartImage.classList.add("img-fluid", "rounded-3");
  cartImage.src = imageUrl;
  cartImage.alt = title;
  //Titulo
  const cartTitleCol = document.createElement("div");
  cartTitleCol.classList.add("col-2");
  const cartTitle = document.createElement("div");
  cartTitle.classList.add("lead", "fw-normal");
  cartTitle.innerText = title;
  //Cantidad
  const cartQuantityCol = document.createElement("div");
  cartQuantityCol.classList.add("col-1", "d-flex");
  const cartQuantity = document.createElement("div");
  cartQuantity.innerText = quantity;
  //Precio
  const cartPriceCol = document.createElement("div");
  cartPriceCol.classList.add("col-2", "offset-1");
  const cartPrice = document.createElement("div");
  cartPrice.classList.add("mb-0");
  cartPrice.innerText = "$" + Intl.NumberFormat("es-CL").format(price);
  //Total
  const cartTotalCol = document.createElement("div");
  cartTotalCol.classList.add("col-2", "offset-1");
  const cartTotal = document.createElement("div");
  cartTotal.classList.add("mb-0");
  cartTotal.innerText =
    "$" + Intl.NumberFormat("es-CL").format(price * quantity);
  const cartBtnDeleteCol = document.createElement("div");
  //Boton eliminar (Elimina un producto del carrito llamando a la funcion deleteProductFromCard())
  cartBtnDeleteCol.classList.add(
    "col-md-1",
    "col-lg-1",
    "col-xl-1",
    "text-end"
  );
  const cartBtnDelete = document.createElement("button");
  cartBtnDelete.setAttribute("onclick", `cartAction( ${code},'delete' )`);
  cartBtnDelete.classList.add(
    "text-danger",
    "fs-6",
    "bg-transparent",
    "border-0"
  );
  cartBtnDelete.innerText = "Eliminar";

  //Agregando elementos al DOM
  DOMcart.appendChild(cartContainer);

  cartContainer.appendChild(cartWrap);
  cartWrap.appendChild(cartCard);
  cartCard.appendChild(cartCardBody);
  cartCardBody.appendChild(cartCardBodyRow);
  cartCardBodyRow.appendChild(cartImageCol);
  cartImageCol.appendChild(cartImage);
  cartCardBodyRow.appendChild(cartTitleCol);
  cartTitleCol.appendChild(cartTitle);
  cartCardBodyRow.appendChild(cartQuantityCol);
  cartQuantityCol.appendChild(cartQuantity);
  cartCardBodyRow.appendChild(cartPriceCol);
  cartPriceCol.appendChild(cartPrice);
  cartCardBodyRow.appendChild(cartTotalCol);
  cartTotalCol.appendChild(cartTotal);
  cartCardBodyRow.appendChild(cartBtnDeleteCol);
  cartBtnDeleteCol.appendChild(cartBtnDelete);
  showStoreComponent("product-cart");
}

function totalsArea(neto, discount, iva, total) {
  const totalsContainer = document.createElement("div");
  totalsContainer.classList.add("d-flex", "justify-content-end", "p-5");
  const totalsLabelsContainer = document.createElement("div");
  totalsLabelsContainer.classList.add("me-5", "fw-bold");
  const totalsLabelNeto = document.createElement("div");
  totalsLabelNeto.innerText = "Neto";
  const totalsLabelIva = document.createElement("div");
  totalsLabelIva.innerText = "IVA";
  const totalsLabelDelivery = document.createElement("div");
  totalsLabelDelivery.innerText = "Cargo por despacho (5%)";
  const totalsLabelTotal = document.createElement("div");
  totalsLabelTotal.innerText = "TOTAL";

  const totalsValuesContainer = document.createElement("div");
  totalsValuesContainer.classList.add("text-end");
  const totalsNeto = document.createElement("div");
  totalsNeto.innerText = "$" + Intl.NumberFormat("es-CL").format(neto);
  const totalsIVA = document.createElement("div");
  totalsIVA.innerText = "$" + Intl.NumberFormat("es-CL").format(iva);
  const totalsDelivery = document.createElement("div");
  totalsDelivery.innerText = "$" + Intl.NumberFormat("es-CL").format(discount);
  const totalsTotal = document.createElement("div");
  totalsTotal.classList.add("fw-bold");
  totalsTotal.innerText = "$" + Intl.NumberFormat("es-CL").format(total);

  //Agregando elementos al DOM

  DomTotalsArea.appendChild(totalsContainer);

  totalsContainer.appendChild(totalsLabelsContainer);
  totalsLabelsContainer.appendChild(totalsLabelNeto);
  totalsLabelsContainer.appendChild(totalsLabelDelivery);
  totalsLabelsContainer.appendChild(totalsLabelIva);
  totalsLabelsContainer.appendChild(totalsLabelTotal);

  totalsContainer.appendChild(totalsValuesContainer);
  totalsValuesContainer.appendChild(totalsNeto);
  totalsValuesContainer.appendChild(totalsDelivery);
  totalsValuesContainer.appendChild(totalsIVA);
  totalsValuesContainer.appendChild(totalsTotal);
}

//Agregar/eliminar producto al carrito
function cartAction(codeBook, action) {
  const quantity = document.getElementById("quantity").value;
  const values = [];
  if (action === "add") {
    const cart = productsData.filter((product) => product.codeBook == codeBook);
    arrayCart.push({ ...cart[0], quantity });
  }
  if (action === "delete") {
    arrayCart = arrayCart.filter((product) => product.codeBook != codeBook);
  }

  cartWrap.textContent = "";
  arrayCart.forEach((product) => {
    createProductCart(
      product.codeBook,
      product.titleBook,
      product.cover,
      product.price,
      product.quantity
    );
    values.push(product.price * product.quantity);
    displayTotals(values);
  });
  DomTotalsArea.style.display = arrayCart.length === 0 ? "none" : "block";
}

//obtener la sumatoria del total de cada producto agregado al carrito y entlces calcular el iva y total

function displayTotals(values) {
  console.log(values);
  let initialValue = 0;
  let total;
  if (values !== []) {
    total = values.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
  }
  const neto = Math.round(total / 1.19);
  const delivery = total < 100000 ? Math.round((neto * 0.5) / 10) : 0;
  const iva = Math.round(((neto + delivery) * 19) / 100);

  DomTotalsArea.textContent = "";
  totalsArea(neto, delivery, iva, total);
}

/* ------------FUNCION PARA MOSTRAR/OCULTAR ----------------------------------- */

//Mostrar/ocultar elementos de asociados al id #product-grid, #product-detail o #product-cart
function showStoreComponent(component) {
  document.getElementById("product-grid").className =
    component === "product-grid" ? "row" : "d-none";
  document.getElementById("product-detail").className =
    component === "product-detail" ? "row" : "d-none";
  document.getElementById("product-cart").className =
    component === "product-cart" ? "row" : "d-none";
}
/* ------------Formulario ----------------------------------- */

// Form
const form = document.createElement("form");
//Div inicial
const initialContainer = document.createElement("div");
initialContainer.innerText= "Ingresa tu email"
initialContainer.classList.add("col-6", "d-flex", "justify-content-center", );
// titulo
const tittleEmail = document.createElement("h1");
tittleEmail.classList.add("col-6", );

//  direccion -
const divDireccion = document.createElement("div");
divDireccion.classList.add("mb-3");
const inputDirecccion = document.createElement("input");
inputDirecccion.classList.add("form-control");
inputDirecccion.setAttribute("placeholder", "Ingresa tu direccion")

// comuna-
const divComuna = document.createElement("div");
divComuna.classList.add("mb-3");
const inputComuna = document.createElement("input");
inputComuna.classList.add("form-control");
inputComuna.setAttribute("placeholder", "Ingresa tu comuna")
// region-
const divRegion = document.createElement("div");
divRegion.classList.add("mb-3");
const inputRegion = document.createElement("input");
inputRegion.classList.add("form-control");
inputRegion.setAttribute("placeholder", "Ingresa tu region");

// nombre receptor-
const divNombre = document.createElement("div");
divNombre.classList.add("mb-3");
const inputNombre = document.createElement("input");
inputNombre.classList.add("form-control");
inputNombre.setAttribute("placeholder", "Ingresa tu nombre");

// Correo electronico
const divEmail = document.createElement("div");
divEmail.classList.add("mb-3");
const inputEmail = document.createElement("input");
inputEmail.classList.add("form-control","type=email");
inputEmail.setAttribute("placeholder", "Ingresa tu email")
// button
const butonEmail = document.createElement("button");
butonEmail.classList.add("btn", "btn-primary");
butonEmail.innerText = "Enviar"
//Agregando elementos al DOM
DOMForm.appendChild(form)
form.appendChild(tittleEmail);
form.appendChild(divDireccion);
divDireccion.appendChild(inputDirecccion);
form.appendChild(divComuna);
divComuna.appendChild(inputComuna);
form.appendChild(divRegion);
divRegion.appendChild(inputRegion);
form.appendChild(divNombre);
divNombre.appendChild(inputNombre);
form.appendChild(divEmail);
divEmail.appendChild(inputEmail);
form.appendChild(butonEmail);

