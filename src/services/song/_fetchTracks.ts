import { instance } from "../instance";
import { trackSchema } from "../../types/schemas/track.schema";
import type { ResultsType } from "../../types/results.type";
import type { TrackType } from "../../types/track.type";

export const _fetchTracks = async (term: string, offset: number) => {
    const params = new URLSearchParams({
        term,
        ...offset ? { offset: `${offset}` } : {}
    });
    const res = await instance.get(`search?${params.toString()}`);
    const data = await res.json() as ResultsType<TrackType[]>;
    if (!data?.results) {
        throw new Error('Invalid data received from iTunes API');
    }
    const passedValidation = data.results.every((e) => trackSchema.safeParse(e));
    if (!passedValidation) {
        throw new Error('Invalid data received from iTunes API');
    }
    return data;
}
