
import { Cookies } from '~/types/cookie';

type UseApiReturn = {
    token: string | undefined | null;
    baseUrl: string;
};

export function useApi() {
    const { $config } = useNuxtApp();
    const tokenCookie = useCookie(Cookies.AuthToken);
    
    const BASE_URL = $config.public.backendIp;

    const tokenQuery: UseApiReturn = reactive({
        token: tokenCookie,
        baseUrl: BASE_URL
    });

    watch(
        tokenCookie,
        (tokenCookie) => {
            tokenQuery.token = tokenCookie;
        }
    );

    return tokenQuery;
}
