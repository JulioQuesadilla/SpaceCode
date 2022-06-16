/*Crear una subrutina llamada “Login”, que recibe un nombre de usuario y una contraseña y 
te devuelve Verdadero si el nombre de usuario es “usuario1” y la contraseña es “asdasd”. 
Además recibe el número de intentos que se ha intentado hacer login y si no se ha podido 
hacer login incremente este valor.  

En la función principal se pedirá un nombre de usuario y una contraseña y se intente hacer login,
 solamente tenemos tres oportunidades para intentarlo.*/

 function Login(user, password) {
  if (user=="usuario1"&&password=="asdasd"){
    return true;
  }
  return false
}

function Principal(){
  let intentos
  intentos=0
while (intentos<3){
  let usuario=prompt("Ingrese su usuario: ")
  let contraseña=prompt("Ingrese su contraseña: ")
  let respuesta=confirm(`¿Desea acceder? Ha hecho ${intentos} intentos`)
  if (respuesta==true){
    if (Login(usuario, contraseña,intentos)){
      alert(`Bienvenido ${usuario}`)
      break;
    } 
    intentos++
    alert("Revise su usuario y contraseña")
}
}
}
Principal()

  