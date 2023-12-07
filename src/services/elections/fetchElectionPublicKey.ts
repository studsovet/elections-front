import { useApi } from '../useApi';

export function fetchElectionPublicKey(id: string) {
    const { baseURL, token } = useApi();

    return useAsyncData<string>(
        'getPublicKey',
        async () => {
            const response = await fetch(`${baseURL}/elections/publicKey/${id}?` + new URLSearchParams({
                token: token ?? '',
            }))
            return await (await response.blob()).text();
        }
    );
}