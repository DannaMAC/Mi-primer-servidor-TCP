const net = require('net');

const client = new net.Socket();

client.connect(5000, '127.0.0.1', ()=>{
    console.log("Conexión exitosa");

    client.write("Hola servidor, soy el cliente 1\n");
});

client.on('close', ()=>{
    console.log("Conexión terminada");
});

client.on('data', (data)=>{
    console.log(`Servidor: ${data}`);
});
