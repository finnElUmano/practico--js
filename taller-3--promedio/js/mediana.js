const calcMediaAritmetica =(list)=> {
  const sumaList = list.reduce(
    function(valorAcumulado = 0, newElement) {
      return valorAcumulado + newElement;
    }
  );
  const promedioList = sumaList / list.length;
  return promedioList;
}

const calcularMediana =(lista)=> {
  lista.sort((a,b)=> a + b);
  const mitadList = parseInt(lista.length / 2);

  let esPar =(numerito)=>{
    if(numerito % 2 === 0){
      return true
    }else {
      return false
    };
  }

  let mediana;
  
  if(esPar(lista.length)) {
    const element1 = lista[mitadList - 1];
    const element2 = lista[mitadList];
    const promedioElement1and2 = calcMediaAritmetica([
      element1,
      element2,
    ]);
    mediana = promedioElement1and2;
  }else {
    mediana = lista[mitadList];
  }
  return mediana;
};