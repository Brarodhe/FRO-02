//window.addEventListener('load', init, false);
window.onload = init;

function init() {
    var nombreIn = document.getElementById('nombreIn');
    var apellidoIn = document.getElementById('apellidoIn');
    var notaIn = document.getElementById('notaIn');
    var emailIn = document.getElementById('emailIn');
    var agregarBtn = document.getElementById('agregarBtn');
    var estudiantesSlt = document.getElementById('estudiantesSlt');

    agregarBtn.onclick = onAgregarBtn;

    var nombres = [];
    var apellidos = [];
    var notas = [];
    var emails = [];

    estudiantesSlt.innerHTML = '';

    function onAgregarBtn() {
        var nombre = nombreIn.value;
        var apellido = apellidoIn.value;
        var nota = notaIn.value;
        var email = emailIn.value;

        nombres.push(nombre);
        apellidos.push(apellido);
        notas.push(nota);
        emails.push(email);

        nombreIn.value = '';
        apellidoIn.value = '';
        emailIn.value = '';
        notaIn.value = '';

        nombres.forEach(llenarEstudiantesSlt);
        console.log(nombres);

        estudiantesSlt.innerHTML = '';
    }

    function llenarEstudiantesSlt(elemento, indice) {

        var option = document.createElement('option');
        estudiantesSlt.appendChild(option);
        option.innerHTML = nombres(indice);

    }
}