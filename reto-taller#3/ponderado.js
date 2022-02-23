//Un caso de uso de la media ponderada es el cálculo
// de notas académicas cuando cada materia o asignatura
// otorga diferentes “créditos”.
//esta es la formula
const notes = [
  {
    course: "Educación Física",
    note: 10,
    credit: 2,
  },
  {
    course: "Programación",
    note: 8,
    credit: 5,
  },
  {
    course: "Finanzas personales",
    note: 7,
    credit: 5,
  },
];
//multiplicar cada número de la lista por su peso
const notasConCredito = notes.map(function(noteObjetc) {
  return noteObjetc.note * noteObjetc.credit;
});
//console.log(notasConCredito);
//Sumar todos los elementos del arrenglo de elementos
//multiplicados por su peso!
const sumOfNotesWithCredit = notasConCredito.reduce(
  (a=0, b) => a + b
);
console.log(sumOfNotesWithCredit);
//sumar todos los pesosss(creditos)!
const creditos = notes.map((noteObjetc)=> noteObjetc.credit);
const sumaOfcreditos = creditos.reduce((a=0,b)=> a+b);
//hacer la divicion entre ambas sumas!
const promedioPonderadoNotasConCreditos = sumOfNotesWithCredit / sumaOfcreditos;

console.log(promedioPonderadoNotasConCreditos);