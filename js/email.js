

// document.getElementById('form').addEventListener('submit', function(event){
//     event.preventDefault();
  


const btn = document.getElementById('button');

document.querySelector('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   var usuario = document.getElementById('to_name').value;
   if(usuario.length == 0) {
     alert('No has escrito nada en el Usuario');
     return;
   }
   var email = document.getElementById('from_name').value;
     if(email.length == 0) {
     alert('No has escrito nada en el Email')
     return;
   }
     else if (email.match(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i) == null) {
     alert("El email no es correcto");
     return;
   }
   var mensaje = document.getElementById('message').value;
   if(mensaje.length == 0) {
     alert('No has escrito nada en el Mensaje');
     return;
   }

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_2l8i5ve';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
