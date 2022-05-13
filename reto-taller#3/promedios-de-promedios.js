const conjunto1 = [1,2,3,4,5];
const conjunto2 = [3,5,7,9 ];
const conjunto3 = [6,7,20 ];

const calcProm =(list)=> {
  const sumLista = list.reduce(
    //lo de abajo es una funcion anonima
    // pero en arrow function
    (valorAcumulado = 0, newNumer) => {
      return valorAcumulado + newNumer;
    }
  );
  const promediDeLaLista = sumLista / list.length;
  return promediDeLaLista; 
};
///////////validacion si tiene 4 datos
// const conjunto1_example = [1,2,3,4,5];
const conjunto1_conrrect = [1,2,3,];
const confirmandoConjuntos = (listCon)=> {
  var contentlist;
  if(listCon.length <= 4){
    contentlist = listCon;
  } else {
    console.log("ingresa los datos correctos");
  }
  return contentlist;
}

const promOfProm = (lista1,lista2, lista3)=> {
  //guardo las listas en un arrary!
  const conjuntos = [lista1, lista2, lista3];
  let promedioLista1;
  let promedioLista2;
  let promedioLista3;
  if (conjuntos[i.length] == conjuntos[-i.length]) {

  }
}