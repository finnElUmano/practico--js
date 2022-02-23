//obteniedo solo salarios de "sarios.js" colombia
const salColom = colombia.map((personita) => personita.salary);

//ordenando los salarios "salColom"
const orderSalColom = salColom.sort( (a,b) => a - b );

//media --> es par o inpar?
const esPar = numero => numero % 2 === 0;

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

console.log(
  salariosMediana(orderSalColom)
);