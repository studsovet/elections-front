import { ElectionStatus } from '~/types/elections';
import { useApi } from '../useApi';

export function fetchAllElections(status: ElectionStatus) {
    const { baseURL, token } = useApi();

    return useFetch<string[]>('/elections/all', {
        baseURL,
        query: {
            token,
            status
        },
    });
}