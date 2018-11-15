document.addEventListener("DOMContentLoaded", function () {

    leerJSONLocal('json.json', function (text) {

        localStorage.clear();

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
        iframeJuego.setAttribute("src", jsonParsed[indiceJuego].videoOOOOOOOOOOO); 
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

        imagenGaleria1.innerHTML += jsonParsed[indiceJuego].titulo;
        imagenGaleria2.innerHTML += jsonParsed[indiceJuego].titulo;
        imagenGaleria3.innerHTML += jsonParsed[indiceJuego].titulo;

        imagenSliderJuego1.innerHTML += jsonParsed[indiceJuego].titulo;
        imagenSliderJuego2.innerHTML += jsonParsed[indiceJuego].titulo;
        imagenSliderJuego3.innerHTML += jsonParsed[indiceJuego].titulo;
        imagenSliderJuego4.innerHTML += jsonParsed[indiceJuego].titulo;
        imagenSliderJuego5.innerHTML += jsonParsed[indiceJuego].titulo;
        


    });

});