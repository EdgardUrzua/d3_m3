

// Event listener divs de colores
document.getElementById("azul").addEventListener("click", function() { cambiarColor("azul", "black"); });
document.getElementById("rojo").addEventListener("click", function() { cambiarColor("rojo", "black"); });
document.getElementById("verde").addEventListener("click", function() { cambiarColor("verde", "black"); });
document.getElementById("amarillo").addEventListener("click", function() { cambiarColor("amarillo", "black"); });

// Función para cambiar el color de un elemento
function cambiarColor(elementId, color) {
  const elemento = document.getElementById(elementId);
  elemento.style.backgroundColor = color;
}

