import * as http from "http";  // O asterisco significa "Tudo" então, ali ele importa tudo que tem no HTTP

//Importes
import {getListEpisodes} from './controllers/podcastController';

const server = http.createServer( async (req:http.IncomingMessage, res:http.ServerResponse) => {

  if(req.method === 'GET') {
    await getListEpisodes(req, res);
  }

});


const porta = process.env.PORT; // Importa a porta direto da variavel ambiente .env

server.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});
