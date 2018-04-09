function mayuscula(cadena){
    return cadena.toUpperCase();
}

 function minuscula(cadena){
    return cadena.toLowerCase();
}

function invertir(cadena){
    return cadena.split("").reverse().join("");
}

function tamano(cadena){
    return cadena.length;
}

function esPalindromo(cadena){
    var aux = cadena.split("").reverse().join("").toLowerCase();
    if(aux===cadena.toLowerCase()){
        return "Palindromo";
    }
    return "No es Palindromo";
}

export default {mayuscula,minuscula,invertir,tamano,esPalindromo};