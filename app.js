function registrarEvento(nombreEvento, elementoId){
  let mensaje = '-El evento ' + nombreEvento + ' funciona correctamente. Viene del elemento cuyo id es ' +  elementoId;;
  mostrarMensaje(mensaje)
}

function mostrarMensaje(mensaje){
  let terminal = document.getElementById('terminal');
  let horaActual = obtenerHora();
  let mensajeAnterior = terminal.value
  let mensajeFinal = mensajeAnterior + '\n' + horaActual + ': ' +  mensaje;
  terminal.value = mensajeFinal;
  terminal.scrollTop = terminal.scrollHeight;
}

function obtenerHora(){
  // Obtén la fecha y hora actual
  var fechaActual = new Date();

  // Obtiene la hora formateada en el formato "HH:mm:ss.xyz"
  var horaFormateada = fechaActual.toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    fractionalSecondDigits: 3
  });

  return horaFormateada;
}

/* Esta es la funcion que se encarga de agregar el "escuchador" de los eventos a nuestro input */
function configureListener(nombreEvento, elementoId){
  const input = document.getElementById(elementoId);
  input.addEventListener(nombreEvento, function(){
    registrarEvento(nombreEvento, elementoId);
  })  
}

function setClickEnviar(){
  let btnEnviar = document.getElementById('enviar');
  btnEnviar.addEventListener('click', function(){
    let email = document.getElementById('email-from').value
    let correoValido = validarCorreo(email);
    let terminal = document.getElementById('terminal');

    if (correoValido == true){
      mostrarMensaje('-Es un correo valido ' + email);
      terminal.classList.remove('correoInvalido') 
    } else {
      mostrarMensaje('-'+email + ' ! No es un correo ¡');
      terminal.classList.add('correoInvalido') 
    }
  })
}

function validarCorreo(email){
  const expresionRegular = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const esValido = expresionRegular.test(email);
  return esValido;
}

function limpiarTerminal(){
  console.log('funciona')
  let miTerminal = document.getElementById('terminal');
  miTerminal.value = null
}
function tiempoOfflimpiar(){
  setInterval(limpiarTerminal, 1000 * 5);
}


configureListener('dblclick', 'input');
configureListener('dblclick', 'terminal');
configureListener('contextmenu', 'input')
configureListener('contextmenu', 'botonInicio');
configureListener('click', 'input');
configureListener('click', 'botonInicio');
configureListener('mousedown', 'input');
configureListener('mousedown', 'botonInicio');
configureListener('mouseenter', 'titulo2');
configureListener('mouseenter', 'eventosApli');
configureListener('keydown', 'input');
configureListener('keyup', 'input');
configureListener('mouseenter', 'eventosApli');
setClickEnviar();
tiempoOfflimpiar();