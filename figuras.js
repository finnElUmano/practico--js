// usando arrow function
// Código del cuadrado
console.group("Cuadrados");

const  perimetroCuadrado = (lado) => lado * 4;

const areaCuadrado = (lado)=> lado * lado;

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
const areaCirculo = (radio, radio2)=> (radio * radio2) * PI;

console.groupEnd();

// Interactuamos con html

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