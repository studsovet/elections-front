import type { Candidate } from '~/types/candidate';
import { useApi } from '../useApi';

export function fetchCandidates(id: string) {
    const { baseUrl, token } = useApi();

    return useFetch<Candidate[]>(`${baseUrl}/elections/getCandidates/${id}`, {
        query: {
            token,
        }
    });
}