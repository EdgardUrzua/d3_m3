let colorSeleccionado = "";

// Función para cambiar el color de un elemento
function cambiarColor(elementId, color) {
  const elemento = document.getElementById(elementId);
  elemento.style.backgroundColor = color;
}

document.addEventListener('keydown', function(event) {
  if (event.key === 'a') {
    colorSeleccionado = "pink";
  } else if (event.key === 's') {
    colorSeleccionado = "orange";
  } else if (event.key === 'd') {
    colorSeleccionado = "lightblue";
  } else if (event.key === 'q') {
    colorSeleccionado = "purple";
  } else if (event.key === 'w') {
    colorSeleccionado = "gray";
  } else if (event.key === 'e') {
    colorSeleccionado = "brown";
  }

  // Cambiar color del div "key" si se presionó una tecla válida
  if (colorSeleccionado) {
    cambiarColor("key", colorSeleccionado);
  }
});

