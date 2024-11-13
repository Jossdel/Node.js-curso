"use strict";
const promesaCumplida = false;
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (promesaCumplida) {
            resolve('pormesa cumplida');
        }
        else {
            reject('promesa rechazada...');
        }
    }, 3000);
});
promesa.then((x) => {
    console.log(x);
})
    .catch((valor) => {
    console.log(valor);
});
//# sourceMappingURL=promesas.js.map