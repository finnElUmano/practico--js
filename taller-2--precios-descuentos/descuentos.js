const calcularPrecioConDescuento = (precio, descuento) => {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
};

const buttonDiscount= () => {
  const inputCupon = document.getElementById("InputCupon");
  let cuponValue = inputCupon.value;
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;
  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = inputDiscount.value;
  const resultC = document.getElementById("resultPrice");

  let descuento;
  let precioConDescuento;

  switch (true) {
    case cuponValue === "cupon1":
      descuento = 25;
      precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
      resultC.innerText = `Cupon Valido! Tu descuento es de: $${precioConDescuento}`
    break;
    case cuponValue === "cupon2":
      descuento = 15;
      precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
      resultC.innerText = `Cupon Valido! Tu descuento es de: $${precioConDescuento}`
    break;
    case cuponValue ===  "cupon3":
      descuento= 5;
      precioConDescuento = calcularPrecioConDescuento(priceValue,descuento);
      resultC.innerText = `Cupon Valido! Tu descuento es de: $${precioConDescuento}`
    break;
    case cuponValue !==  null:
      precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue);
      resultC.innerText = `Tu descuento es de: $${precioConDescuento}`
    break;
    default:
      resultC.innerText = "El cupon ingresado en invalido!"
  }
  
};
