function sendMail(
  products,
  name,
  to_email,
  address,
  comuna,
  region,
  neto,
  delivery,
  iva,
  total
) {
  console.log(products);
  let cart = products
    .map(
      (product) =>
        `<div>${product.quantity} ${product.titleBook}(Codigo ID${product.codeBook}) - ${product.price}c/u</div>`
    )
    .join("");
  console.log(cart);
  const emailMessage = `<div>
      <h3>Gracias ${name}!</h3>
      <h5>Estos son los datos de tu compra en Chachurando Books</h5>
      <h4>Productos solicitados</h4>
      <div>
${cart}
      </div>
      <div>
        <h4>Totales de la compra</h4>
        <div style="font-weight:bold">
          <div>
            Neto:<span style="font-weight:normal">
              ${"$" + Intl.NumberFormat("es-CL").format(parseInt(neto))}
            </span>
          </div>
          <div>
            Cargo por envío:<span style="font-weight:normal">
              ${"$" + Intl.NumberFormat("es-CL").format(parseInt(delivery))}
            </span>
          </div>
          <div>
            IVA:<span style="font-weight:normal">
              ${"$" + Intl.NumberFormat("es-CL").format(parseInt(iva))}
            </span>
          </div>
          <div>
            Total:<span style="font-weight:normal">
              ${"$" + Intl.NumberFormat("es-CL").format(parseInt(total))}
            </span>
          </div>
        </div>
      </div>
      <h4>Datos para el envio</h4>
      <div>
        <div style="font-weight:bold">
          <div class="fw-bold me-2">
            Nombre: <span style="font-weight:normal">${name}</span>
          </div>
          <div>
            Email: <span style="font-weight:normal">${to_email}</span>
          </div>
          <div>
            Dirección:
            <span style="font-weight:normal">${address}</span>
          </div>
          <div>
            Comuna:
            <span style="font-weight:normal">${comuna}</span>
          </div>
          <div>
            Región:
            <span style="font-weight:normal">${region}</span>
          </div>
        </div>
      </div>
      <h4 class="mt-5">Datos para el pago</h4>
      <div>
        <div style="font-weight:bold">
          <div>
            Cuenta corriente:
            <span style="font-weight:normal">999-786-3410</span>
          </div>
          <div>
            Banco: <span style="font-weight:normal">Banco de Chile</span>
          </div>
          <div>
            A nombre de:
            <span style="font-weight:normal">Cachureando Books</span>
          </div>
          <div>
            Email de confirmación:
            <span style="font-weight:normal">pagos@cachureando.cl</span>
          </div>
        </div>
      </div>
    </div>`;

  (function () {
    emailjs.init("pajDbC8NWgRvMqeKH"); //please encrypted user id for malicious attacks
  })();
  //set the parameter as per you template parameter[https://dashboard.emailjs.com/templates]
  const templateParams = {
    to_name: name,
    from_name: "Cachureando Books",
    message: emailMessage,
    to_email: to_email,
  };

  emailjs.send("service_70jjprq", "template_ai5eqfb", templateParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
    },
    function (error) {
      console.log("FAILED...", error);
    }
  );
}
