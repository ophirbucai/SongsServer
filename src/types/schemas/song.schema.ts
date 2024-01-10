import { z } from 'zod';
export const songSchema = z.object({
    name: z.string(),
    artist: z.string(),
    album: z.string(),
    year: z.number(),
    sample: z.string(),
    cover: z.string(),
});


