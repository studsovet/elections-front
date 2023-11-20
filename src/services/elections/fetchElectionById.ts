import type { Election } from '~/types/elections';
import { useApi } from '../useApi';

export async function fetchElectionById(id: string) {
    const { baseUrl, token } = useApi();

    const result = await useFetch<Election>(`${baseUrl}/elections/get/${id}`, {
        query: {
            token
        }
    });

    return result;
}