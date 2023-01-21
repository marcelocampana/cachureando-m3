function fetchDataforInvoice(array) {
  let productsIntoCart = [];
  let values = [];
  array.map((product) => {
    productsIntoCart.push(product);
    values.push(product.price * product.quantity);

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

function createInvoice(products, neto, iva, delivery, total, customerData) {
  console.log(products, neto, iva, delivery, total, customerData);

  const invoiceContainer = document.createElement("div");

  const invoiceRowProducts = document.createElement("div");
  invoiceRowProducts.classList.add("row");

  const invoiceRowTotals = document.createElement("div");
  invoiceRowTotals.classList.add("d-flex", "justify-content-end");
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
  invoiceNeto.innerText = neto;
  const invoiceDelivery = document.createElement("div");
  invoiceDelivery.innerText = delivery;
  const invoiceIva = document.createElement("div");
  invoiceIva.innerText = iva;
  const invoiceTotal = document.createElement("div");
  invoiceTotal.innerText = total;
  const invoiceRowBankAccount = document.createElement("div");
  const invoiceBankAccountNumber = document.createElement("div");
  invoiceBankAccountNumber.innerText = "999-786-3410";
  const invoiceBankAccountName = document.createElement("div");
  invoiceBankAccountName.innerText = "Banco de Chile";
  const invoiceMainTitlecustomer = document.createElement("h4");
  invoiceMainTitlecustomer.innerText = "Datos para el envio";
  const invoiceRowCustomerData = document.createElement("div");
  invoiceRowCustomerData.classList.add("d-flex");
  const invoiceCustomerLabels = document.createElement("div");

  const invoiceCustomerLabelName = document.createElement("div");
  invoiceCustomerLabelName.innerText = "Nombre";
  invoiceCustomerLabelName.classList.add("fw-bold");
  const invoiceCustomerLabelEmail = document.createElement("div");
  invoiceCustomerLabelEmail.classList.add("fw-bold");
  invoiceCustomerLabelEmail.innerText = "Email";
  const invoiceCustomerLabelAddress = document.createElement("div");
  invoiceCustomerLabelAddress.classList.add("fw-bold");
  invoiceCustomerLabelAddress.innerText = "Direccion";
  const invoiceCustomerLabelComuna = document.createElement("div");
  invoiceCustomerLabelComuna.classList.add("fw-bold");
  invoiceCustomerLabelComuna.innerText = "Comuna";
  const invoiceCustomerLabelRegion = document.createElement("div");
  invoiceCustomerLabelRegion.classList.add("fw-bold");
  invoiceCustomerLabelRegion.innerText = "Region";

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

  //agregando datos al DOM

  const DOMinvoice = document.getElementById("invoice");
  DOMinvoice.classList.add("mx-auto", "w-75");
  DOMinvoice.innerText = "";
  DOMinvoice.appendChild(invoiceContainer);
  invoiceContainer.appendChild(invoiceRowProducts);
  products.forEach((product) => {
    const invoiceProductCode = document.createElement("div");
    invoiceProductCode.classList.add("col-1");
    const invoiceProductTitle = document.createElement("div");
    invoiceProductTitle.classList.add("col-3");
    const invoiceProductQuantity = document.createElement("div");
    invoiceProductQuantity.classList.add("col-4");
    const invoiceProductPrice = document.createElement("div");
    invoiceProductPrice.classList.add("col-4");

    invoiceProductCode.innerText = `ID${product.codeBook}`;
    invoiceProductTitle.innerText = product.titleBook;
    invoiceProductQuantity.innerText = product.quantity;
    invoiceProductPrice.innerText = product.price;

    invoiceRowProducts.appendChild(invoiceProductCode);
    invoiceRowProducts.appendChild(invoiceProductTitle);
    invoiceRowProducts.appendChild(invoiceProductQuantity);
    invoiceRowProducts.appendChild(invoiceProductPrice);
  });
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
  invoiceContainer.appendChild(invoiceMainTitlecustomer);
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
  invoiceContainer.appendChild(invoiceRowBankAccount);
  invoiceRowBankAccount.appendChild(invoiceBankAccountNumber);
  invoiceRowBankAccount.appendChild(invoiceBankAccountName);
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

  return customerData;
}

document.getElementById("store-data") &&
  console.log(document.getElementById("store-data").value);
