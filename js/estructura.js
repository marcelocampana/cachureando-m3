

const DomBody = document.getElementById('DomBody');

const  DivContainer = document.createElement("div");
DivContainer.classList.add('container');

const DivForm = document.createElement('form');
DivForm.classList.add('col-xl-5','col-lg-8','col-md-8','col-sm-8','col-12','alert','alert-secondary');


const titulo = document.createElement('h3');
titulo.textContent = 'Formulario de Contacto';

const DivFormItems1 = document.createElement('div');
DivFormItems1.classList.add('field','mb-6');

const Label1 = document.createElement('label');
Label1.setAttribute('for','to-name');
Label1.textContent = 'Nombre';
const input1 = document.createElement('input');
input1.setAttribute('type','text');
input1.setAttribute('name','to_name');
input1.setAttribute('id','to_name');
input1.classList.add('form-control');

const DivFormItems2 = document.createElement('div');
DivFormItems2.classList.add('field','mb-6');

const Label2 = document.createElement('label');
Label2.setAttribute('for','from-name');
Label2.textContent = 'Correo';
const input2 = document.createElement('input');
input2.setAttribute('type','text');
input2.setAttribute('name','from_name');
input2.setAttribute('id','from_name');
input2.classList.add('form-control');

const DivFormItems3 = document.createElement('div');
DivFormItems3.classList.add('field','mb-6');

const Label3 = document.createElement('label');
Label3.setAttribute('for','message');
Label3.textContent = 'Mensaje';
const textarea = document.createElement('textarea');
textarea.setAttribute('type','text');
textarea.setAttribute('name','message');
textarea.setAttribute('id','message');
textarea.classList.add('form-control');
textarea.setAttribute('type','text');
textarea.setAttribute('row','3');

const inputBotom = document.createElement('input');
inputBotom.setAttribute('type','submit');
inputBotom.setAttribute('value','Enviar Email');
inputBotom.setAttribute('id','button');
inputBotom.classList.add('btn','btn-primary');

DomBody.appendChild(DivContainer);
DivContainer.appendChild(DivForm);

DivForm.appendChild(titulo);

DivForm.appendChild(DivFormItems1);

DivFormItems1.appendChild(Label1);
DivFormItems1.appendChild(input1);

DivForm.appendChild(DivFormItems2);

DivFormItems2.appendChild(Label2);
DivFormItems2.appendChild(input2);


DivForm.appendChild(DivFormItems3);

DivFormItems3.appendChild(Label3);
DivFormItems3.appendChild(textarea);

DivForm.appendChild(inputBotom);





