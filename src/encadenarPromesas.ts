const ordenarProducto = (producto)=>{
    return new Promise ((resolve , reject)=>{
    
        console.log(`Ordenando: ${producto} de freeCodeCamp`);
        
        setTimeout(()=>{
            if (producto === 'taza') {
                resolve('Ordenando una taza con el logo de freeCodeCamp')
            }else{
                reject('Este Producto no esta disponible actualmente ')
            }
        },2000)
    })
    
    }
    const procesarPedido = (respuest)=>{
        return new Promise((resolve) => {
            console.log('procesando respuesta...');
            console.log(`la respuesta fue: "${respuest}"`);
            setTimeout(()=>{
                resolve('Gracias por tu compra')
    
            },4000)
        })
    }
    
    ordenarProducto('taz')
    .then((respuesta)=>{
        console.log(respuesta);
        return procesarPedido(respuesta)
    })
    .then(respuestaProcesada =>{
    console.log(respuestaProcesada);
    })
    .catch(error =>{
        console.error(error);
    })
    
     
    