import { dataPodcast } from "../data/podcastData"


export const filterEpisodes = async (podcastName:string) => {
    const data = await dataPodcast(podcastName)
}
