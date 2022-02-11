function useStrictMode(){
    'use strict';
    return this;
}
console.log(`este es el resultado${useStrictMode()}`);

const person= {
    nombre: "juan",
    saludar:function(){
        console.log(`hola soy ${this.nombre}`);
    },
}

person.saludar();