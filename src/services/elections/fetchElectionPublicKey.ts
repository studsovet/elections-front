import { useApi } from '../useApi';

export async function fetchElectionPublicKey(id: string) {
    const { baseUrl, token } = useApi();

    const result = await useAsyncData<string>(
        'getPublicKey',
        async () => {
            const response = await fetch(`${baseUrl}/elections/publicKey/${id}?` + new URLSearchParams({
                token: token ?? ''
            }))
            return await (await response.blob()).text();
        }
    ); 

    return result;
}