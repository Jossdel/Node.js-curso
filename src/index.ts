
 const saludar = (nombre:string)=>{
return `hola ${nombre}`
}

const saludarHolaMundo = (nombre:string)=>{
    return ` ${nombre}`
    }



// module.exports.saludar = saludar
// module.exports.saludarHolaMundo = saludarHolaMundo
// console.log(module.exports);
module.exports = {
saludar:saludar,
saludarHolaMundo:saludarHolaMundo
};