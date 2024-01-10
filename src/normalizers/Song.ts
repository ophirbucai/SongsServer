import type { SongInterface } from "../interfaces/song.interface";
import type { TrackType } from "../types/track.type";

export class Song implements Song {
    name: string;
    artist: string;
    album: string;
    year: number;
    sample: string;
    cover: string;

    constructor(track: TrackType) {
        this.name = track.trackName;
        this.artist = track.artistName;
        this.album = track.collectionName;
        this.year = new Date(track.releaseDate).getFullYear();
        this.sample = track.previewUrl;
        this.cover = track.artworkUrl100;
    }
}
