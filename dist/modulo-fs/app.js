"use strict";
const fs = require('fs');
fs.appendFile('../cursoNodejs/public/index.html', '<p>hola</p>', (err) => {
    if (err) {
        throw err;
    }
    console.log('archivo actualizado');
});
//# sourceMappingURL=app.js.map