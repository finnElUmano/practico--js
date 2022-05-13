//obteniedo solo salarios de "sarios.js" colombia
//Mediana Gerneral
const salColom = colombia.map((personita) => personita.salary);
//ordenando los salarios "salColom"
const orderSalColom = salColom.sort( (a,b) => a - b );
//funciones helpers= no son parte del negocio pero la nesesitamos para
// hacer calculos!!
//media --> es par o inpar?
const esPar = numero => numero % 2 === 0;
  //function espar(numero) {
  //  return (numero % 2 === 0);
  //}
//calcular mediana
const calcMediaAritmetica =(list)=> {
  const sumaList = list.reduce(
    function(valorAcumulado = 0, newElement) {
      return valorAcumulado + newElement;
    }
  );
  const promedioList = sumaList / list.length;
  return promedioList;
};
//sacando la mediana aciendo la funcion!
const salariosMediana = lista => {
  const mitad = parseInt(lista.length / 2)
  
  if (esPar(lista.length)) {
    const personaMitad1 = lista[mitad - 1];
    const personaMitad2 = lista[mitad];

    const mediana = calcMediaAritmetica([personaMitad1,personaMitad2]);
    return mediana;
  } else {
    const personaMitad = lista[mitad];
    return personaMitad;
  }
}
const medianaGerneralColombia = salariosMediana(orderSalColom);

//Mediana top 10% 
const spliceStart = (orderSalColom.length * 90) / 100;
const spliceCount = orderSalColom.length - spliceStart;

const salariosColomTop10 = orderSalColom.splice(spliceStart, spliceCount);

const medianaTop10Colombia = salariosMediana(salariosColomTop10);

console.log({
  medianaGerneralColombia,
  medianaTop10Colombia,
});