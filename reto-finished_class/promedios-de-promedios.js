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
//console.log(calcProm(conjunto4));
///////////validacion si tiene 4 datos
//const conjunto1_example = [1,2,3,4,5];
//const conjunto1_conrrect = [1,2,3,];
const confirmandoConjuntos = (listCon)=> {
  var contentlist;
  if(listCon.length <= 4){
    contentlist = listCon;
  } else {
    console.log("ingresa los datos correctos");
  }
  return contentlist;
}
//console.log(confirmandoConjuntos(conjunto1_conrrect));
//

const promOfProm = (lista1)=> {
  const rValor= confirmandoConjuntos(lista1);
  const proValor = calcProm(rValor);
  return proValor;
}
//console.log(promOfProm(conjunto2));

const conjunto1 = [1,2,3,4,];
const conjunto2 = [7,8,3,4 ];
const conjunto3 = [9,5,20,15];

const allProm = (list1, list2, list3)=> {
  const conjuntos = [list1, list2, list3];
  let resulConjuntos= [];
  conjuntos.map(
    promOfProm(
      function(elemento)
    )
  );
  for(i = 0; i < conjuntos.length; i++){
    resulConjuntos += promOfProm(conjuntos[i]);
  }

}
console.log(allProm(conjunto1,conjunto2,conjunto3))
//pendiente