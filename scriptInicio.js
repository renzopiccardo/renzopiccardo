document.addEventListener("DOMContentLoaded", function () {

    leerJSONLocal('json.json', function (text) {
        //localstorage
        
        var jsonParsed = JSON.parse(text);
    });

        var ul = document.getElementById("ulJuegos");

        jsonParsed.forEach(element => {
            ul.innerHTML += "<li><a><article><figure><img></img><figcaption></figcaption></figure><p></p></article></a></li>";
        });

        for(var i=0; i < jsonParsed.length; i++)
        {
            
        }

        var a = document.getElementsByTagName("a");
        var article = document.getElementsByTagName("article");
        var figure = document.getElementsByTagName("figure");
        var img = document.getElementsByTagName("img");
        var figcaption = document.getElementsByTagName("figcaption");
        var p = document.getElementsByTagName("p");

        /*
        a.forEach(element => {
            var href = jsonParsed[element].nombre + ".html";
            a[element].setAttribute("href", href)
        });
        */

        for(var i=0; i < a.length; i++)
        {
            var href = jsonParsed[i].nombre + ".html";
            a[i].setAttribute("href", href);
        }

        /* 

        article.forEach(element => {
            article[element].setAttribute("class", "juego");
        });

        figure.forEach(element => {
            figure[element].setAttribute("class", "imagenLI")
        });

        img.forEach(element => {
            var src = jsonParsed[element].imagen;
            var alt = "portada de " + jsonParsed[element].nombre;
            img[element].setAttribute("src", src);
            img[element].setAttribute("alt", alt);
            img[element].setAttribute("class", "portada");
        });

        //textoLI css
        figcaption.forEach(element => {
            figcaption[element].setAttribute("class", "nombreJuego");
            figcaption[element].innerText = jsonParsed[element].nombre;
        });

        //descripcionCorta en JSON
        p.forEach(element => {
            p[element].innerText = jsonParsed[element].descripcionCorta;
        });
*/
    });
    


});