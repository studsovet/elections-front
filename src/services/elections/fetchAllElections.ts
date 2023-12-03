import { ElectionStatus } from '~/types/elections';
import { useApi } from '../useApi';

export function fetchAllElections(status: ElectionStatus) {
    const { baseUrl, token } = useApi();

    return useFetch<string[]>(`${baseUrl}/elections/all`, {
        query: {
            token,
            status
        },
    });
}