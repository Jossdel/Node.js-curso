"use strict";
const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('hola mundo  nb ');
});
app.listen(3000, () => { console.log(`servidor escuchando en puerto ${3000}...`); });
//# sourceMappingURL=servidor.js.map