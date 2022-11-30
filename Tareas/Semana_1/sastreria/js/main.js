window.onload = function() {
    var cantidadPersonaIn = document.getElementById('cantidadPersonaIn');
    var cantidadTelaIn = document.getElementById('cantidadTelaIn');
    var calcularBtnSastreria = document.getElementById('calcularBtnSastreria');

    var precioTela = 3550;
    var gastoTelaPersona = 3;

    var resultadoTotalLbl = document.getElementById('resultadoTotalLbl');

    var telaTotalLbl = 0;
    var costoTotalLbl = 0;


    calcularBtnSastreria.onclick = function() {
        cantidadPersona = Number(cantidadPersonaIn.value);
        cantidadTela = Number(cantidadTelaIn.value);

        console.log(cantidadPersona);
        console.log(cantidadTela);

        telaTotalLbl = gastoTelaPersona * cantidadPersona;
        costoTotalLbl = telaTotalLbl * precioTela;

        resultadoTotalLbl.innerHTML = 'La cantidad de tela a comprar es de ' + telaTotalLbl + ' a un costo de ₡' + costoTotalLbl + ' para ' + cantidadPersona + ' personas.';
    }
}