/*

Funcion que llama una sola vez al json local y lo guarda en el localStorage del navegador

*/

function leerJSONLocal(file, callback) 
{
  if (localStorage.getItem("juegos") == undefined) 
  {
    var jsonOriginal = new XMLHttpRequest();
    jsonOriginal.overrideMimeType("application/json");
    jsonOriginal.open("GET", file, true);
    jsonOriginal.onreadystatechange = () => 
    {
      if (jsonOriginal.readyState === 4 && jsonOriginal.status == "200") 
      {
        localStorage.setItem("juegos", jsonOriginal.responseText);
        callback(jsonOriginal.responseText);
      }
    }
    jsonOriginal.send(null);
  }
  else
  {
    callback(localStorage.getItem("juegos"));
  }
}

function abrirMenu() 
{
  var x = document.getElementById("miNavbar");
  if (x.className === "navbar") 
  {
      x.className += " responsive";
  } 
  else 
  {
      x.className = "navbar";
  }
} 