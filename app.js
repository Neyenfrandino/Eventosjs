/* function imprimirMensaje(){
    const texto = document.getElementById('txtMensaje').value;
    console.log('El mensaje es: ' + texto);
}

function escribirMensaje(mensaje){
    document.getElementById('txtMensaje').value = mensaje;
} */


/* const pruebaOnclick = document.getElementById('eventosApli')

function mostrarMensaje(nombreEvento){
  let mensaje = '-El evento ' + nombreEvento + ' funciona correctamente';
  const texto = document.getElementById('terminal');
  texto.value = mensaje;
}
 */
/* Esta es la funcion que se encarga de agregar el "escuchador" de los eventos a nuestro input */
/* function configureListener(nombreEvento, ){
  const input = document.getElementById('botonInicio');
  input.addEventListener(nombreEvento, function(){
    mostrarMensaje(nombreEvento);
  })  
} */

/* configureListener('contextmenu');
configureListener('click');
 */

// const input = document.getElementById('botonInicio');
// input.addEventListener('contextmenu', function(){
//   mostrarMensaje('contextmenu');
// })

// const elemento = document.getElementById('botonInicio');
// elemento.addEventListener('click', function(){
//   mostrarMensaje('CLICK');
// });



function mostrarMensaje(nombreEvento, elementoId){
  // let mensaje = '-El evento ' + nombreEvento + ' funciona correctamente';
  // const texto = document.getElementById('terminal');
  // texto.value = mensaje;
  
  let mensajeAnterior = document.getElementById('terminal').value;
  let mensajeNuevo = '-El evento ' + nombreEvento + ' funciona correctamente'; 
  let mensajeFinal = mensajeAnterior + '\n' + mensajeNuevo + '. Viene del elemento cuyo id es ' +  elementoId;
  document.getElementById('terminal').value = mensajeFinal;
}

/* Esta es la funcion que se encarga de agregar el "escuchador" de los eventos a nuestro input */
function configureListener(nombreEvento, elementoId){
  const input = document.getElementById(elementoId);
  input.addEventListener(nombreEvento, function(){
    mostrarMensaje(nombreEvento, elementoId);
  })  
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
configureListener('mouseenter', 'eventosApli');
