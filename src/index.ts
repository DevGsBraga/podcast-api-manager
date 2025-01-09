import * as http from "http";

const server = http.createServer((req:http.IncomingMessage, res:http.ServerResponse) => {

});


const porta = process.env.PORT; // Importa a porta direto da variavel ambiente .env

server.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});
