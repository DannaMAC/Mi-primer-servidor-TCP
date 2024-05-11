const net = require('net');

const server = net.createServer((con)=>{
    con.write("Servidor iniciado correctamente\n");
    console.log("Recibí una conexión remota");
    connections.push(con);

    con.on('data', (data) => {
        console.log(`Cliente: ${data}`);

        if (con === connections[0]) {
            if (connections.length > 1) {
                connections[1].write(data);
            }
        } else if (con === connections[1]) {
            if (connections.length > 0) {
                connections[0].write(data);
            }
        }
    });

    con.on('end', () => {
        connections.splice(connections.indexOf(con), 1);
        console.log('Cliente desconectado');
    });
});

let connections = [];

server.listen(5000, '127.0.0.1');
