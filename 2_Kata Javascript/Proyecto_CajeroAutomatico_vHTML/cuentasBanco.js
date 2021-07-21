var cuentas = [
    { nombre: "Mali", saldo: 200, password: 'helloworld' },
    { nombre: "Gera", saldo: 290, password: 'l33t' },
    { nombre: "Maui", saldo: 67, password: '123' }
];

class accounts{
    constructor(nombre,saldo,password){
        this.nombre = nombre;
        this.saldo = saldo;
        this.password = password;
    }
}

function accountSelect(){
    var account = document.getElementById('account-name').value;
    selectAccount(account)
}

function selectAccount(accountName) {
    if (accountName == cuentas[0].nombre) {
        accountNumber = 0;
        passwordVerification();
    } else if (accountName == cuentas[1].nombre){
        accountNumber = 1;
        passwordVerification();
    } else if (accountName == cuentas[2].nombre) {
        accountNumber = 2;
        alert('Maui')
        passwordVerification();
    } else {
        alert("Cuenta invalida. Favor de volver a cargar la pagina e ingresar cuenta existente.")
    }
}

function passwordVerification(){
    var password = prompt(`Hola ${cuentas[accountNumber].nombre}\nIngresa tu contrasena:`);
    verifyPassword(password)
}

function verifyPassword(accountPassword) {

    let isTrue = true;

    while(isTrue){
        if (accountPassword == cuentas[accountNumber].password){
            isTrue=false;
            console.log("true")
            window.location.href = 'menu.html';
            sessionStorage.setItem("accountNumber",accountNumber);
        } else {
            alert("Cuenta invalida. Favor de volver a cargar la pagina e ingresar cuenta existente.")
        }
    }
}

var accountNumber = sessionStorage.getItem("accountNumber");
console.log(accountNumber)

function balance(){
    document.getElementById("resultado").innerHTML = ' ';
    document.getElementById("resultado2").innerHTML = ' ';
    document.getElementById("resultado").innerHTML = `Tu saldo actual es: $${cuentas[accountNumber].saldo}MXN`;
    document.getElementById('money').value = '';
}

function deposit() {
    let isTrue = true;
    var depositAmount = parseInt(document.getElementById('money').value);
    resultado
    document.getElementById("resultado").innerHTML = ' ';
    document.getElementById("resultado2").innerHTML = ' ';
    while(isTrue){
        if (cuentas[accountNumber].saldo + depositAmount <=900){
            isTrue=false;
            document.getElementById("resultado").innerHTML = `Depositaste: ${depositAmount}<br>`;
            cuentas[accountNumber].saldo = cuentas[accountNumber].saldo + depositAmount;
            document.getElementById("resultado2").innerHTML = `Tu saldo actual es de: $${cuentas[accountNumber].saldo} MXN`;
            document.getElementById('money').value = '';
        } else if (cuentas[accountNumber].saldo + depositAmount > 900){
            document.getElementById("resultado").innerHTML = `No puedes tener mas de $900 MXN en tu cuenta.<br>Tu saldo actual es: $${cuentas[accountNumber].saldo} MXN<br>Intenta depositando una cantidad menor.`
            document.getElementById('money').value = '';
            return
        } else{
            document.getElementById('money').value = '';
            return 'exit'
        }
    }
}

function withdraw(withdrawalAmount){

    let isTrue = true;
    var withdrawalAmount = parseInt(document.getElementById('money').value);
    resultado
    document.getElementById("resultado").innerHTML = ' ';
    document.getElementById("resultado").innerHTML = ' ';
    document.getElementById("resultado2").innerHTML = ' ';
    while(isTrue){
        if (withdrawalAmount <= cuentas[accountNumber].saldo && cuentas[accountNumber].saldo - withdrawalAmount >=10){
            isTrue=false;
            document.getElementById("resultado").innerHTML =  `Retiraste: ${withdrawalAmount}`;
            cuentas[accountNumber].saldo = cuentas[accountNumber].saldo - withdrawalAmount;
            document.getElementById("resultado2").innerHTML = `Tu saldo actual es de: $${cuentas[accountNumber].saldo} MXN`;
            document.getElementById('money').value = '';
        } else if (withdrawalAmount <= cuentas[accountNumber].saldo && cuentas[accountNumber].saldo - withdrawalAmount < 10){
            document.getElementById("resultado").innerHTML = `Tu cuenta no puede quedar con menos de $10 MXN.<br>Tu saldo actual es: $${cuentas[accountNumber].saldo} MXN<br>Ingresa otra cantidad a retirar`;
            document.getElementById('money').value = '';
            return
        } else if (withdrawalAmount > cuentas[accountNumber].saldo) {
            document.getElementById("resultado").innerHTML = `La cantidad a retirar es mayor a tu saldo actual: $${cuentas[accountNumber].saldo} MXN<br>Intenta retirando una cantidad menor.`;
            document.getElementById('money').value = '';
            return
        } else{
            document.getElementById('money').value = '';
            return 'exit'
        }
    }
}