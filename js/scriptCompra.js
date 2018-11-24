document.addEventListener("DOMContentLoaded", function () {

    /*Cargar imagen de fondo*/
    leerJSONLocal('json.json', function (text) {
        var jsonParsed = JSON.parse(text);
        var url_string = window.location.href;
        var url = new URL(url_string);
        var juegoDeURL = url.searchParams.get("juego");
        var indiceJuego = jsonParsed.findIndex(obj => obj.nombre==juegoDeURL);
        var bodyCompra = document.getElementById("bodyCompra");
        bodyCompra.style.backgroundImage += "url( "+ jsonParsed[indiceJuego].imagenFondo + ")";
    });
    

    var cantidadJuegos = document.getElementById("cantidadJuegos")
    var botonFisico = document.getElementById("selectFisico");
    var botonDigital = document.getElementById("selectDigital");
    var metodoEnvio = document.getElementById("metodoEnvio");

    var nombreComprador = document.getElementById("nombreComprador");
    var apellidoComprador = document.getElementById("apellidoComprador");
    var emailComprador = document.getElementById("emailComprador");

    var desgloseCantidad = document.getElementById("desgloseCantidad");
    var desgloseMetodo = document.getElementById("desgloseMetodo");
    var desgloseImpuestos = document.getElementById("desgloseImpuestos");
    var realizarCompra = document.getElementById("realizarCompra");

    realizarCompra.addEventListener("click", function(){
        if(nombreComprador.value != "" && apellidoComprador.value != "" && emailComprador.value != "")
        {
            alert("Compra efectuada correctamente");
        }
    });

    CalcularSubtotal();

    /*Listeners a todos los elementos que puedan modificar el precio*/

    cantidadJuegos.addEventListener("click", function () {
        CalcularSubtotal();
    })

    botonFisico.addEventListener("change", function () {

        if (botonFisico.checked) 
        {
            divDireccionMetodo.style.display = 'block';
        }
        CalcularSubtotal();
    });

    botonDigital.addEventListener("change", function () {

        if (botonDigital.checked) 
        {
            divDireccionMetodo.style.display = 'none';
        }
        CalcularSubtotal();
    });

    metodoEnvio.addEventListener("change", function () {
        CalcularSubtotal();
    })

    function CalcularSubtotal() 
    {
        leerJSONLocal('json.json', function (text) {
            var jsonParsed = JSON.parse(text);

            var precioJuego = jsonParsed[0].precio;

            var cantidadJuegos = document.getElementById("cantidadJuegos");
            var botonFisico = document.getElementById("selectFisico");
            var subtotalAMostrar = document.getElementById("subtotal");
            var desgloseBase = document.getElementById("desgloseBase");
            var desgloseCantidad = document.getElementById("desgloseCantidad");
            var metodoE = document.getElementById("metodoE");
            var desgloseMetodo = document.getElementById("desgloseMetodo");
            var desgloseImpuestos = document.getElementById("desgloseImpuestos");

            var cantidadJuegos = cantidadJuegos.value;
            var PrecioXCantidad = precioJuego * cantidadJuegos;
            var subtotal = PrecioXCantidad;


            if (botonFisico.checked) {

                var metodoEnvio = document.getElementById("metodoEnvio");
                var valorSeleccionado = metodoEnvio.options[metodoEnvio.selectedIndex].text;

                if (valorSeleccionado === "Común") {
                    subtotal = PrecioXCantidad * 1.005;
                }
                else if (valorSeleccionado === "Especial") {
                    subtotal = PrecioXCantidad * 1.02;
                }
                else if (valorSeleccionado === "Premium") {
                    subtotal = PrecioXCantidad * 1.05;
                }
                else {
                    subtotal = PrecioXCantidad * 1.005;
                }
            }

            var impuesto = 1.22;
            var total = subtotal * impuesto;


            /*Desglose de precios*/

            desgloseBase.innerHTML = "U$D " + precioJuego;
            desgloseCantidad.innerHTML = cantidadJuegos;

            metodoE.style.display = "none";

            if(botonFisico.checked){
                metodoE.style.display = "block";
                desgloseMetodo.innerHTML = ("U$D " + (subtotal-PrecioXCantidad).toFixed(2));
            }
            
            desgloseImpuestos.innerHTML = "U$D " + (total-subtotal).toFixed(2);
            subtotalAMostrar.innerText = "Total: U$D " + total.toFixed(2);

        });

    }

});