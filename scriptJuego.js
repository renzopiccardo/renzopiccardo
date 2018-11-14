document.addEventListener("DOMContentLoaded", function () {

    leerJSONLocal('json.json', function (text) {

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

        var jsonParsed = JSON.parse(text);

        var url_string = window.location.href;
        var url = new URL(url_string);
        var juegoDeURL = url.searchParams.get("juego");

        var indiceJuego = jsonParsed.findIndex(obj => obj.nombre==juegoDeURL);

        tituloJuegoH1.innerHTML += jsonParsed[indiceJuego].titulo;
        iframeJuego.innerHTML += jsonParsed[indiceJuego].titulo;
        imagenJuegoPortadaImg.innerHTML += jsonParsed[indiceJuego].titulo;

        generoJuego.innerHTML += jsonParsed[indiceJuego].titulo;
        valoracionJuego.innerHTML += jsonParsed[indiceJuego].titulo;
        precioJuego.innerHTML += jsonParsed[indiceJuego].titulo;
        desarrolladorJuego.innerHTML += jsonParsed[indiceJuego].titulo;
        fechaLanzamientoJuego.innerHTML += jsonParsed[indiceJuego].titulo;
        descripcionJuego.innerHTML += jsonParsed[indiceJuego].titulo;

        sistemaMinimo.innerHTML += jsonParsed[indiceJuego].titulo;
        procesadorMinimo.innerHTML += jsonParsed[indiceJuego].titulo;
        memoriaMinimo.innerHTML += jsonParsed[indiceJuego].titulo;
        tarjetaMinimo.innerHTML += jsonParsed[indiceJuego].titulo;
        almacenamientoMinimo.innerHTML += jsonParsed[indiceJuego].titulo;

        sistemaRecomendado.innerHTML += jsonParsed[indiceJuego].titulo;
        procesadorRecomendado.innerHTML += jsonParsed[indiceJuego].titulo;
        memoriaRecomendado.innerHTML += jsonParsed[indiceJuego].titulo;
        tarjetaRecomendado.innerHTML += jsonParsed[indiceJuego].titulo;
        almacenamientoRecomendado.innerHTML += jsonParsed[indiceJuego].titulo;

        review1.innerHTML += jsonParsed[indiceJuego].titulo;
        review2.innerHTML += jsonParsed[indiceJuego].titulo;
        review3.innerHTML += jsonParsed[indiceJuego].titulo;

        imagenGaleria1.innerHTML += jsonParsed[indiceJuego].titulo;
        imagenGaleria2.innerHTML += jsonParsed[indiceJuego].titulo;
        imagenGaleria3.innerHTML += jsonParsed[indiceJuego].titulo;

        imagenSliderJuego1.innerHTML += jsonParsed[indiceJuego].titulo;
        imagenSliderJuego2.innerHTML += jsonParsed[indiceJuego].titulo;
        imagenSliderJuego3.innerHTML += jsonParsed[indiceJuego].titulo;
        imagenSliderJuego4.innerHTML += jsonParsed[indiceJuego].titulo;
        imagenSliderJuego5.innerHTML += jsonParsed[indiceJuego].titulo;
        a


    });

});