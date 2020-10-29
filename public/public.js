fetch("/personas")
  .then(function (respuesta) {
    return respuesta.json();
  })
  .then(function (datos) {
    let contenido = "";
    for (let i = 0; i < datos.length; i++) {
      contenido += `
        <div>
        <h3>${datos[i].nombre}</h3>
        <h6>${datos[i].apellido}</h6>
        <p>${datos[i].edad}</p>
        </div>`;
    }
    document.getElementById("div1").innerHTML = contenido;
  });

function enviar(){
  let nombre = document.getElementById("nombre").value;
  let apellido = document.getElementById("apellido").value;
  let edad = parseInt(document.getElementById("edad").value);
  let persona = {
    nombre: nombre,
    apellido: apellido,
    edad: edad,
  };
  fetch("/personas", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(persona),
  })
    .then(function (respuesta) {
      return respuesta.json();
    })
    .then(function (datos) {
      console.log(persona);
    });
}

function modificar(){
   let nombre = document.getElementById("nombre").value;
   let apellido = document.getElementById("apellido").value;
   let edad = document.getElementById("edad").value;
   let persona = {
    nombre: nombre,
    apellido: apellido,
    edad: edad,
  };
  fetch("/personas", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(persona),
  })
    .then(function (respuesta) {
      return respuesta.json();
    })
    .then(function (datos) {
      console.log(persona);
    });
}

function eliminar(){
let nombre = document.getElementById("nombre").value
let persona = {
 nombre: nombre,
};
fetch("/personas", {
 method: "DELETE",
 headers: {
   "Content-Type": "application/json",
 },
 body: JSON.stringify(persona),
})
 .then(function (respuesta) {
   return respuesta.json();
 })
 .then(function (datos) {
   console.log(persona);
 });
}
