const http = require('http')

const servidor =http.createServer((req , res)=>{
    console.log('solicitud nueva');

   res.setHeader('contenido-type' , 'application/json')
   console.log(res.getHeaders());
    res.end('Hola mundo')
} ) 
servidor.listen(3000,()=>console.log('El servidor esta funcionando...')) 
//5:20:00