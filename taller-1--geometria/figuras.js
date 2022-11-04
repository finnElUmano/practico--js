// usando arrow function
// Código del cuadrado
console.group("Cuadrados");

const  perimetroCuadrado = (lado) => lado * 4;

const areaCuadrado = (lado) => lado * lado;

console.groupEnd();

// Código del triangulo

console.group("Triangulos");

const perimetroTriangulo = (lado1, lado2, base )=> lado1 + lado2 + base;

const areaTriangulo = (base, altura)=> (base * altura) / 2;

console.groupEnd();

// Codigo del Circulo
console.group("Círculos");
// Radio
//Diámetro
const diametroCirculo = (radio)=> radio * 2;

//PI
const PI = Math.PI;
console.log("Pi es: " + PI);

//Circunferencia
const perimetroCirculo = (radio)=> diametroCirculo(radio) * PI;

//Area
const areaCirculo = (radio)=> (radio * 2) * PI;

console.groupEnd();

// Interactuamos con html
// cuadrado
const calcularPerimetroCuadrado = ()=>{
const input = document.getElementById("InputCuadrado");
const value = input.value;

const perimetro = perimetroCuadrado(value);
alert(perimetro);
};

const calcularAreaCuadrado = ()=>{
const input = document.getElementById("InputCuadrado");
const value = input.value;

const area = areaCuadrado(value);
alert(area);
};
//
// triangulo
const calcularPerimetroTriangulo = ()=> {
  const imput0 = document.getElementById("lado1");
  const imput1 = document.getElementById("lado2");
  const imput2 = document.getElementById("base");
  const value0 = parseInt(imput0.value);
  const value1 = parseInt(imput1.value);
  const value2 = parseInt(imput2.value);

  const perimetro = perimetroTriangulo(value0,value1,value2);
  alert(perimetro);
};
//
const calcularAreaTriangulo = ()=> {
  const input0 = document.getElementById("base");
  const input1 = document.getElementById("altura");
  const value0 = parseInt(input0.value);
  const value1 = parseInt(input1.value);
  const area = areaTriangulo(value0,value1);
  alert(area);
}
// 
//  circulo
//
// Diametro
const calcularDiametrocirculo = ()=> {
const rad = document.getElementById("InputCirculo");
const valor = rad.value;

const diametro = diametroCirculo(valor);
alert(diametro);
};
//
const calcularPerimetroCirculo = ()=> {
const per = document.getElementById("InputCirculo");
const valor = per.value;

const perimetro = perimetroCirculo(valor);
alert(perimetro);
};
//
const calcularAreaCirculo = ()=> {
const are = document.getElementById("InputCirculo");
const valor = are.value;

const area = areaCirculo(valor);
alert(area);
};