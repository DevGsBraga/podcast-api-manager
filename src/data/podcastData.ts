import fs from 'fs'; // FILE_SYSTEM - SERVE PARA INDICAR O CAMINHO DO ARQUIVO.
import path from 'path'; // Ler e aponta o arquivo.
import { Podcast } from '../models/podcast-model';


const pathData = path.join(__dirname, '../data/podcasts.json'); // CONST __DIRNAME SERVE PARA PEGAR O CAMINHO DO ARQUIVO DINAMICAMENTE.

export const dataPodcast = async (podcastName?:string):Promise<Podcast[]> => {
    const data = await fs.readFileSync(pathData, 'utf-8');
    let jsonFile = JSON.parse(data);


    if(podcastName) {
        jsonFile = jsonFile.filter((podcast:Podcast) => podcast.podCastName === podcastName)
    }


    return jsonFile;
}


