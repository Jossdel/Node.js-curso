import express from "express";
import { infoCursos } from "../cursos";

const {programacion} = infoCursos;
export const routerProgramacion = express.Router()
// Cursos de programación
routerProgramacion.get("/", (req, res) => {
    res.json(programacion);
  });
  
  // Cursos de un lenguaje específico
  routerProgramacion.get("/:lenguaje", (req, res) => {
    const lenguaje = req.params.lenguaje.toLowerCase();
    const ordenar: string | undefined = req.query.ordenar as string;
  
    const resultado = programacion.filter((curso) =>
      curso.lenguaje.toLowerCase() === lenguaje
    );
  
    if (resultado.length === 0) {
      return res.status(404).send(`No se encontraron cursos de ${lenguaje}`);
    }
  
    if (ordenar === 'vistas') {
      return res.json(resultado.sort((a, b) => (b.vistas || 0) - (a.vistas || 0)));
    }
  
    res.json(resultado);
  });
  
  
  
  routerProgramacion.get ("/:lenguaje/:nivel",(req ,res )=>{
    const lenguaje  = req.params.lenguaje
    const nivel = req.params.nivel
    
    const respuesta1 = programacion.filter((curso)=> curso.lenguaje === lenguaje && curso.nivel=== nivel )
    if (respuesta1.length === 0 ) {
      return res.status(404).send(`No se encontraron cursos de ${lenguaje} de ${nivel}`)
      
    }
    res.json(respuesta1)
    
    
    
    })