var cuentas = [
    { nombre: "Mali", saldo: 200, password: 'helloworld' },
    { nombre: "Gera", saldo: 290, password: 'l33t' },
    { nombre: "Maui", saldo: 67, password: '123' }
];

function selectAccount(accountName) {
    if (accountName.toLowerCase() == cuentas[0].nombre.toLowerCase()) {
        return accountNumber = 0;
    } else if (accountName.toLowerCase() == cuentas[1].nombre.toLowerCase()){
        return accountNumber = 1;
    } else if (accountName.toLowerCase() == cuentas[2].nombre.toLowerCase()) {
        return accountNumber = 2;
    } else {
        alert("Cuenta invalida. Favor de volver a cargar la pagina e ingresar cuenta existente.")
    }
}

var account = prompt("Ingresa el nombre de tu cuenta:");
selectAccount(account)

function verifyPassword(accountPassword) {

    let isTrue = true;

    while(isTrue){
        if (accountPassword == cuentas[accountNumber].password){
            isTrue=false;
            return accessGranted = true;
        } else {
            console.log("password incorrecto")
            accountPassword = prompt("Contrasena incorrecta, vuelve a intentarlo.\nIngresa tu contrasena:");
        }
    }
}

var password = prompt(`Hola ${cuentas[accountNumber].nombre}\nIngresa tu contrasena:`);
verifyPassword(password)

function menuScreen(access){
    if (access) {
        menuSelected = parseInt(prompt("Escribe el numero de tu eleccion.\n1. Consultar saldo\n2. Ingresar monto\n3. Retirar monto\nIngresa cualquier otra cosa o clic en cancelar para salir."));  
        return menuSelected;
    } else {
        console.log ("Exit Menu");
    }
}

menuScreen(accessGranted)

function menuSelectionResult(menuSelection) {
    if (menuSelection == 1) {
        console.log(`Tu saldo es de: $${cuentas[accountNumber].saldo} MXN`)
    } else if(menuSelection == 2){
        var depositar = Math.abs(parseInt(prompt('Ingresa la cantidad a depositar:')))
        return deposit(depositar);
    } else if(menuSelection == 3){
        var retiro = Math.abs(parseInt(prompt('Ingresa la cantidad a retirar:')))
        return withdraw(retiro);
    } else {
        console.log('exit');
    }
}

menuSelectionResult(menuSelected)

function deposit(depositAmount) {
    let isTrue = true;

    while(isTrue){
        if (cuentas[accountNumber].saldo + depositAmount <=900){
            isTrue=false;
            console.log(`Retiraste: ${depositAmount}`)
            cuentas[accountNumber].saldo = cuentas[accountNumber].saldo + depositAmount;
            console.log(`Tu saldo actual es de: $${cuentas[accountNumber].saldo} MXN`)
        } else if (cuentas[accountNumber].saldo + depositAmount > 900){
            depositAmount = Math.abs(parseInt(prompt(`No puedes tener mas de $900 MXN en tu cuenta.\nTu saldo actual es: $${cuentas[accountNumber].saldo} MXN\nIngresa otra cantidad a depositar:`)))
        } else{
            return 'exit'
        }
    }
}

function withdraw(withdrawalAmount) {

    let isTrue = true;

    while(isTrue){
        if (withdrawalAmount <= cuentas[accountNumber].saldo && cuentas[accountNumber].saldo - withdrawalAmount >=10){
            isTrue=false;
            console.log(`Retiraste: ${withdrawalAmount}`)
            cuentas[accountNumber].saldo = cuentas[accountNumber].saldo - withdrawalAmount;
            console.log(`Tu saldo actual es de: $${cuentas[accountNumber].saldo} MXN`)
        } else if (withdrawalAmount <= cuentas[accountNumber].saldo && cuentas[accountNumber].saldo - withdrawalAmount < 10){
            withdrawalAmount = parseInt(prompt(`Tu cuenta no puede quedar con menos de $10 MXN.\nTu saldo actual es: $${cuentas[accountNumber].saldo} MXN\nIngresa otra cantidad a retirar:`))
        } else if (withdrawalAmount > cuentas[accountNumber].saldo) {
            console.log(`La cantidad a retirar es mayor a tu saldo actual: $${cuentas[accountNumber].saldo} MXN`)
            withdrawalAmount = parseInt(prompt('Ingresa otra cantidad a retirar:'))
        } else{
            return 'exit'
        }
    }
}