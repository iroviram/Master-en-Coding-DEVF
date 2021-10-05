//? 02.Escriba una función de JavaScript para eliminar. Valores 'nulo', '0', '""', 'falso', 'indefinido' y 'NaN' de una matriz. Ej removeFalsy([NaN, 0, 15, false, -22, '',undefined, 47, null]) resultado ----> [15, -22, 47]

const values = [NaN, 0, 15, false, -22, '',undefined, 47, null];

const removeFalsy = values.filter(Boolean);
console.log(removeFalsy)