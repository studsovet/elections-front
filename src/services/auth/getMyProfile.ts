import { useApi } from '../useApi';
import type { UserInfo } from '~/types/user';

export function getMyProfile() {
    const { baseURL, token } = useApi();

    return useFetch<UserInfo>(`auth/me`, {
        baseURL,
        query: {
            token
        }
    });
}
