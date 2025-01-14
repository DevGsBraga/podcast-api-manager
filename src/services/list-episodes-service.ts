import { dataPodcast } from "../data/podcastData";




export const serviceListEpisodes = async () => {
    const data = await dataPodcast();

    return data;
}
