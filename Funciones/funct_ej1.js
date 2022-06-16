/*Diseñar una función que calcule el área y el perímetro de una circunferencia. 
Utiliza dicha función en un programa principal que lea el radio de 
una circunferencia y muestre su área y perímetro*/

function parametrosCirculo(radio, arreglo){
    //área
    arreglo[0]=Math.PI*radio**2
    //perímetro
    arreglo[1]=Math.PI*2*radio
  }
  
  let r=prompt("Ingrese radio del círculo: ")
  let datos=[]
  parametrosCirculo(r, datos)
  
  console.log(`El área del círculo es: ${datos[0]}
  El perímetro del cículo es: ${datos[1]}`)