function verifyPassword(accountPassword) {

    let isTrue = true;

    while(isTrue){
        if (accountPassword == 'helloworld'){
            isTrue=false;
            return accessGranted = true;
        } else {
            console.log("password incorrecto")
            accountPassword = prompt("Contrasena incorrecta, vuelve a intentarlo.\nIngresa tu contrasena:");
        }
    }
}

var password = prompt("Ingresa tu contrasena:");
verifyPassword(password)

function menuScreen(access){
    if (access) {
        menuSelected = parseInt(prompt("Escribe el numero de tu eleccion.\n1. Consultar saldo\n2. Ingresar monto\n3. Retirar monto"));  
        return menuSelected;
    } else {
        console.log ("Exit Menu");
    }
}

menuScreen(accessGranted)

function menuSelectionResult(menuSelection) {

    if (menuSelection == 1) {
        console.log('saldo')
    } else if(menuSelection == 2){
        console.log('Ingresar Monto')
    } else if(menuSelection == 3){
        console.log('Retirar monto')
    } else {
        console.log('exit');
    }
}

menuSelectionResult(menuSelected)

/* const cuentaMali = {
    nombre: 'Mali',
    saldo: 200,
    password: 'helloworld',
}

const{nombre,saldo,password} = cuentaMali; */