// const mostrarTema = (tema:string)=> {
// console.log(`estoy aprendiendo ${tema}`);
// }

//setTimeout(mostrarTema, 5000 ,'node.js')

const sumar = (a:number ,b: number)=>{
   return console.log(a + b ); 
}

//setTimeout(sumar, 2000 , 34 ,43) 
// const mostrarTema = (tema:string)=> {
//     console.log(`estoy aprendiendo ${tema}`);
//     }

// console.log('antes de setImmediate');

//     setImmediate(mostrarTema, 'Node.Js')

//  console.log('despues de setImmediate');
const mostrarTema = (tema:string)=> {
    console.log(`estoy aprendiendo ${tema}`);
    }
    setInterval(mostrarTema, 1500 , 'Node.js')