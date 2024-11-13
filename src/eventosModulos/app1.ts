
const EventEmitter = require('events');

const emisorProductos = new EventEmitter();
emisorProductos.on('compra',(total:number, numProductos:number)=>{
    console.log(`se realizo una compra de ${total}`);
    console.log(`numero de productos ${numProductos}`);
});

emisorProductos.emit('compra',500 ,5)