let numeros = [1,2,4,5,6,4];
const  butonCalcModa =(numbers)=> {
  const listaCuenta = {};
  numbers.map(
    function(elemento){
      if(listaCuenta[elemento]){
        listaCuenta[elemento] += 1;
      }else {
        listaCuenta[elemento] = 1;
      }
    }
  );
  console.log(listaCuenta);
  console.log(Object.entries(listaCuenta));
  funArray = Object.entries(listaCuenta).sort(
    function(a , b){
      return a[1] - b[1];
    }
  );
  const moda = funArray[funArray.length - 1];
  return moda;
}
butonCalcModa(numeros);