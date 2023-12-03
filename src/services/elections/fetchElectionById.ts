import type { Election } from '~/types/elections';
import { useApi } from '../useApi';

export function fetchElectionById(id: string) {
    const { baseURL, token } = useApi();

    return useFetch<Election>(`/elections/get/${id}`, {
        baseURL,
        query: {
            token
        }
    });
}