const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

let personas = require("./array");

app.get("/personas", function (req, res) {
  res.send(personas);
});

app.post("/personas", function (req, res) {
  let nombre = req.body.nombre;
  let apellido = req.body.apellido;
  let edad = req.body.edad;
  personas.push({
    nombre: nombre,
    apellido: apellido,
    edad: edad,
  });
  res.send({ mensaje: "Añadido" });
});

app.put("/personas", function (req, res) {
  let nombre = req.body.nombre;
  let apellido = req.body.apellido;
  let edad = req.body.edad;
  for (i = 0; i < personas.length; i++) {
    if (nombre === personas[i].nombre) {
      personas[i].nombre = nombre;
      personas[i].apellido = apellido;
      personas[i].edad = edad;
      break;
    }
  }
  res.send({ mensaje: "Modificado" });
});

app.delete("/personas", function (req, res) {
  let nombre = req.body.nombre;
  for (i = 0; i < personas.length; i++) {
    if (nombre === personas[i].nombre) {
      personas.splice(i,1)
    }
  }
  res.send({ mensaje: "Eliminado" });
});

app.listen(3000);
