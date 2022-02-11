function saludar (){
    console.log(`hola mi nombre es ${this.nombre} ${this.apellido}`);

}

const moruno = {
    nombre:"juan",
    apellido:"obregon"
}

saludar.call(juan);

function caminar(metros, direccion){

    console.log(`${this.name}, camina ${metros} hacia el ${direccion}`);
}
const valores =[900, "noroeste"]

caminar.apply(juan, valores)
caminar.call(juan, 400, 'sudeste')

const felipe ={nombre:"felipe", apellido:"obregon"}

const juanSaluda = saludar.bind(felipe)
juanSaluda();

let buttons = document.getElementsByClassName("call-to-action");

      Array.prototype.forEach.bind(buttons)((item) => {
        item.addEventListener("click", () => alert("Never Stop Learning"));
      });