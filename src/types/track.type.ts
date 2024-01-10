import { z } from "zod";
import { trackSchema } from "./schemas/track.schema";

export type TrackType = z.infer<typeof trackSchema>;
