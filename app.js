import funciones from './cadena.js';

window.procesar = function (){
    var valor = document.getElementById("entrada").value;
    var text=funciones.mayuscula(valor);
    document.getElementById("sp1").innerHTML=text;
    text = funciones.minuscula(valor);
    document.getElementById("sp2").innerHTML=text;
    text = funciones.invertir(valor);
    document.getElementById("sp3").innerHTML=text;
    text = funciones.tamano(valor);
    document.getElementById("sp4").innerHTML=text;
    text = funciones.esPalindromo(valor);
    document.getElementById("sp5").innerHTML=text;
};

window.app = {

    libs:{
        cadena:procesar
    }
}
