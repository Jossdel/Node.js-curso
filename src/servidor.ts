import { infoCursos } from "./cursos";
import express from "express";
import { routerMatematicas } from "../src/routers/matematicas";
import { routerProgramacion } from "../src/routers/programacion";
const app = express();




app.use("/api/cursos/programacion", routerProgramacion) 

app.use("/api/cursos/matematicas",routerMatematicas)

// Ruta principal
app.get("/", (req, res) => {
  res.send("Mi primer curso . Cursos💻");
});

// Todos los cursos
app.get("/api/cursos", (req, res) => {
  res.json(infoCursos);
});


  

  

// Puerto del servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}...`);
});
