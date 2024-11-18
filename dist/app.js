"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require('http');
const cursos_1 = require("./cursos");
const servidor = http.createServer((req, res) => {
    const { method } = req;
    switch (method) {
        case 'GET':
            return manejarSolicitudGET(req, res);
        case 'POST':
            return manejarSolicitudPOST(req, res);
        default:
            console.log(`El método usado no puede ser manejado por el servidor`);
            res.statusCode = 405;
            res.end(`Método ${method} no soportado por el servidor`);
            break;
    }
});
const manejarSolicitudGET = (req, res) => {
    const path = req.url;
    if (path === '/') {
        res.statusCode = 200;
        res.end('Bienvenidos a mi primer servidor y API creados');
    }
    else if (path === '/api/cursos') {
        res.statusCode = 200;
        res.end(JSON.stringify(cursos_1.infoCursos));
    }
    else if (path === '/api/cursos/programacion') {
        res.statusCode = 200;
        res.end(JSON.stringify(cursos_1.infoCursos.programacion));
    }
    else if (path === '/api/cursos/matematicas') {
        res.statusCode = 200;
        res.end(JSON.stringify(cursos_1.infoCursos.matematicas));
    }
    else {
        res.statusCode = 404;
        res.end('Recurso no encontrado');
    }
};
const manejarSolicitudPOST = (req, res) => {
    const path = req.url;
    if (path === '/api/cursos/programacion') {
        let body = '';
        req.on('data', (contenido) => {
            body += contenido.toString();
        });
        req.on('end', () => {
            console.log(body);
            console.log(typeof body);
            body = JSON.parse(body);
            res.end('El servidor ha recibido una solicitud POST para /api/cursos/programacion');
            console.log(typeof body);
        });
    }
    else {
        res.statusCode = 404;
        res.end('Recurso no encontrado para solicitud POST');
    }
};
servidor.listen(3000, () => {
    console.log('El servidor está escuchando en el puerto 3000...');
});
//# sourceMappingURL=app.js.map