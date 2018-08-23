function filtrarJuegos() 
{
    // Variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('filtroTexto');
    filter = input.value.toUpperCase();
    ul = document.getElementById("catalogo");
    li = ul.getElementsByTagName('li');

    // Loopear entre todos los elementos de la lista y ocultar los que no coinciden con la busqueda
    for (i = 0; i < li.length; i++) 
    {
        a = li[i].getElementsByTagName("h3")[0];

        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) 
        {
            li[i].style.display = "";
        } else 
        {
            li[i].style.display = "none";
        }
    }
}

function ordenarJuegos() 
{
    var list, i, switching, b, shouldSwitch, dir, switchcount = 0;
    list = document.getElementById("catalogo");
    switching = true;
    // orden ascendente
    dir = "asc"; 
    // Loop hasta que no se necesite mas switching
    while (switching) 
    {
      // Empezar diciendo que no se va a hacer switching
      switching = false;
      b = list.getElementsByTagName("li");
      // Loopear entre todos los li
      for (i = 0; i < (b.length - 1); i++) 
      {
        shouldSwitch = false;
        // Checkear si el siguente li tendria que cambiar lugar con el actual
        if (dir == "asc") 
        {
          if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) 
          {
            //Si el siguiente li es alfabeticamente menor que el actual, indicar switch y cortar el loop
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") 
        {
          if (b[i].innerHTML.toLowerCase() < b[i + 1].innerHTML.toLowerCase()) 
          {
            //Si el siguiente li es alfabeticamente mayor que el actual, indicar switch y cortar el loop
            shouldSwitch= true;
            break;
          }
        }
      }
      if (shouldSwitch) 
      {
        //Si un switch fue marcado, hacer el switch e indicar que se hizo
        b[i].parentNode.insertBefore(b[i + 1], b[i]);
        switching = true;
        //Cada vez que se hace un swiitch, incrementar en 1
        switchcount ++;
      } else 
      {
        // Si no se hizo switching y la direccion en ascendente, setear la direccion en descendente y hacer el loop de nuevo
        if (switchcount == 0 && dir == "asc") 
        {
          dir = "desc";
          switching = true;
        }
      }
    }
  }

function abrirMenu() {
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