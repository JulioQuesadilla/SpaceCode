/*Programa que declara un vector de diez elementos enteros y pida números para
 rellenarlo hasta que se llene el vector o se introduzca un número negativo. 
 Entonces se debe imprimir el vector (sólo los elementos introducidos)*/
let elementos=[]
for (let i =0; i<=9; i++){
  elementos[i]=Math.trunc(prompt(`Introduce el elemento ENTERO ${(i+1)}`))
  if (elementos[i]<0){
    break;
  }
}
  
elementos.forEach(function(elemento, indice, array) {
    console.log(elemento);
})
