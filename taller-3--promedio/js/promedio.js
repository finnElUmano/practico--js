//sacar la media artitmedtica del list1
//  const list1 = [
//    100,
//    200,
//    300,
//    500,
//  ];

const calcMediaAritmetica =(list)=> {
  //  let sumaList = 0; 
  //  for (let i = 0; i < list.length; i++) {
    //  sumaList = sumaList + list[i];
  //  }
  const sumaList = list.reduce(
    function(valorAcumulado = 0, newElement) {
      return valorAcumulado + newElement;
    }
  );
  const promedioList = sumaList / list.length;
  return promedioList;
};