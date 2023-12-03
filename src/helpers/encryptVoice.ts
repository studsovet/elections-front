import JSEncrypt from 'jsencrypt';
import type { ElectionVoices, ElectionRunoffVoices, ElectionVoicePayload } from '~/types/elections';

export function encryptVoice(
    publicKey: string,
    electionVoice: ElectionVoices | ElectionRunoffVoices
) {
    const payload: ElectionVoicePayload = {
        random: '293029302',
        voice: electionVoice
    };

    const encrypt = new JSEncrypt();
    encrypt.setPublicKey(publicKey);
    const encrypted = encrypt.encrypt(JSON.stringify(payload));

    return encrypted;
}
