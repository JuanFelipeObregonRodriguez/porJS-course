/*function printNumbers(){
    var i ;
    for (i = 0; i<10 ;i++){
        function eventuallyPrintNumbers(n){
            setTimeout(function(){
                console.log(n);
            }, 100)
            
        }
        eventuallyPrintNumbers(i)
    }
}
printNumbers()
*/
function printNumers2(){
    for (let i = 0; i <10; i++){
        setTimeout(function(){
            console.log(i);
        },100)
    }
}
printNumers2();