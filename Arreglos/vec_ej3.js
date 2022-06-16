/*Tabla bidimensional de longitud 5x15 y nombre ‘marco’. Carga la tabla con dos únicos valores 0 y 1,
 donde el valor uno ocupará las posiciones o elementos que delimitan la tabla, es decir, las más externas,
  mientras que el resto de los elementos contendrán el valor 0.
*/
const valor=[]
for (let i=0;i<15;i++){
  valor[i]=[]
  for (let j=0;j<15;j++){
    if (i==0||i==14){
      valor[i][j]=1
    } else {
      if (j==0||j==14){
        valor[i][j]=1
      } else{
        valor[i][j]=0
      }
    }
  }
  console.log(valor[i].join(" "))
}