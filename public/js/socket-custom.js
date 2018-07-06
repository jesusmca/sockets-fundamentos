var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

//Escuchar sucesos
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

//Emitir sucesos
socket.emit('enviarMensaje', {
    usuario: 'Jesus',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta server: ' + resp.resp);
});

//Escuchar informacion

socket.on('enviarMensaje', function(respuesta) {
    console.log('Mensaje del servidor: ' + respuesta.usuario + ' , ' + respuesta.mensaje);
});