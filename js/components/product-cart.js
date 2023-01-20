/* ------------CARRITO DE COMPRA----------------------------------- */

const detailMainTitleWrap = document.getElementById("product-cart-title");
const detailMainTitle = document.createElement("h2");
detailMainTitle.innerText = "Carrito";
detailMainTitleWrap.appendChild(detailMainTitle);

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
  //Boton eliminar (Elimina un producto del carrito llamando a la funcion deleteProductFromCard())

  const cartIconDelete = document.createElement("i");
  cartIconDelete.classList.add("fa-solid", "fa-trash-can", "text-danger");
  cartIconDelete.style.cursor = "pointer";
  cartIconDelete.setAttribute("onclick", `cartAction( ${code},'delete' )`);
  const cartBtnDeleteCol = document.createElement("div");
  //Boton eliminar (Elimina un producto del carrito llamando a la funcion deleteProductFromCard())
  cartBtnDeleteCol.classList.add(
    "col-md-1",
    "col-lg-1",
    "col-xl-1",
    "text-end"
  );
  const cartBtnDelete = document.createElement("button");
  cartBtnDelete.classList.add(
    "text-danger",
    "fs-6",
    "bg-transparent",
    "border-0"
  );
  cartBtnDelete.innerHTML = cartIconDelete;

  //
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
  cartBtnDeleteCol.appendChild(cartIconDelete);
  showStoreComponent("product-cart");
}

//Agregar/eliminar producto al carrito
function cartAction(codeBook, action) {
  const msg = document.createElement("h1");
  msg.style.height = "200px";

  const productMsg = document.getElementById("product-cart-msg");
  productMsg.classList.add("text-center", "pt-5");

  const quantity = document.getElementById("quantity").value;
  const values = [];
  if (action === "add") {
    const cart = productsData.filter((product) => product.codeBook == codeBook);
    console.log(cart);
    arrayCart.push({ ...cart[0], quantity });
    createModal();

    productMsg.textContent = "";
  }
  if (action === "delete") {
    arrayCart = arrayCart.filter((product) => product.codeBook != codeBook);

    DomTotalsArea.textContent = "";
    if (arrayCart.length === 0) {
      DOMmodal.innerHTML = "";
      msg.classList.add("p-5");
      msg.innerText = "El carrito está vacío :(";
      productMsg.appendChild(msg);
    } else {
      createModal();
    }
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
}

//-------TOTALES----------------

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

//Obtener la sumatoria del total de cada producto agregado al carrito y entonces calcular el neto costo de despacho, iva  y total
function displayTotals(values) {
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

/* ---------------- BOLETA--------------------------------- */
//------------Formulario para boleta ----------------------

// Form
const form = document.createElement("form");
//Div inicial
const initialContainer = document.createElement("div");
initialContainer.innerText = "Ingresa tu email";
initialContainer.classList.add("col-6", "d-flex", "justify-content-center");
// titulo
const tittleEmail = document.createElement("h1");
tittleEmail.classList.add("col-6");

//  direccion -
const divDireccion = document.createElement("div");
divDireccion.classList.add("mb-3");
const inputDirecccion = document.createElement("input");
inputDirecccion.classList.add("form-control");
inputDirecccion.setAttribute("placeholder", "Ingresa tu direccion");

// comuna-
const divComuna = document.createElement("div");
divComuna.classList.add("mb-3");
const inputComuna = document.createElement("input");
inputComuna.classList.add("form-control");
inputComuna.setAttribute("placeholder", "Ingresa tu comuna");
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
inputEmail.classList.add("form-control", "type=email");
inputEmail.setAttribute("placeholder", "Ingresa tu email");
// button
const butonEmail = document.createElement("button");
butonEmail.classList.add("btn", "btn-primary");
butonEmail.innerText = "Enviar";

//Agregando elementos al DOM

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

// -----------------MODAL------------------------------------

const buttonModal = document.createElement("button");
buttonModal.classList.add("btn", "btn-primary", "w-25");

buttonModal.textContent = "Completar la Compra";
buttonModal.setAttribute("type", "button");
buttonModal.setAttribute("data-bs-toggle", "modal");
buttonModal.setAttribute("data-bs-target", "#staticBackdrop");

const divModal = document.createElement("div");
divModal.classList.add("modal", "fade");
divModal.setAttribute("id", "staticBackdrop");
divModal.setAttribute("data-bs-backdrop", "static");
divModal.setAttribute("data-bs-keyboard", "false");
divModal.setAttribute("tabindex", "-1");
divModal.setAttribute("data-bs-aria-labelledby", "staticBackdropLabel");
divModal.setAttribute("aria-hidden", "true");

const divModalDialog = document.createElement("div");
divModalDialog.classList.add("modal-dialog");

const divModalContent = document.createElement("div");
divModalContent.classList.add("modal-content");

const divModalHeader = document.createElement("div");
divModalHeader.classList.add("modal-header");

const divModalTitle = document.createElement("h1");
divModalTitle.classList.add("modal-title");
divModalTitle.setAttribute("id", "staticBackdropLabel");

const buttonClose = document.createElement("button");
buttonClose.setAttribute("type", "button");
buttonClose.classList.add("btn-close");
buttonClose.setAttribute("data-bs-dismiss", "modal");
buttonClose.setAttribute("aria-label", "Close");

const divModalBody = document.createElement("div");
divModalBody.classList.add("modal-body");

const divModalFooter = document.createElement("div");
divModalFooter.classList.add("modal-footer");

const buttonCloseFooter = document.createElement("button");
buttonCloseFooter.setAttribute("type", "button");
buttonCloseFooter.classList.add("btn", "btn-danger");
buttonCloseFooter.setAttribute("data-bs-dismiss", "modal");
buttonCloseFooter.textContent = "Cerrar";

const buttonSendFooter = document.createElement("button");
buttonSendFooter.classList.add("btn", "btn-primary");
buttonSendFooter.textContent = "Enviar";

//Agregando elementos al DOM
function createModal() {
  DOMmodal.appendChild(buttonModal);
  DOMmodal.appendChild(divModal);
  divModal.appendChild(divModalDialog);
  divModalDialog.appendChild(divModalContent);
  divModalContent.appendChild(divModalHeader);
  divModalHeader.appendChild(buttonClose);
  divModalHeader.appendChild(divModalTitle);
  divModalContent.appendChild(divModalBody);
  divModalBody.appendChild(form);
  divModalContent.appendChild(divModalFooter);
}

createModal();
