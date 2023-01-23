function fetchDataforInvoice(array) {
  let productsIntoCart = [];

  let values = [];
  array.forEach((product) => {
    productsIntoCart.push(product);
    values.push(product.price * product.quantity);
    console.log(values);

    createInvoice(
      productsIntoCart,
      displayTotals(values).neto,
      displayTotals(values).delivery,
      displayTotals(values).iva,
      displayTotals(values).total,
      fetchCustomerData()
    );
  });
}

function fetchCustomerData() {
  const customerName = document.getElementById("customer-name").value;
  const customerEmail = document.getElementById("customer-email").value;
  const customerComuna = document.getElementById("customer-comuna").value;
  const customerAddress = document.getElementById("customer-address").value;
  const customerRegion = document.getElementById("customer-region").value;

  const customerData = {
    customerName,
    customerEmail,
    customerComuna,
    customerAddress,
    customerRegion,
  };

  console.log(customerData);
  return customerData;
}

function createInvoice(products, neto, iva, delivery, total, customerData) {
  const invoiceContainer = document.createElement("div");
  invoiceContainer.classList.add("border", "p-5");

  //Creando Encabezado
  const invoiceMainTitle = document.createElement("h1");
  const cutName = customerData.customerName.split(" ");
  var firstName = cutName[0];
  invoiceMainTitle.innerText = `Gracias ${firstName}!`;
  const invoiceMainMessage = document.createElement("h5");
  invoiceMainMessage.classList.add("mb-3");
  invoiceMainMessage.innerText = `Hemos enviado una copia de tu boleta al correo electronico ${customerData.customerEmail} `;
  //Creando Productos
  const invoiceTitleProducts = document.createElement("h4");
  invoiceTitleProducts.innerText = "Productos solicitados";
  invoiceTitleProducts.classList.add("mt-5");
  const invoiceRowProducts = document.createElement("div");
  invoiceRowProducts.classList.add("row", "pb-3");
  //Creando totales
  const invoiceRowTotals = document.createElement("div");
  invoiceRowTotals.classList.add("d-flex", "justify-content-end");
  //Totales Etiquetas
  const invoiceRowTotalsLabels = document.createElement("div");
  invoiceRowTotalsLabels.classList.add("col-3");
  const invoiceLabelNeto = document.createElement("div");
  invoiceLabelNeto.classList.add("fw-bold");
  invoiceLabelNeto.innerText = "Neto";
  const invoiceLabelDelivery = document.createElement("div");
  invoiceLabelDelivery.classList.add("fw-bold");
  invoiceLabelDelivery.innerText = "Cargo por envío";
  const invoiceLabelIva = document.createElement("div");
  invoiceLabelIva.classList.add("fw-bold");
  invoiceLabelIva.innerText = "IVA";
  const invoiceLabelTotal = document.createElement("div");
  invoiceLabelTotal.innerText = "Total";
  invoiceLabelTotal.classList.add("fw-bold");
  const invoiceRowTotalsTotals = document.createElement("div");
  invoiceRowTotalsTotals.classList.add("col-3");
  const invoiceNeto = document.createElement("div");
  invoiceNeto.classList.add("ps-1");
  invoiceNeto.innerText = "$" + Intl.NumberFormat("es-CL").format(neto);
  const invoiceDelivery = document.createElement("div");
  invoiceDelivery.classList.add("ps-1");
  invoiceDelivery.innerText = "$" + Intl.NumberFormat("es-CL").format(delivery);
  const invoiceIva = document.createElement("div");
  invoiceIva.classList.add("ps-1");
  invoiceIva.innerText = "$" + Intl.NumberFormat("es-CL").format(iva);
  const invoiceTotal = document.createElement("div");
  invoiceTotal.classList.add("ps-1");
  invoiceTotal.innerText = "$" + Intl.NumberFormat("es-CL").format(total);

  //Creando Datos del cliente
  const invoiceMainTitleCustomer = document.createElement("h4");
  invoiceMainTitleCustomer.innerText = "Datos para el envio";
  invoiceMainTitleCustomer.classList.add("mt-4");
  const invoiceRowCustomerData = document.createElement("div");
  invoiceRowCustomerData.classList.add("d-flex");
  //Creando Datos del cliente - Etiquetas
  const invoiceCustomerLabels = document.createElement("div");
  const invoiceCustomerLabelName = document.createElement("div");
  invoiceCustomerLabelName.innerText = "Nombre";
  invoiceCustomerLabelName.classList.add("fw-bold", "me-2");
  const invoiceCustomerLabelEmail = document.createElement("div");
  invoiceCustomerLabelEmail.classList.add("fw-bold", "me-2");
  invoiceCustomerLabelEmail.innerText = "Email";
  const invoiceCustomerLabelAddress = document.createElement("div");
  invoiceCustomerLabelAddress.classList.add("fw-bold", "me-2");
  invoiceCustomerLabelAddress.innerText = "Direccion";
  const invoiceCustomerLabelComuna = document.createElement("div");
  invoiceCustomerLabelComuna.classList.add("fw-bold", "me-2");
  invoiceCustomerLabelComuna.innerText = "Comuna";
  const invoiceCustomerLabelRegion = document.createElement("div");
  invoiceCustomerLabelRegion.classList.add("fw-bold", "me-2");
  invoiceCustomerLabelRegion.innerText = "Region";
  //Creando Datos del cliente - Datos
  const invoiceCustomerData = document.createElement("div");
  const invoiceCustomerName = document.createElement("div");
  invoiceCustomerName.innerText = customerData.customerName;
  const invoiceCustomerEmail = document.createElement("div");
  invoiceCustomerEmail.innerText = customerData.customerEmail;
  const invoiceCustomerAddress = document.createElement("div");
  invoiceCustomerAddress.innerText = customerData.customerAddress;
  const invoiceCustomerComuna = document.createElement("div");
  invoiceCustomerComuna.innerText = customerData.customerComuna;
  const invoiceCustomerRegion = document.createElement("div");
  invoiceCustomerRegion.innerText = customerData.customerRegion;

  //Creando Datos Bancarios
  //Creando Datos Bancarios - Encabezado
  const invoiceTitleBank = document.createElement("h4");
  invoiceTitleBank.innerText = "Datos para el pago";
  invoiceTitleBank.classList.add("mt-5");
  const invoiceRowBank = document.createElement("div");
  invoiceRowBank.classList.add("d-flex");
  //Creando Datos Bancarios - Etiquetas
  const invoiceBankLabels = document.createElement("div");
  const invoiceBankAccountLabel = document.createElement("div");
  invoiceBankAccountLabel.classList.add("fw-bold", "me-2");
  invoiceBankAccountLabel.innerHTML = "Cuenta corriente";
  const invoiceBankBankLabel = document.createElement("div");
  invoiceBankBankLabel.classList.add("fw-bold", "me-2");
  invoiceBankBankLabel.innerHTML = "Banco";
  const invoiceBankNameLabel = document.createElement("div");
  invoiceBankNameLabel.classList.add("fw-bold", "me-2");
  invoiceBankNameLabel.innerHTML = "A nombre de";
  const invoiceBankEmailLabel = document.createElement("div");
  invoiceBankEmailLabel.classList.add("fw-bold", "me-2");
  invoiceBankEmailLabel.innerHTML = "Email";
  //Creando Datos Bancarios - Data
  const invoiceBankData = document.createElement("div");
  const invoiceBankAccount = document.createElement("div");
  invoiceBankAccount.innerText = "999-786-3410";
  const invoiceBankBank = document.createElement("div");
  invoiceBankBank.innerText = "Banco de Chile";
  const invoiceBankName = document.createElement("div");
  invoiceBankName.innerHTML = "Cachureando Books";
  const invoiceBankEmail = document.createElement("div");
  invoiceBankEmail.innerText = "pagos@cachureando.cl";

  //Creando enlace para volver a la tienda
  const footerInvoice = document.createElement("div");
  footerInvoice.classList.add("text-center", "w-100", "mt-4");
  const goToHome = document.createElement("a");
  goToHome.classList.add("pt-5");
  goToHome.href = "/index.html";
  goToHome.innerText = "Volver a la tienda";

  // -------Agregando datos al DOM  ------------
  const DOMinvoice = document.getElementById("invoice");
  DOMinvoice.classList.add("mx-auto", "w-75");
  DOMinvoice.innerText = "";
  DOMinvoice.appendChild(invoiceContainer);
  invoiceContainer.appendChild(invoiceMainTitle);
  invoiceContainer.appendChild(invoiceMainMessage);
  invoiceContainer.appendChild(invoiceTitleProducts);
  invoiceContainer.appendChild(invoiceRowProducts);

  //Agregando Productos
  products.forEach((product) => {
    const invoiceProductCode = document.createElement("div");
    invoiceProductCode.classList.add("col-2");
    const invoiceProductTitle = document.createElement("div");
    invoiceProductTitle.classList.add("col-4");
    const invoiceProductQuantity = document.createElement("div");
    invoiceProductQuantity.classList.add("col-3");
    const invoiceProductPrice = document.createElement("div");
    invoiceProductPrice.classList.add("col-3", "p-0");

    invoiceProductCode.innerText = `ID${product.codeBook}`;
    invoiceProductTitle.innerText = product.titleBook;
    invoiceProductQuantity.innerText = product.quantity;
    invoiceProductPrice.innerText =
      "$" + Intl.NumberFormat("es-CL").format(product.price);

    invoiceRowProducts.appendChild(invoiceProductCode);
    invoiceRowProducts.appendChild(invoiceProductTitle);
    invoiceRowProducts.appendChild(invoiceProductQuantity);
    invoiceRowProducts.appendChild(invoiceProductPrice);
  });

  //Agregando Totales
  invoiceContainer.appendChild(invoiceRowTotals);
  invoiceRowTotals.appendChild(invoiceRowTotalsLabels);
  invoiceRowTotalsLabels.appendChild(invoiceLabelNeto);
  invoiceRowTotalsLabels.appendChild(invoiceLabelDelivery);
  invoiceRowTotalsLabels.appendChild(invoiceLabelIva);
  invoiceRowTotalsLabels.appendChild(invoiceLabelTotal);
  invoiceRowTotals.appendChild(invoiceRowTotalsTotals);
  invoiceRowTotalsTotals.appendChild(invoiceNeto);
  invoiceRowTotalsTotals.appendChild(invoiceDelivery);
  invoiceRowTotalsTotals.appendChild(invoiceIva);
  invoiceRowTotalsTotals.appendChild(invoiceTotal);
  invoiceContainer.appendChild(invoiceMainTitleCustomer);

  //Agregando Datos del cliente
  invoiceContainer.appendChild(invoiceRowCustomerData);
  invoiceRowCustomerData.appendChild(invoiceCustomerLabels);
  invoiceCustomerLabels.appendChild(invoiceCustomerLabelName);
  invoiceCustomerLabels.appendChild(invoiceCustomerLabelEmail);
  invoiceCustomerLabels.appendChild(invoiceCustomerLabelAddress);
  invoiceCustomerLabels.appendChild(invoiceCustomerLabelComuna);
  invoiceCustomerLabels.appendChild(invoiceCustomerLabelRegion);
  invoiceRowCustomerData.appendChild(invoiceCustomerData);
  invoiceCustomerData.appendChild(invoiceCustomerName);
  invoiceCustomerData.appendChild(invoiceCustomerEmail);
  invoiceCustomerData.appendChild(invoiceCustomerAddress);
  invoiceCustomerData.appendChild(invoiceCustomerComuna);
  invoiceCustomerData.appendChild(invoiceCustomerRegion);

  //Agregando Cuenta bancaria
  invoiceContainer.appendChild(invoiceTitleBank);
  invoiceContainer.appendChild(invoiceRowBank);
  invoiceRowBank.appendChild(invoiceBankLabels);
  invoiceBankLabels.appendChild(invoiceBankAccountLabel);
  invoiceBankLabels.appendChild(invoiceBankBankLabel);
  invoiceBankLabels.appendChild(invoiceBankNameLabel);
  invoiceBankLabels.appendChild(invoiceBankEmailLabel);
  invoiceRowBank.appendChild(invoiceBankData);
  invoiceBankData.appendChild(invoiceBankAccount);
  invoiceBankData.appendChild(invoiceBankBank);
  invoiceBankData.appendChild(invoiceBankName);
  invoiceBankData.appendChild(invoiceBankEmail);
  //agregando enlace
  invoiceContainer.appendChild(footerInvoice);
  footerInvoice.appendChild(goToHome);
  sendMail(
    products,
    customerData.customerName,
    customerData.customerEmail,
    customerData.customerAddress,
    customerData.customerComuna,
    customerData.customerRegion,
    neto,
    delivery,
    iva,
    total
  );
  //ocultando otras areas
  const totalsSectionId = document.getElementById("totals-section");
  totalsSectionId.classList.add("d-none");
  const cartSectionId = document.getElementById("cart-section");
  cartSectionId.classList.add("d-none");
  const cartMainTitle = document.getElementById("cart-main-title");
  cartMainTitle.classList.add("d-none");
  const staticBackdrop = document.getElementById("staticBackdrop");
  staticBackdrop.classList.add("d-none");
  const buttonModal = document.getElementById("button-modal");
  buttonModal.classList.add("d-none");
  const visible = document.getElementsByClassName("modal-backdrop");
  // visible && visible[0].classList.remove("modal-backdrop");
  const layoutNav = document.getElementById("nav");
  layoutNav.innerHTML = "";
  const layoutFooter = document.getElementById("layout-footer");
  layoutFooter.innerHTML = "";
}
