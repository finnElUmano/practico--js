const calcularPrecioConDescuento = (precio, descuento) => {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
};

const cupons = ["cupon1", "cupon2", "cupon3"];

const buttonCupon = () => {
  const inputPrice1 = document.getElementById("InputPrice");
  const priceValue1 = inputPrice1.value;
  const inputCupon = document.getElementById("InputCupon");
  const cuponValue = inputCupon.value;

  let discountValue;

  switch (cuponValue) {
    case cupons[0]:
      discountValue =25;
    break;
    case cupons[1]:
      discountValue = 15;
    break;
    case cupons[2]:
      discountValue = 5;
    break;
  }

  const precioConCupon = calcularPrecioConDescuento(
    priceValue1,
    discountValue,
  );

  const resultC = document.getElementById("resultCupon");
  resultC.innerText = "El precio con cupon es: $" + precioConCupon;
};

const buttonDiscount = () => {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;
  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = inputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    discountValue
  );

  const resultP = document.getElementById("resultDiscount");
  resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
};
