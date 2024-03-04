function verificarRespuesta() {
    var respuesta = document.getElementById('respuestaInput').value.toLowerCase();
  
    if (respuesta === 'viaje') {
      document.getElementById('respuesta').classList.remove('oculto');
    } else if (respuesta === 'toledo') {
      document.getElementById('respuesta').classList.remove('oculto');
      generarMensajeRegalo('Te gustaria quedarte en toledo hasta el domingo despues del concierto??? te amo');
    } else {
      alert('Inténtalo de nuevo.');
    }
  }
  
  function generarMensajeRegalo(mensaje) {
    var adivinanzaDiv = document.getElementById('adivinanza');
    adivinanzaDiv.innerHTML = '<p>' + mensaje + '</p>';
    
    // Limpiar el contenido del formulario y el mensaje de siguiente adivinanza
    document.getElementById('formulario').style.display = 'none';
    document.getElementById('respuesta').style.display = 'none';
  }
  