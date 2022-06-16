/*Escribir dos funciones que permitan calcular:
La cantidad de segundos en un tiempo dado en horas, minutos y segundos.

La cantidad de horas, minutos y segundos de un tiempo dado en segundos.

Escribe un programa principal con un menú donde se pueda elegir la opción de convertir a segundos, 
convertir a horas,minutos y segundos o salir del programa*/

function aSegundos(horas, minutos, segundos){
    return segundos+minutos*60+horas*60**2
    }
    
    function deSegundos(segundos, valores){
      let hs=Math.floor(segundos/(60**2))
      let mins=Math.floor(Math.floor(segundos-hs*(60**2))/60)
      let segs=segundos-hs*(60**2)-mins*60
    
      valores[0]=hs
      valores[1]=mins
      valores[2]=segs
    }
    
    function Menu(){
      console.log(`¡Bienvenido!
    Este es un programa que realiza: 
    1) Convertir horas:minutos:segundos a segundos
    2) Convertir segundos a horas:minutos:segundos
    3) Salir`)
      
      let opcion=Number(prompt("Elige la opción que gustes hacer: "))
    
    switch (opcion){
      case 1:
        let valorhs= Number(prompt("Ingrese horas:"))
        let valormins=Number(prompt("Ingrese minutos: "))
        let valorsegs=Number(prompt("Ingrese segundos: "))
        let respuesta=aSegundos(valorhs, valormins, valorsegs)
        console.log(`${valorhs}:${valormins}:${valorsegs} equivale a ${respuesta} segundos`)
        break;
    
      case 2:
        let valor=prompt("Ingrese segundos: ")
        let datos= []
        deSegundos(valor, datos)
    
        console.log(`${valor} segundos equivalen a ${datos.join(":")}`)
        break;
    
      case 3:
        break;
    }
    }
    
    
    Menu()