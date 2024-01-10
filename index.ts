import express from "express";
import { searchSongs } from "./src/controllers/song.controller";

const port = process.env.PORT || 8888;

const app = express();

app.get('/search/:term', searchSongs);

app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`);
});
