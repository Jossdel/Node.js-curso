"use strict";
const fs = require('fs');
fs.readFile('../cursoNodejs/public/index.html', 'utf8', (err, contenido) => {
    if (err) {
        console.error(new Error(err));
    }
    else {
        console.log(contenido);
    }
});
fs.rename('../cursoNodejs/public/index.html', 'main.html', (err) => {
    if (err) {
        throw err;
    }
    console.log('nombre cambiado exitosamente');
});
//# sourceMappingURL=app.js.map