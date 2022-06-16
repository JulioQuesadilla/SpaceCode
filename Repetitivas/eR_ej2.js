//Temporizador
let s=prompt("indice segundos")
let m=prompt("indice minutos")
let h=prompt("indice horas")

const S=setInterval(Cronometro,1000)

function Cronometro(){
  if (h>=0){
    if (m>=0){ 
      if (s>0){
        --s
        console.log(`${h}:${m}:${s}`)
        setInterval(()=>console.clear(),1000)
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
