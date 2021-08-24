//? DESTRUCTURACION
//* Nos permite evitar repetir el nombre si se llaman igual

//? DESTRUCTURACION DE OBJETOS

const fruta = {
    id: 1,
    name: 'Manzana',
    color: 'Rojo',
    precio: 30
};

console.log(fruta);

//*Estos son equivalentes
//const name = fruta.name;
//const {name} = fruta;
//console.log(name);

//? Que pasaria si quisiera sacar el valor de todos los elementos
/* const name = fruta.name;
const id = fruta.id;
const color = fruta.color;
const precio = fruta.precio; */
//* Estas 4 lineas son lo mismo que esta siguiente destructurada
const {name, id, color, precio} = fruta;
console.log(name,id,color,precio)

//? DESTRUCTURACION DE ARREGLO
const verduras = ['Cebolla','Lechuga','Pepinos','Cilantro'];

// La forma de destructurar arreglos es con [ ] en vez de { }
// Para destructurar arreglos, EL ORDEN SE TIENE QUE RESPETAR para que funcione.

const[laCebolla,laLechuga,elPepino,elCilantro] = verduras;
//* Esto equiovale a haber hecho:
/* const laCabello = verduras[0];
const laLechuga = verduras[1];
const elPepino = verduras[2];
const elCilantro = verduras[3]; */
console.log(laCebolla)
console.log(elPepino)

//* Aunque solo hayamos usado 2, necesitamos declararlos todos, porque el orden si importa.
//* Un tip es usar "_" guion bajo...
const [laCabello, _, elPepino, elCilantro] = verduras;