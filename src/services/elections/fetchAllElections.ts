import { ElectionStatus } from '~/types/elections';
import { useApi } from '../useApi';

export async function fetchAllElections(status: ElectionStatus = ElectionStatus.Voted) {
    const { baseUrl, token } = useApi();

    const result = await useFetch<string[]>(`${baseUrl}/elections/all`, {
        query: {
            token,
            status
        }
    });

    return result;
}