// DECLARANDO MI VARIABLE
var screen = document.getElementById('screen-result');

//let value al hacer clic = 7
function getData(num){
    
    let value = num.value;
    screen.value = screen.value + value; //CONCATENACION
    
}

//console.log(num)

function clean(){
    screen.value = '';
}

function calcular(){
    try{
        screen.value = eval(screen.value)
    } catch(e){ //e = error, puede aparecer contraido como e
        screen.value = 'SYNTAX ERROR'
    }
}