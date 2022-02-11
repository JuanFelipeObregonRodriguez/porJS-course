/*const heroMethods= {
    saludar: function(){
        console.log(`hola soy ${this.name}`);
    }
}

const hero = (name)=>{
    const hero = {
        name:name
    }

    hero.saludar = heroMethods.saludar;
    return hero;
}

juan = hero("juan");
juan.saludar();

nico = hero("nicolas")
nico.saludar();
*/

class hero{

   constructor(nombre){
       this.nombre = nombre;
   };
   
    saludar(){
        console.log(`hola soy ${this.nombre}`);
    };

}

const juan = new hero("juan");
juan.saludar();
const nico = new hero("nico");
nico.saludar();