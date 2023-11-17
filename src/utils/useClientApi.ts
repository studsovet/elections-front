import { UseFetchOptions } from 'nuxt/app';

export function useClientApi<ResT = void, ErrorT = any>(
    uri: string, options: UseFetchOptions<ResT, ErrorT>
) {
    const { $config } = useNuxtApp();
    const baseUrl = $config.public.backendIp;

    return useFetch<ResT, ErrorT>(`${baseUrl}/${uri}`);
}