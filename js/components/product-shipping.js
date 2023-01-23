//------------Formulario del modal ----------------------

// Form
const form = document.createElement("form");
form.onsubmit = prev;
//Div inicial
const initialContainer = document.createElement("div");
initialContainer.innerText = "Ingresa tu email";
initialContainer.classList.add("col-6", "d-flex", "justify-content-center");
// titulo
const divTitle = document.createElement("div");
divTitle.classList.add("mb-4");
const tittleEmail = document.createElement("h4");
tittleEmail.innerText = "Datos para el envio";
tittleEmail.classList.add("col-6", "d-flex", "justify-content-center");

//  direccion -
const divDireccion = document.createElement("div");
divDireccion.classList.add("mb-3");
const inputDirecccion = document.createElement("input");
inputDirecccion.setAttribute("id", "customer-address");
inputDirecccion.classList.add("form-control");
inputDirecccion.setAttribute("placeholder", "Ingresa tu direccion");
inputDirecccion.setAttribute("required", "true");

// comuna-
const divComuna = document.createElement("div");
divComuna.classList.add("mb-3");
const inputComuna = document.createElement("input");
inputComuna.setAttribute("id", "customer-comuna");
inputComuna.classList.add("form-control");
inputComuna.setAttribute("placeholder", "Ingresa tu comuna");
inputComuna.setAttribute("required", "true");
// region-
const divRegion = document.createElement("div");
divRegion.classList.add("mb-3");
const inputRegion = document.createElement("input");
inputRegion.setAttribute("id", "customer-region");
inputRegion.classList.add("form-control");
inputRegion.setAttribute("placeholder", "Ingresa tu region");
inputRegion.setAttribute("required", "true");

// nombre receptor-
const divNombre = document.createElement("div");
divNombre.classList.add("mb-3");
const inputNombre = document.createElement("input");
//inputNombre.attributes.required = "required";
inputNombre.setAttribute("id", "customer-name");
inputNombre.classList.add("form-control");
inputNombre.setAttribute("placeholder", "Ingresa tu nombre");
inputNombre.setAttribute("required", "true");

// Correo electronico
const divEmail = document.createElement("div");
divEmail.classList.add("mb-3");
const inputEmail = document.createElement("input");
inputEmail.setAttribute("id", "customer-email");
inputEmail.classList.add("form-control", "type=email");
inputEmail.setAttribute("placeholder", "Ingresa tu email");
inputEmail.setAttribute("required", "true");
inputEmail.setAttribute("type", "email");
// button
const buttonEmail = document.createElement("button");
// buttonEmail.setAttribute("onclick", "cartAction(0,0)");
buttonEmail.setAttribute("type", "submit");
buttonEmail.classList.add("btn", "btn-primary");
buttonEmail.innerText = "Enviar";

//Agregando elementos al DOM

form.appendChild(divTitle);
divTitle.appendChild(tittleEmail);
form.appendChild(divNombre);
divNombre.appendChild(inputNombre);
form.appendChild(divEmail);
divEmail.appendChild(inputEmail);
form.appendChild(divDireccion);
divDireccion.appendChild(inputDirecccion);
form.appendChild(divComuna);
divComuna.appendChild(inputComuna);
form.appendChild(divRegion);
divRegion.appendChild(inputRegion);
form.appendChild(buttonEmail);

// -----------------MODAL------------------------------------

const buttonModal = document.createElement("button");
buttonModal.classList.add("btn", "btn-primary", "w-25");

const shipBtnBack = document.createElement("button");
shipBtnBack.setAttribute("type", "button");
shipBtnBack.setAttribute("onclick", "showStoreComponent('product-grid')");
shipBtnBack.classList.add("btn", "btn-outline-primary", "me-2");
shipBtnBack.innerText = "Continuar comprando";

buttonModal.textContent = "Finalizar la Compra";
buttonModal.setAttribute("type", "button");
buttonModal.setAttribute("id", "button-modal");
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

//Agregando elementos al DOMshipBtnBack
shippingSection.appendChild(shipBtnBack);
shippingSection.appendChild(buttonModal);
shippingSection.appendChild(divModal);
divModal.appendChild(divModalDialog);
divModalDialog.appendChild(divModalContent);
divModalContent.appendChild(divModalHeader);
divModalHeader.appendChild(buttonClose);
divModalHeader.appendChild(divModalTitle);
divModalContent.appendChild(divModalBody);
divModalBody.appendChild(form);
divModalContent.appendChild(divModalFooter);

function prev(e) {
  e.preventDefault();
  cartAction(0, "ship");
}
