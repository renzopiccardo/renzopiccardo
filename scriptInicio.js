document.addEventListener("DOMContentLoaded", function () {

    leerJSONLocal('json.json', function (text) {

        var jsonParsed = JSON.parse(text);
        var ul = document.getElementById("ulJuegos");

        for (var i = 0; i < jsonParsed.length; i++) {
            ul.innerHTML += '<li class="juegoLI"><a href="juegoDetallado.html?juego=' + jsonParsed[i].nombre + '"><article class="juego"><figure class="imagenLI"><img src="' + jsonParsed[i].imagen + '" alt="' + "portada de " + jsonParsed[i].nombre + '"><figcaption class="figcaptionJuego"> ' + jsonParsed[i].nombre + '</figcaption></figure><p class="pJuego">' + jsonParsed[i].descripcionCorta + '</p><div class="tag">'+ 'U$D ' + jsonParsed[i].precio +'</div></article></a></li>';
        }

    });


    document.getElementById("filtroTexto").addEventListener("change", function () {
        filtrarJuegos();
    });

    /*
    document.getElementById("vistaCompacta").addEventListener("click", function(){

    })
    */


});

function filtrarJuegos() {
    // Variables
    var input, filtro, lis, a, i;
    input = document.getElementById("filtroTexto");
    lis = document.getElementsByClassName("juegoLI");
    filtro = input.value.toUpperCase();

    // Loopear entre todos los elementos de la lista y ocultar los que no coinciden con la busqueda
    for (i = 0; i < lis.length; i++) {
        a = lis[i].getElementsByClassName("figcaptionJuego")[0];

        if (a.innerHTML.toUpperCase().indexOf(filtro) > -1) {
            lis[i].style.display = "";
        }
        else {
            lis[i].style.display = "none";
        }
    }
}

function ordenarJuegos() {
    var list, i, switching, b, shouldSwitch, dir, switchcount = 0;
    list = document.getElementById("catalogo");
    switching = true;
    // orden ascendente
    dir = "asc";
    // Loop hasta que no se necesite mas switching
    while (switching) {
        // Empezar diciendo que no se va a hacer switching
        switching = false;
        b = list.getElementsByTagName("li");
        // Loopear entre todos los li
        for (i = 0; i < (b.length - 1); i++) {
            shouldSwitch = false;
            // Checkear si el siguente li tendria que cambiar lugar con el actual
            if (dir == "asc") {
                if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                    //Si el siguiente li es alfabeticamente menor que el actual, indicar switch y cortar el loop
                    shouldSwitch = true;
                    break;
                }
            }
            else if (dir == "desc") {
                if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) {
                    //Si el siguiente li es alfabeticamente mayor que el actual, indicar switch y cortar el loop
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            //Si un switch fue marcado, hacer el switch e indicar que se hizo
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
            //Cada vez que se hace un swiitch, incrementar en 1
            switchcount++;
        }
        else {
            // Si no se hizo switching y la direccion en ascendente, setear la direccion en descendente y hacer el loop de nuevo
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

function vistaCompacta() {
    var fig = document.getElementsByTagName("figcaption");
    var p = document.getElementsByTagName("p");

    for (var i = 0; i < fig.length; i++) {
        fig[i].style.display = 'none';
        p[i].style.display = 'none';
    }
}

function vistaDetallada() {
    var fig = document.getElementsByTagName("figcaption");
    var p = document.getElementsByTagName("p");

    for (var i = 0; i < fig.length; i++) {
        fig[i].style.display = 'block';
        p[i].style.display = 'block';
    }
}