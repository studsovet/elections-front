import { useApi } from '../useApi';

export function fetchElectionPublicKey(id: string) {
    const { baseUrl, token } = useApi();

    return useAsyncData<string>(
        'getPublicKey',
        async () => {
            const response = await fetch(`${baseUrl}/elections/publicKey/${id}?` + new URLSearchParams({
                token: token ?? ''
            }))
            return await (await response.blob()).text();
        }
    );
}