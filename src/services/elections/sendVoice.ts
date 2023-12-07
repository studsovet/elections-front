import type { Election, ElectionVoices } from '~/types/elections';
import { useApi } from '../useApi';
import { encryptVoice } from '~/helpers/encryptVoice';

export function sendVoice(
    election: Election,
    publicKey: string,
    electionVoice: ElectionVoices
) {
    const { token, baseURL } = useApi();

    const encryptedVoice = encryptVoice(publicKey, electionVoice);

    return useFetch<string[]>(`/elections/vote/${election.id}`, {
        baseURL,
        method: 'POST',
        query: {
            token
        },
        body: {
            voice: encryptedVoice
        },
    });
}