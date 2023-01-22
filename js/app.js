//DOM Sections
const templateContainer = document.getElementById("template-container");
templateContainer.classList.add("my-5", "mx-auto", "container");
const DOMgrid = document.getElementById("product-grid");
const DOMdetail = document.getElementById("product-detail");
const DOMcart = document.getElementById("product-cart");
//const cartWrap = document.createElement("div");

/*Modal */
//const DOMmodal = document.getElementById("btn-modal");
let arrayCart = [];
let invoiceTotals = {};

/* ------------FUNCION PARA MOSTRAR/OCULTAR ----------------------------------- */

//Mostrar/ocultar componentes
function showStoreComponent(component) {
  document.getElementById("product-grid").className =
    component === "product-grid" ? "" : "d-none";
  document.getElementById("product-detail").className =
    component === "product-detail" ? "row" : "d-none";
  document.getElementById("product-cart").className =
    component === "product-cart" ? "row" : "d-none";
}
