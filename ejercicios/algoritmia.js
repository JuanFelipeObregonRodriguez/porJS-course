const sumaparesnaturales = ()=>{
    var suma = 0
    for(var i = 0; i<=100; i++){
      if(i%2==0){
          suma+=i;
      }
      
    }
    console.log(suma);
    return suma;
}
sumaparesnaturales()

function sumaImpar() {
    
    var suma = 0;
     
    for(var n = 0; n<=100; n++){
        if(n%2 === 1){
            suma += n;
        }
    }
    console.log(suma);
    return suma;
}

sumaImpar()

function hipotenusa(){
    var ca = 6;
    var co = 7;
    var hipotenusa = Math.sqrt(Math.pow(ca, 2)+ Math.pow(co, 2))
    console.log(hipotenusa)
    return hipotenusa;
}
hipotenusa();