// Código del cuadrado
console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden " + ladoCuadrado + "cm");

const  perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es " + areaCuadrado + "cm²"); 

console.groupEnd();

// Código del triangulo


console.group("Triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log("Los lados del Triangulo miden: " 
  + ladoTriangulo1 
  + "cm, " 
  + ladoTriangulo2 
  + "cm, " 
  + baseTriangulo 
  + "cm"
);

const alturaTriangulo =  5.5;
console.log("La altura del triángulo es de: " + alturaTriangulo + "cm")

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perímetro del Triangulo es " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del Triangulo es " + areaTriangulo + "cm²"); 

console.groupEnd();

// Codigo del Circulo
console.group("Círculos");

// Radio
const radioCirculo = 4;
console.log("El radio del Cículo es: " + radioCirculo + "cm");

//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del Cículo es: " + diametroCirculo + "cm");

//PI
const PI = Math.PI;
console.log("Pi es: " + PI);

//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del Cículo es: " + perimetroCirculo + "cm");

//Area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del Cículo es: " + areaCirculo + "cm²");

console.groupEnd();