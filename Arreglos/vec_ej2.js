/*Hacer un programa que inicialice un vector de números con valores aleatorios,
 y posterior ordene los elementos de menor a mayor.*/
 
const aleatorio=[]
function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function compara(a,b){
  return a-b;
}

//Inicialización de vector
for(let i=0;i<=99;i++){
  aleatorio[i]=random(1,101)
}
//Imprime el vector desordenado
console.log(aleatorio)

//Ordena el vector
aleatorio.sort(compara)
console.log(aleatorio)
