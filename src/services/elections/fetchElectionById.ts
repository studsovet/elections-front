import type { Election } from '~/types/elections';
import { useApi } from '../useApi';

export function fetchElectionById(id: string) {
    const { baseUrl, token } = useApi();

    return useFetch<Election>(`${baseUrl}/elections/get/${id}`, {
        query: {
            token
        }
    });
}