

document.addEventListener("DOMContentLoaded", function(){

    var botonFisico = document.getElementById("selectFisico");
    var botonDigital = document.getElementById("selectDigital");
    var divDireccionMetodo = document.getElementById("divDireccionMetodo");
    var formComrpa = document.getElementById("form-compra");

    botonFisico.addEventListener("change", function(){

        if(botonFisico.checked){
            divDireccionMetodo.style.display = 'block';
        }
    });

    botonDigital.addEventListener("change", function(){

        if(botonDigital.checked){
            divDireccionMetodo.style.display = 'none';
        }
    });


    


});

function CalcularSubtotal(){
    var cantidadJuegos = document.getElementById("cantidadJuegos");
    var medioPagoCompra = document.getElementById("medioPagoCompra");
    var metodoCompra = document.getElementById("metodoCompra");
    var subtotal = document.getElementById("subtotal");

    function show_selected() {
        var selector = document.getElementById('id_of_select');
        var value = selector[selector.selectedIndex].value;
    
        document.getElementById('display').innerHTML = value;
    }
}