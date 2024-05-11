const net = require('net');

const client2 = new net.Socket();

client2.connect(5000, '127.0.0.1', ()=>{
    console.log("Conexión exitosa con el servidor");

    client2.write("Hola servidor, soy el cliente 2\n");
});

client2.on('close', ()=>{
    console.log("Conexión terminada");
});

client2.on('data', (data)=>{
    console.log(`Servidor: ${data}`);
});
