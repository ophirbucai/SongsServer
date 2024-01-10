import { z } from "zod";

export const trackSchema = z.object({
    wrapperType: z.string(),
    kind: z.string(),
    artistId: z.number(),
    collectionId: z.number(),
    trackId: z.number(),
    artistName: z.string(),//artist
    collectionName: z.string(),//album
    trackName: z.string(),//name
    collectionCensoredName: z.string(),
    trackCensoredName: z.string(),
    artistViewUrl: z.string(),
    collectionViewUrl: z.string(),
    trackViewUrl: z.string(),
    previewUrl: z.string(),//sample
    artworkUrl30: z.string(),
    artworkUrl60: z.string(),
    artworkUrl100: z.string(),//cover
    collectionPrice: z.number(),
    trackPrice: z.number(),
    releaseDate: z.string(),//date->year
    collectionExplicitness: z.string(),
    trackExplicitness: z.string(),
    discCount: z.number(),
    discNumber: z.number(),
    trackCount: z.number(),
    trackNumber: z.number(),
    trackTimeMillis: z.number(),
    country: z.string(),
    currency: z.string(),
    primaryGenreName: z.string(),
    contentAdvisoryRating: z.string(),
    isStreamable: z.boolean(),
})

