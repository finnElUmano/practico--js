const precioOriginal = 120;
const descuento = 18;

const calcularPrecioConDescuento =(precio, descuento)=>{
const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
return precioConDescuento;
}

const buttonDiscount = ()=> {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;
  
  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = inputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);
  
  const resultP = document.getElementById("resultPrice");
  resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
}

//console.log({
//  precioOriginal,
//  descuento,
//  porcentajePrecioConDescuento,
//  precioConDescuento, 
//});