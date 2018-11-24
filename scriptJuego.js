document.addEventListener("DOMContentLoaded", function () {

    leerJSONLocal('json.json', function (text) {

        var tituloHTML = document.getElementById("tituloJuegoHead");

        var bodyJuego = document.getElementById("bodyJuegoDetallado");

        var imagenSliderJuego1 = document.getElementById("imagenSliderJuego1");
        var imagenSliderJuego2 = document.getElementById("imagenSliderJuego2");
        var imagenSliderJuego3 = document.getElementById("imagenSliderJuego3");
        var imagenSliderJuego4 = document.getElementById("imagenSliderJuego4");
        var imagenSliderJuego5 = document.getElementById("imagenSliderJuego5");

        var tituloJuegoH1 = document.getElementById("tituloJuegoH1");
        var iframeJuego = document.getElementById("iframeJuego");
        var imagenJuegoPortadaImg = document.getElementById("imagenJuegoPortadaImg");

        var generoJuego = document.getElementById("generoJuego");
        var valoracionJuego = document.getElementById("valoracionJuego");
        var precioJuego = document.getElementById("precioJuego");
        var desarrolladorJuego = document.getElementById("desarrolladorJuego");
        var fechaLanzamientoJuego = document.getElementById("fechaLanzamientoJuego");
        var descripcionJuego = document.getElementById("descripcionJuego");

        var sistemaMinimo = document.getElementById("sistemaMinimo");
        var procesadorMinimo = document.getElementById("procesadorMinimo");
        var memoriaMinimo = document.getElementById("memoriaMinimo");
        var tarjetaMinimo = document.getElementById("tarjetaMinimo");
        var almacenamientoMinimo = document.getElementById("almacenamientoMinimo");

        var sistemaRecomendado = document.getElementById("sistemaRecomendado");
        var procesadorRecomendado = document.getElementById("procesadorRecomendado");
        var memoriaRecomendado = document.getElementById("memoriaRecomendado");
        var tarjetaRecomendado = document.getElementById("tarjetaRecomendado");
        var almacenamientoRecomendado = document.getElementById("almacenamientoRecomendado");

        var review1 = document.getElementById("review1");
        var review2 = document.getElementById("review2");
        var review3 = document.getElementById("review3");

        var imagenGaleria1 = document.getElementById("imagenGaleria1");
        var imagenGaleria2 = document.getElementById("imagenGaleria2");
        var imagenGaleria3 = document.getElementById("imagenGaleria3");

        var enlaceBotonCompra = document.getElementById("enlaceBotonCompra");

        /*Obtengo JSON*/
        var jsonParsed = JSON.parse(text);

        /*Obtengo parametros de url, en este caso el juego*/
        var url_string = window.location.href;
        var url = new URL(url_string);
        var juegoDeURL = url.searchParams.get("juego");

        /*Teniendo el nombre del juego, busco el indice en el array de juegos donde el objeto tenga nombre = juego de la url*/
        var indiceJuego = jsonParsed.findIndex(obj => obj.nombre==juegoDeURL);

        /*En el HTML tengo varios atributos cuyo contenido depende de cada juego, relleno los elementos con sus propiedades correspondientes al juego*/
        tituloHTML.innerHTML += jsonParsed[indiceJuego].nombre;
        bodyJuego.setAttribute("src", jsonParsed[indiceJuego].video); 

        tituloJuegoH1.innerHTML += jsonParsed[indiceJuego].titulo;
        iframeJuego.setAttribute("src", jsonParsed[indiceJuego].video); 
        imagenJuegoPortadaImg.setAttribute("src", jsonParsed[indiceJuego].imagen);
        imagenJuegoPortadaImg.setAttribute("alt", 'portada de ' + jsonParsed[indiceJuego].nombre); 

        generoJuego.innerHTML += jsonParsed[indiceJuego].genero;
        valoracionJuego.innerHTML += jsonParsed[indiceJuego].valoracion;
        precioJuego.innerHTML += jsonParsed[indiceJuego].precio;
        desarrolladorJuego.innerHTML += jsonParsed[indiceJuego].desarrollador;
        fechaLanzamientoJuego.innerHTML += jsonParsed[indiceJuego].fechaDeLanzamiento;
        descripcionJuego.innerHTML += jsonParsed[indiceJuego].descripcion;

        sistemaMinimo.innerHTML += jsonParsed[indiceJuego].OSm;
        procesadorMinimo.innerHTML += jsonParsed[indiceJuego].Processorm;
        memoriaMinimo.innerHTML += jsonParsed[indiceJuego].Memorym;
        tarjetaMinimo.innerHTML += jsonParsed[indiceJuego].Graphicsm;
        almacenamientoMinimo.innerHTML += jsonParsed[indiceJuego].Storagem;

        sistemaRecomendado.innerHTML += jsonParsed[indiceJuego].OS;
        procesadorRecomendado.innerHTML += jsonParsed[indiceJuego].Processor;
        memoriaRecomendado.innerHTML += jsonParsed[indiceJuego].Memory;
        tarjetaRecomendado.innerHTML += jsonParsed[indiceJuego].Graphics;
        almacenamientoRecomendado.innerHTML += jsonParsed[indiceJuego].Storage;

        review1.innerHTML += jsonParsed[indiceJuego].uno;
        review2.innerHTML += jsonParsed[indiceJuego].dos;
        review3.innerHTML += jsonParsed[indiceJuego].uno;

        imagenGaleria1.setAttribute("src", jsonParsed[indiceJuego].banner1);
        imagenGaleria1.setAttribute("alt", 'imagen de ' + jsonParsed[indiceJuego].nombre + ' 1'); 
        imagenGaleria2.setAttribute("src", jsonParsed[indiceJuego].banner4);
        imagenGaleria2.setAttribute("alt", 'imagen de ' + jsonParsed[indiceJuego].nombre + ' 2'); 
        imagenGaleria3.setAttribute("src", jsonParsed[indiceJuego].banner5);
        imagenGaleria3.setAttribute("alt", 'imagen de ' + jsonParsed[indiceJuego].nombre + ' 3'); 

        imagenSliderJuego1.setAttribute("src", jsonParsed[indiceJuego].banner4);
        imagenSliderJuego1.setAttribute("alt", 'banner de ' + jsonParsed[indiceJuego].nombre + ' 1'); 
        imagenSliderJuego2.setAttribute("src", jsonParsed[indiceJuego].banner11); /*2*/
        imagenSliderJuego2.setAttribute("alt", 'banner de ' + jsonParsed[indiceJuego].nombre + ' 2'); 
        imagenSliderJuego3.setAttribute("src", jsonParsed[indiceJuego].banner9); /*3*/
        imagenSliderJuego3.setAttribute("alt", 'banner de ' + jsonParsed[indiceJuego].nombre + ' 3'); 
        imagenSliderJuego4.setAttribute("src", jsonParsed[indiceJuego].banner4);
        imagenSliderJuego4.setAttribute("alt", 'banner de ' + jsonParsed[indiceJuego].nombre + ' 4'); 
        imagenSliderJuego5.setAttribute("src", jsonParsed[indiceJuego].banner11);
        imagenSliderJuego5.setAttribute("alt", 'banner de ' + jsonParsed[indiceJuego].nombre + ' 5'); 

        bodyJuego.style.backgroundImage += "url( "+ jsonParsed[indiceJuego].imagenFondo + ")";

        /*Enviar enlace custom a la pagina de compra para saber que juego se va a comprar*/
        enlaceBotonCompra.setAttribute("href", 'compra.html?juego=' + jsonParsed[indiceJuego].nombre);

    });

});