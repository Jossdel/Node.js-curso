

const fs = require ('fs')
// fs.readFile('../cursoNodejs/public/main.html', 'utf8', (err, contenido) => {
//     if (err) {
//         console.error(new Error(err));
//     } else {
//         console.log(contenido);
//     }
// });

// fs.rename('../cursoNodejs/public/index.html','main.html',(err)=>{
//   if (err) {
//     throw err;
//   }
//   console.log('nombre cambiado exitosamente');
// });
 fs.appendFile('../cursoNodejs/public/index.html', '<p>hola</p>', (err)=>{
    if (err) {
        throw err
    }
    console.log('archivo actualizado');
 })