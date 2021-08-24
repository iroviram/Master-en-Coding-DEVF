//? VERIFICAR SI TIENE UN VALOR Y SI NO ASIGNAR UN VALOR POR DEFECTO

const myConst = "Hay algo";
//* "||" se ocupa cuando queremos tener un valor por defecto
const myOtraConst = myConst || "Valor por default";
console.log("Checando valores #1",myOtraConst)

const myConst2 = undefined;
const myOtraConst2 = myConst2 || "Valor por default";
console.log("Checando valores #2",myOtraConst2)

//falsy --> Son valores que JS interpreta como false
// "" --> false;
// 0 --> false;

const myConst3 = "";
const myOtraConst3 = myConst3 || "Valor por default";
console.log("Checando valores #3",myOtraConst3)

const myConst4 = 0;
const myOtraConst4 = myConst4 || "Valor por default";
console.log("Checando valores #4",myOtraConst4)