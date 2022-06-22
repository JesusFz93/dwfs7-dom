// let body = document.querySelector("body");
// let main = document.createElement("main");
let texto = document.createTextNode("Hola mundo");

// main.appendChild(texto);
// body.appendChild(main);

let seccion1 = document.getElementById("seccion1");
seccion1.appendChild(texto);
seccion1.className = "seccion_secundaria amarillo";

function saludame() {
  console.log("Hola, como estas?");
}

const despideme = () => {
  console.log("Adios, hasta luego!");
};

const alerta = () => {
  console.log("Cuidado, estas a punto de presionar el boton.");
};

const boton_despedir = document.getElementById("boton_despedir");
boton_despedir.addEventListener("click", despideme);

const imagen_perrito = document.getElementById("imagen_perrito");
let imagen_capturada = imagen_perrito.getAttribute("src");
// console.log(imagen_capturada);
imagen_perrito.setAttribute(
  "src",
  "https://www.petdarling.com/wp-content/uploads/2014/08/cachorro-beagle-200x200.jpg"
);

let tieneSrc = "";
tieneSrc = imagen_perrito.hasAttribute("src");
console.log(tieneSrc);
imagen_perrito.removeAttribute("src");
tieneSrc = imagen_perrito.hasAttribute("src");
console.log(tieneSrc);

// LOCALSTORAGE
localStorage.setItem("nombre", "Juan");
localStorage.setItem("apellido", "Jimenez");
localStorage.setItem("edad", "24");
localStorage.setItem("nacionalidad", "Mexicana");
let nombre = localStorage.getItem("nombre");
let apellido = localStorage.getItem("apellido");
console.log(nombre + " " + apellido);

localStorage.removeItem("nacionalidad"); // Elimina solo un item
localStorage.clear(); // Elimina todos los items del localstorage

// LOCALSOTORAGE CON VARIABLES
let firstName = "Carlos";

localStorage.setItem("nombre", firstName);

const enviar_info = () => {
  let nombre = document.getElementById("txtNombre").value;
  let apellido = document.getElementById("txtApellido").value;
  let nombreCompleto = nombre + " " + apellido;

  localStorage.setItem("nombre", nombreCompleto);
};

const mostrar_info = () => {
  let nombreCompleto = localStorage.getItem("nombre");
  console.log(nombreCompleto);
};

// LOCALSTORAGE CON ARREGLOS
let arreglo = [
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
  "domingo",
];

localStorage.setItem("arreglo", JSON.stringify(arreglo));
let nuevo_arreglo = localStorage.getItem("arreglo");
console.log(JSON.parse(nuevo_arreglo));

// LOCALSTORAGE CON OBJETOS
let objeto = {
  nombre: "Juan",
  apellido: "Jimenez",
  edad: 24,
};

console.log(objeto);
localStorage.setItem("objeto", JSON.stringify(objeto));
let nuevo_objeto = localStorage.getItem("objeto");
console.log(JSON.parse(nuevo_objeto));
