window.onload = function() {
    //var precioProducto1 = prompt('Ingrese el producto');
    //var precioProducto2 = prompt('Ingrese el producto');
    //var precioProducto3 = prompt('Ingrese el producto');
    var precioProductoIn1 = document.getElementById('precioProductoIn1');
    var precioProductoIn2 = document.getElementById('precioProductoIn2');
    var precioProductoIn3 = document.getElementById('precioProductoIn3');
    var calcularBtnPulperia = document.getElementById('calcularBtnPulperia');
    var montoTotalLbl = document.getElementById('montoTotalLbl');
    var precioNeto = 0;
    var impuesto = 13;
    var subTotal = 0;

    calcularBtnPulperia.onclick = function() {
        producto1 = Number(precioProductoIn1.value);
        producto2 = Number(precioProductoIn2.value);
        producto3 = Number(precioProductoIn3.value);

        sumaProductos = producto1 + producto2 + producto3;
        subTotal = sumaProductos * (impuesto / 100);
        precioNeto = sumaProductos + subTotal;
        montoTotalLbl.innerHTML = 'El monto final a pagar es: ' + precioNeto.toFixed(2);
    }
}