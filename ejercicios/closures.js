function makeCounter(n) {
    let count = n;
    return{
        increase: function(){
            count = count +1;
        },
        decrease: function(){
            count = count -1;
        },
        getCount: function(){
            return count;
        }
    }
    
}

let counter = makeCounter(7);
console.log("la funcion incrementa:", counter.getCount());
counter.increase();
counter.increase();
counter.increase();
counter.decrease();
console.log("el conteo de la funcion es:", counter.getCount());
counter.decrease();
counter.decrease();
counter.decrease();
console.log("el conteo de la funcion es:", counter.getCount());