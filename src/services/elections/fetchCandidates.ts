import type { Candidate } from '~/types/candidate';
import { useApi } from '../useApi';

export function fetchCandidates(id: string) {
    const { baseURL, token } = useApi();

    return useFetch<Candidate[]>(`/elections/getCandidates/${id}`, {
        baseURL,
        query: {
            token,
        }
    });
}