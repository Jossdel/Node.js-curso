import express from "express";
import { infoCursos } from "../cursos";

const {matematicas} = infoCursos;
export const routerMatematicas= express.Router()

 
  // Cursos de matemáticas
  routerMatematicas.get("/", (req, res) => {
    res.json(matematicas);
  });
  routerMatematicas.get("/:tema", (req, res) => {
    const tema  = req.params.tema.toLowerCase()
    const result = matematicas.filter((mates) =>mates.tema.toLowerCase() === tema)
    
    if (tema.length === 0) {
      return res.status(404).send(`No se encontraron cursos de ${tema}`);
    }
    res.json(result);
  });
  
