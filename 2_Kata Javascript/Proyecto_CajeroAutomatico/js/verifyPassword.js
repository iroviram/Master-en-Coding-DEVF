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