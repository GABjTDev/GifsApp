import type { GiphyResponse } from "../interfaces/giphy.reponse";
import type { Gif } from "../interfaces/gif.interface";
import { giphyApi } from "../api/giphy.api";

export const getGifsByQueryAction = async (query: string): Promise<Gif[]> => {

    const response = await giphyApi.get<GiphyResponse>("search", {
        params: {
            q: query,
            limit: 10
        }
    });

    const data = response.data.data.map(gif => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: parseInt(gif.images.original.width),
        height: parseInt(gif.images.original.height)
    }));

    return data;
}