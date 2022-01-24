const list1 = [
  1,
  2,
  3,
  1,
  2,
  3,
  4,
  2,
  2,
  2,
  1,
];
const listAcount = {};
list1.map(
  //viendo si ya existe el elemento
  function(elemento) {
    if(listAcount[elemento]){
        listAcount[elemento] += 1; //contando cuandas veses esta el elemento
    }else {
      listAcount[elemento] = 1; //solo a aparecido una ves
    }
  }
);
//  --> {1: 3, 2: 5, 3: 2, 4: 1}

// convertir este objerto "const listAcount = {};" a un array  con arrays !!
// ordenando el array mas grande a partir de la segundo posision del array
listAcount_array = Object.entries(listAcount).sort(
  function(elementA, elementB){
    return elementA[1] - elementB[1];
  }
); 
const moda = listAcount_array[listAcount_array.length -1];