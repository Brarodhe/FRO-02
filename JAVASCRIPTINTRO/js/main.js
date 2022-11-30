//console.log('2. JS en el main.js');

//var nombre = 'Esteban';
//var apellido; // acá se declara la variable
//var edad = 30;
//var usaLentes = true;

//apellido = 'Padilla'; // acá se inicializa la variable

//var mensaje = nombre + ' ' + apellido + ' ' + edad;{}

//console.log(nombre, apellido, edad);
//console.log(mensaje);

//Ejercicio 1

//window.onload = function() {
//    var precioNeto = 0;
//    var precioBruto = 100;
//    var impuesto = 13;
//    var subTotal = precioBruto * (impuesto / precioBruto);
//    var total = precioBruto + subTotal;
//    console.log(total);

//    console.log(window);
//}

window.onload = function() {
    var precioBrutoIn = document.getElementById('precioBrutoIn');
    var calcularBtn = document.getElementById('calcularBtn');
    var resultadoLbl = document.getElementById('resultadoLbl');

    var precioBruto = 0;
    var precioNeto = 0;
    var impuesto = 13;
    var subTotal = 0;

    calcularBtn.onclick = function() {
        precioBruto = Number(precioBrutoIn.value);
        subTotal = precioBruto * (impuesto / 100);
        precioNeto = precioBruto + subTotal;
        resultadoLbl.innerHTML = 'Total: ' + precioNeto;
    }

}