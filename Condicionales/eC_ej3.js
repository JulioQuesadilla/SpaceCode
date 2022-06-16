/* Ejercicio 3: menú */
function parOimpar (){
  var x = Number(prompt("Dame un número "))
while (Number.isInteger(x)===false){
   var x = Number(prompt("¡Dame un número entero! "))
}
  y = x%2==0 ? x + " es par": x + " es impar"
  console.log(y)
}
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
