import type { ElectionVoices, ElectionRunoffVoices, ElectionVoicePayload } from '~/types/elections';

export async function encryptVoice(
    publicKey: string,
    electionVoice: ElectionVoices | ElectionRunoffVoices
) {
    const payload: ElectionVoicePayload = {
        random: '293029302',
        voice: electionVoice
    };

    let encrypted: string | false = false;

    if (process.client) {
        const JSEncrypt = await import('jsencrypt').then((module) => module.JSEncrypt);
        const encrypt = new JSEncrypt();
        encrypt.setPublicKey(publicKey);
        encrypted = encrypt.encrypt(JSON.stringify(payload));
    } else if (process.server) {
        const publicEncrypt = await import('crypto').then((module) => module.publicEncrypt);
        encrypted = publicEncrypt(publicKey, Buffer.from(JSON.stringify(payload))).toString('base64');
    }

    return encrypted;
}
