import type { Candidate } from '~/types/candidate';
import { useApi } from '../useApi';

export async function fetchCandidates(id: string) {
    const { baseUrl, token } = useApi();

    const result = await useFetch<Candidate[]>(`${baseUrl}/elections/getCandidates/${id}`, {
        query: {
            token,
        }
    });

    return result;
}