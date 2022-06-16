
/*Una persona adquirió un producto para pagar en 20 meses. 
El primer mes pagó 10 €, el segundo 20 €, el tercero 40 € y así sucesivamente. 
Realizar un algoritmo para determinar cuánto debe pagar mensualmente y el total de lo que pagó después de los 20 meses.*/

// Cuánto debes
let deudaTotal=0
let deudaMensual=10

for (var i=1;i<=20;i++){
  console.log(`Pago en Mes ${i}: ${deudaMensual}`)
  deudaMensual*=2
  deudaTotal+=deudaMensual
}
console.log(`Pago Total: ${deudaTotal}`) 