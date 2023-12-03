import type { Election, ElectionVoices } from '~/types/elections';
import { useApi } from '../useApi';
import { encryptVoice } from '~/helpers/encryptVoice';

export function sendVoice(
    election: Election,
    publicKey: string,
    electionVoice: ElectionVoices
) {
    const { token, baseUrl } = useApi();

    const encryptedVoice = encryptVoice(publicKey, electionVoice);

    return useFetch<string[]>(`${baseUrl}/elections/vote/${election.id}`, {
        method: 'POST',
        query: {
            token,
            voice: encryptedVoice
        }
    });
}