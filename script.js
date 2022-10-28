const letras = ["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
const divisor = 23;

function validar_DNI() {
    const regEx = new RegExp("^[0-9]{8}[\s|\-|\/]?[a-zA-Z]$");
    const p = document.querySelector("#validar_letra .resultado");
    let DNI = document.getElementById("DNI_completo").value;
    if (regEx.test(DNI)) {
        //Comprobar si la letra es correcta
        const numero = DNI.slice(0,7);
        const letra = DNI.slice(-1).toUpperCase();
        const resto = parseInt(DNI)%divisor;
        const letra_correcta = letras[resto];
        if (letra == letra_correcta) {
            p.innerHTML = "La letra de ese DNI es correcta."
        } else {
            p.innerHTML = "La letra de ese DNI no es válida.<br>El DNI correcto sería " + numero + letra_correcta + ".";
        }
        
    } else {
        //Devolver mensaje de error
        p.innerHTML = "Un DNI válido se compone de 8 dígitos y una letra.";
    }
}

function generar_DNI() {
    const regEx = new RegExp("^[0-9]{8}$");
    const p = document.querySelector("#generar_letra .resultado");
    let DNI = document.getElementById("DNI_sin_letra").value;
    if (regEx.test(DNI)) {
        //Devolver DNI completo con letra
        const resto = parseInt(DNI)%divisor;
        const letra = letras[resto];
        DNI = DNI.toString() + letra;
        p.innerHTML = DNI;
    } else {
        //Devolver mensaje de error
        p.innerHTML = "Un DNI válido se compone de 8 dígitos numéricos.";
    }
} 