"use strict";
const miURl = new URL('htpps://wwww.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=');
console.log(miURl.hostname);
console.log(miURl.pathname);
console.log(miURl.searchParams);
console.log(miURl.searchParams.get('ordenar'));
//# sourceMappingURL=url.js.map