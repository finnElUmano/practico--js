const conjunto1 = [1,2,3,4];
const conjunto2 = [3,5,7,9 ];
const conjunto3 = [6,7,20 ];
//const calcProm = conjunto1.reduce((a=0,b)=> a + b);
const calcProm =(list)=> {
  const sumList = list.reduce((a=0, b)=> a + b);
  const promList = sumList / list.length;
  return promList;
};

const promOfProm =(list1,list2,list3)=> {
  const conj1 = calcProm(list1);
  const conj2 = calcProm(list2);
  const conj3 = calcProm(list3);
  const conjuntos = [[conj1],[conj2],[conj3]];
  const promedioDepromedio = calcProm(conjuntos) / conjuntos.length; 
  return promedioDepromedio ;

}
//tarea pendiente