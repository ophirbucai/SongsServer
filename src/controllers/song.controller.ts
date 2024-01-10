import { Request, Response } from "express";
import { fetchSongs } from "../services/song/fetchSongs";

export const searchSongs = async (req: Request, res: Response) => {
    try {
        const term = req.params.term;
        const songs = await fetchSongs(term);
        res.json(songs);
    } catch (error: any) {
        res.status(500).json({ error: error.message });
    }
}
