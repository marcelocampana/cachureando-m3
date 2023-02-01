const detailMainTitle = document.createElement("h2");
detailMainTitle.setAttribute("id", "cart-main-title");
detailMainTitle.innerText = "Carrito de compra";
const cartSection = document.createElement("div");
cartSection.setAttribute("id", "cart-section");
const totalsSection = document.createElement("div");
totalsSection.setAttribute("id", "totals-section");
const shippingSection = document.createElement("div");
shippingSection.classList.add("d-flex", "justify-content-end");

function cartAction(codeBook, action) {
  cartSection.innerHTML = "";
  totalsSection.innerHTML = "";

  DOMcart.appendChild(detailMainTitle);
  DOMcart.appendChild(cartSection);
  DOMcart.appendChild(totalsSection);
  DOMcart.appendChild(shippingSection);

  const quantity = document.getElementById("quantity").value;
  action === "add" && addToCart(codeBook, quantity);
  action === "delete" && deleteFromCart(codeBook);
  action == "ship" && fetchDataforInvoice(arrayCart);
  action == "ship" && fetchCustomerData();
  //  action == "ship" && sendMail();

  const values = [];
  const quantities = [];
  arrayCart.length === 0
    ? emptyCart()
    : arrayCart.forEach((product) => {
        updateCart(
          product.codeBook,
          product.titleBook,
          product.cover,
          product.price,
          product.quantity
        );
        values.push(product.price * product.quantity);
        displayTotals(values);
        quantities.push(parseInt(product.quantity));
        productsInCart(quantities);
      });
}

function addToCart(codeBook, quantity) {
  const cart = productsData.filter((product) => product.codeBook == codeBook);
  arrayCart.push({ ...cart[0], quantity });
}

function deleteFromCart(codeBook) {
  arrayCart = arrayCart.filter((product) => product.codeBook != codeBook);
}
function emptyCart() {
  const emptyCartContainer = document.createElement("div");
  emptyCartContainer.classList.add("my-5", "text-center");
  const emptyCartMessage = document.createElement("div");
  const goToStore = document.createElement("a");
  goToStore.href = "index.html";
  const totalProducts = document.getElementById("products-in-cart");
  totalProducts.innerText = 0;

  goToStore.innerText = "Vuelve a la tienda para descubrir más productos!";
  emptyCartMessage.textContent = "El carrito está vacío :(";
  emptyCartMessage.classList.add("fs-3", "pt-5");
  cartSection.appendChild(emptyCartContainer);
  emptyCartContainer.appendChild(emptyCartMessage);
  emptyCartContainer.appendChild(goToStore);
}

function productsInCart(values) {
  console.log(values);
  let initialValue = 0;
  let total;
  if (values !== []) {
    total = values.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue
    );
  }
  console.log(values.length);

  const totalProducts = document.getElementById("products-in-cart");
  if (totalProducts) totalProducts.innerText = total;
}

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

  invoiceTotals = {
    neto,
    delivery,
    iva,
    total,
  };

  //cartWrap.textContent = "";
  updateTotalsArea(neto, delivery, iva, total);

  return invoiceTotals;
}

function updateCart(code, title, imageUrl, price, quantity) {
  const cartContainer = document.createElement("div");
  const cartWrap = document.createElement("div");
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
  cartImageCol.classList.add("col-md-1", "col-12", "text-center");
  const cartImage = document.createElement("img");
  cartImage.classList.add("img-fluid", "rounded-3");
  cartImage.src = imageUrl;
  cartImage.alt = title;
  //Titulo
  const cartTitleCol = document.createElement("div");
  cartTitleCol.classList.add("col-md-2", "col-12", "mt-md-0", "m-2");
  const cartTitle = document.createElement("div");
  cartTitle.classList.add("lead", "fw-normal");
  cartTitle.innerText = title;
  //Cantidad
  const cartQuantityCol = document.createElement("div");
  cartQuantityCol.classList.add("col-12", "col-md-1", "d-flex");
  const cartQuantity = document.createElement("div");
  cartQuantity.innerText = `${quantity} ${quantity == 1 ? "und." : "unds."}`;
  //Precio
  const cartPriceCol = document.createElement("div");
  cartPriceCol.classList.add("col-12", "col-md-2", "offset-1");
  const cartPrice = document.createElement("div");
  cartPrice.classList.add("mb-0");
  cartPrice.innerText = "$" + Intl.NumberFormat("es-CL").format(price);
  //Total
  const cartTotalCol = document.createElement("div");
  cartTotalCol.classList.add("col-md-2", "col-12", "offset-1");
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
  cartSection.appendChild(cartContainer);
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

function updateTotalsArea(neto, discount, iva, total) {
  totalsSection.innerHTML = "";

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

  totalsSection.appendChild(totalsContainer);
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
