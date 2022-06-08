/*
function Fibonacci(n){
  if (n>=3){
    return Fibonacci(n-1)+Fibonacci(n-2) 
  } else{
    return 1
  }
}
var a= prompt("¿cuántos números Fibonacci desea ver?")

for (var i=1;i<=a;i++){
  console.log(Fibonacci(i))
}
*/

// Cuánto debes
/* var deudaTotal=0
var deudaMensual=10

for (var i=1;i<=20;i++){
  console.log(`Pago en Mes ${i}: ${deudaMensual}`)
  deudaMensual*=2
  deudaTotal+=deudaMensual
}
console.log(`Pago Total: ${deudaTotal}`) 
*/
//Cronómetro
var s=10
var m=0
var h=0

S=setInterval(Cronometro,1000)

function Cronometro(){
  if (h>=0){
    if (m>=0){ 
      if (s>0){
        --s
        console.log(`${h}:${m}:${s}`)
      }
      else{
        s=60
        m--
      }
      
    } else{
      h--
      m=60
    }
  } else {
    clearInterval(S)
    setInterval(()=>console.info("¡Ya se acabó el tiempo!"),500)
  }
}
