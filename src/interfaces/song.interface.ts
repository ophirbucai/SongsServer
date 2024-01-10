import { z } from "zod";
import { songSchema } from "../types/schemas/song.schema";

export interface SongInterface extends z.infer<typeof songSchema> {}
