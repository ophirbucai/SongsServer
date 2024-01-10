import { ResultsType } from "../../types/results.type";
import { Song } from "../../normalizers/Song";
import { _fetchTracks } from "./_fetchTracks";

export const fetchSongs = async (term: string, offset = 0): Promise<ResultsType<Song[]>> => {
    const data = await _fetchTracks(term, offset);
    const songs = data.results.map((track) => new Song(track));
    return { results: songs, resultsCount: data.resultsCount };
}

