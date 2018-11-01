document.addEventListener("DOMContentLoaded", function () {

    var cantidadJuegos = document.getElementById("cantidadJuegos")
    var botonFisico = document.getElementById("selectFisico");
    var botonDigital = document.getElementById("selectDigital");
    var metodoEnvio = document.getElementById("metodoEnvio");



    CalcularSubtotal();

    cantidadJuegos.addEventListener("click", function () {
        CalcularSubtotal();
    })

    botonFisico.addEventListener("change", function () {

        if (botonFisico.checked) {
            divDireccionMetodo.style.display = 'block';
        }
        CalcularSubtotal();
    });

    botonDigital.addEventListener("change", function () {

        if (botonDigital.checked) {
            divDireccionMetodo.style.display = 'none';
        }
        CalcularSubtotal();
    });

    metodoEnvio.addEventListener("change", function () {
        CalcularSubtotal();
    })

    function CalcularSubtotal() {

        leerJSONLocal('json.json', function (text) {
            var jsonParsed = JSON.parse(text);

            var precioJuego = jsonParsed[0].precio;

            var cantidadJuegos = document.getElementById("cantidadJuegos");
            var botonFisico = document.getElementById("selectFisico");
            var subtotalAMostrar = document.getElementById("subtotal");

            var subtotal = precioJuego;
            var cantidadJuegos = parseInt(cantidadJuegos.value, 10)
            subtotal = subtotal * cantidadJuegos;

            if (botonFisico.checked) {

                var metodoEnvio = document.getElementById("metodoEnvio");
                var valorSeleccionado = metodoEnvio.options[metodoEnvio.selectedIndex].text;

                if (valorSeleccionado === "Común") {
                    subtotal = subtotal * 1.005;
                }
                else if (valorSeleccionado === "Especial") {
                    subtotal = subtotal * 1.02;
                }
                else if (valorSeleccionado === "Premium") {
                    subtotal = subtotal * 1.05;
                }
                else {
                    subtotal = subtotal * 1.005;
                }
            }

            var impuesto = 1.22;
            subtotal = subtotal * impuesto;

            subtotalAMostrar.innerText = "Subtotal: U$D " + subtotal.toFixed(2);

        });

    }

});