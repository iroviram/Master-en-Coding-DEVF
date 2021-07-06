// Paso 1: Tener los arreglos con las excusas

const columnaA = [
    "En cuanto arreglemos el goteo de recursos", 
    "En cuanto completemos las pruebas", 
    "En cuanto hayamos optimimzado el codigo", 
    "Apenas nos arreglen el bug",
    "Cuanto se solvente el problema de instalacion",
    "Cuando averiguemos por que se cae el proceso",
    "Cuando hayamos mejorado el rendimiento",
    "Cuando completemos la restauracion",
    "Apenas instalemos el ultimo parche",
    "En cuanto terminemos la implementacion"
];

const columnaB = [
    "del interfaz XML",
    "del sistema de colas",
    "del buffer de entrada",
    "del gestor de peticiones",
    "de las clases de abstraccion",
    "del recolector de basura",
    "de la nueva version",
    "del cache",
    "de la version customizada",
    "del conversor de protocol" 
];

const columnaC = [
    "del director LDAP",
    "de la maquina virtual Java",
    "del proxy inverso",
    "del gestor de cluster",
    "del broker de objetos distribuido",
    "de la capa de presentacion",
    "del despachador de certificados",
    "de la base de datos",
    "del servidor seguro",
    "del acelerador de transacciones"
];

// Paso 2: Elegir un valor de cada columna

var posicionA = Math.floor(Math.random() * columnaA.length);
var posicionB = Math.floor(Math.random() * columnaB.length);
var posicionC = Math.floor(Math.random() * columnaC.length);
console.log(posicionA);

// Paso 3: Armo mi excusa, concatenado el valor de los arreglos de forma aleatoria

var excusa = columnaA[posicionA] + " " + columnaB[posicionB] + " " + columnaC[posicionC];
document.write(excusa);



