import express from "express";
import { infoCursos } from "../cursos";

const { programacion } = infoCursos;
export const routerProgramacion = express.Router();
routerProgramacion.use(express.json())

// Cursos de programación
routerProgramacion.get("/", (req, res) => {
  res.json(programacion);
});

// Cursos de un lenguaje específico
routerProgramacion.get("/:lenguaje", (req, res) => {
  const lenguaje = req.params.lenguaje.toLowerCase();
  const ordenar: string = req.query.ordenar;

  const resultado = programacion.filter(
    (curso) => curso.lenguaje.toLowerCase() === lenguaje
  );

  if (resultado.length === 0) {
    return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
  }

  if (ordenar === "vistas") {
    return res.json(
      resultado.sort((a, b) => (b.vistas || 0) - (a.vistas || 0))
    );
  }

  res.json(resultado);
});

routerProgramacion.get("/:lenguaje/:nivel", (req, res) => {
  const lenguaje = req.params.lenguaje;
  const nivel = req.params.nivel;

  const respuesta1 = programacion.filter(
    (curso) => curso.lenguaje === lenguaje && curso.nivel === nivel
  );
  if (respuesta1.length === 0) {
    return res
      .status(404)
      .send(`No se encontraron cursos de ${lenguaje} de ${nivel}`);
  }
  res.json(respuesta1);
});

routerProgramacion.post('/',(req ,res)=>{
  let cursoNuevo = req.body
  programacion.push(cursoNuevo)
   res.json(programacion)
})

routerProgramacion.put("/:id", (req, res) => {
  const cursoActualizado = req.body; // Datos enviados en el cuerpo
  const id = parseInt(req.params.id); // Asegúrate de que sea un número
  const indice = programacion.findIndex((curso) => curso.id === id);

  if (indice >= 0) {
    // Actualizar el curso
    programacion[indice] = cursoActualizado
    return res.json({
      curso: programacion[indice],
    });
  }

  // Si no se encuentra el curso
  res.status(404).json(programacion);
});

routerProgramacion.delete("/:id", (req, res) => {
  const cursoActualizado = req.body; // Datos enviados en el cuerpo
  const id = parseInt(req.params.id); // Asegúrate de que sea un número
  const indice = programacion.findIndex((curso) => curso.id === id);

  if (indice >= 0) {
    // Actualizar el curso
    programacion.splice(indice , 1)
    return res.json(programacion);
  }

  // Si no se encuentra el curso
  res.status(404).json(programacion);
});