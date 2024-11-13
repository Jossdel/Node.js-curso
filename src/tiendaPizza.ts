
const estatusPedido = ()=>{
const estatus = Math.random() < 0.8;

return estatus;
}

const miPedidoDePiza = new Promise((resolve , reject)=>{
setTimeout(()=>{
    if (estatusPedido()) {
        resolve('puede obtener su piza ')
    }
    else{
        reject('ocurrio un error . por favor intente denuevo')
    }
},3000)
})

miPedidoDePiza
.then((valor)=>{

console.log(`${valor}`);
})
.catch((valor)=>{

console.log(`${valor}`);
})