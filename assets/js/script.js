//se modifica la funcion pintarpara recibir el elemento al hacer click y el color
function pintar(elemento, color = 'green') {
    elemento.style.backgroundColor = color;
  }

// seleccion de elemento  
  const ele = document.getElementById("ele1");
  
//se agrega el evento listener con una funcion  
  ele.addEventListener("click", function() {
    pintar(this, 'yellow'); 
  });
  