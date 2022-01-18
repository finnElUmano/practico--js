const calcularPrecioConDescuento = (precio, descuento) => {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
};

const calcularPrecioConCupon = (precio, descuento, cupon) => {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  const precioConDescuentoCupon = precioConDescuento - cupon;

  if(precioConDescuentoCupon) {
    return (`El precio total con cupon es: $ ${precioConDescuentoCupon}.`)
  } else {
    return (`Error! cupon invalido!`);
  }
};

const cupons = ["cupon1", "cupon2", "cupon3"];

const buttonCupon = () => {
  const inputCupon = document.getElementById("InputCupon");
  const cuponValue = inputCupon.value;
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;
  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = inputDiscount.value;

  let descuento;

  switch (discountValue) {
    case "cupon1":
      descuento =25;
    case "cupon2":
      descuento = 15;
    case "cupon3":
      descuento = 5;
  }

  const precioConCupon = calcularPrecioConCupon(
    priceValue,
    discountValue,
    descuento
  );

  const resultC = document.getElementById("resultPrice");
  resultC.innerText = "El precio con cupon son: $" + precioConCupon;
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

  const resultP = document.getElementById("resultPrice");
  resultP.innerText = "El precio con descuento son: $" + precioConDescuento;
};
