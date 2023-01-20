//Variables globales
const DOMgrid = document.getElementById("product-grid");
const DOMdetail = document.getElementById("product-detail");
const DOMcart = document.getElementById("product-cart");
const DomTotalsArea = document.getElementById("product-totals");
const cartWrap = document.createElement("div");
const templateContainer = document.getElementById("template-container");
templateContainer.classList.add("my-5", "mx-auto", "container");
/*Modal */
const DOMmodal = document.getElementById("btn-modal");
let arrayCart = [];
let invoiceTotals = {};

/* ------------FUNCION PARA MOSTRAR/OCULTAR ----------------------------------- */

//Mostrar/ocultar elementos de asociados al id #product-grid, #product-detail o #product-cart
function showStoreComponent(component) {
  document.getElementById("product-grid").className =
    component === "product-grid" ? "" : "d-none";
  document.getElementById("product-detail").className =
    component === "product-detail" ? "row" : "d-none";
  document.getElementById("product-cart").className =
    component === "product-cart" ? "row" : "d-none";
  document.getElementById("btn-modal").className =
    component === "product-cart" ? "d-flex justify-content-end me-5" : "d-none";
  document.getElementById("product-totals").className =
    component === "product-cart" ? "d-flex justify-content-end me-5" : "d-none";
  document.getElementById("product-cart-msg").className =
    component === "product-cart" ? "text-center" : "d-none";
  document.getElementById("product-cart-title").className =
    component === "product-cart" ? "" : "d-none";
}
