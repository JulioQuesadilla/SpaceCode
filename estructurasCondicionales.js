// Ejercicio 1: Leer un valor entero y determinar si se trata de un número par o impar
function parOimpar (){
  var x = Number(prompt("Dame un número "))
while (Number.isInteger(x)===false){
   var x = Number(prompt("¡Dame un número entero! "))
}
  y = x%2==0 ? x + " es par": x + " es impar"
  console.log(y)
}


/* Ejercicio 2: leer un carácter (char) e indicar si es una vocal minúscula, una vocal mayúscula o no es una vocal.*/
vocal= prompt("Teclee un caracter")

switch(vocal.charCodeAt(0)){
  case 65: case 69: case 73: case 79: case 85:
    console.log(`El caracter ${vocal.charAt(0)} es una vocal mayúscula`)
    break

  case 97: case 101: case 105: case 111: case 117:
    console.log(`El caracter ${vocal.charAt(0)} es una vocal minúscula`)
    break

  default:
    console.log(`El caracter '${vocal.charAt(0)}' ni siquiera es una vocal`)
    break
}

/* Ejercicio 3: menú */

(function(){
  var usuario = prompt(`Ingrese su usuario `)
  console.log("Iniciando...")
 
  
  setTimeout(()=>{
    console.log(`Bienvenido ${usuario}`)
    console.log(`Este programa realiza:
Opción 1: cubos 
Opción 2: decide si un número es par o impar
Opción 3: Salir`)

    var accion=true
    while (accion){
      var opcion= Number(prompt(`Escoge una opción`))
    switch (opcion){
      case 1:
        var x = Number(prompt("Tecleé su número"))
        console.log(`Es resultado es ${x**=3 }`)
      break

      case 2:
        parOimpar()
        break

      case 3: 
        console.log(`¡Gracias por usuar nuestro programa, ${usuario}!`)
        accion=false
        break
    }
      accion=prompt("¿Desea otra opción? (si = 1) ó (no = 0)")==1 ? true : false
    }
  },1500)
})()
