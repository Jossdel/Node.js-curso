const ordenarProducto1 = (producto: unknown)=>{
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
    const procesarPedido1 = (respuesta:unknown)=>{
        return new Promise((resolve) => {
            console.log('procesando respuesta...');
            console.log(`la respuesta fue: "${respuesta}"`);
            setTimeout(()=>{
                resolve('Gracias por tu compra')
    
            },4000)
        })
    }
    


const realizarPedico = async (producto: unknown)=>{
    try {
         const respuesta = await ordenarProducto1(producto)
         console.log(respuesta);
     console.log('respuesta recibida');
     const respuestaProcesada = await procesarPedido1(respuesta)
     console.log(respuestaProcesada);
    } catch (error) {
        console.error(error)
    }
    
     
}
realizarPedico('tza')