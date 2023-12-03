import { defineStore } from 'pinia';
import { useElectionQueueStore } from './election-queue.store';
import { fetchCandidates, fetchElectionById, fetchElectionPublicKey } from '~/services/elections';
import type { Election, ElectionNormalVoices, ElectionRunoffVoices, ElectionVoices } from '~/types/elections';
import type { Candidate } from '~/types/candidate';
import { sendVoice } from '~/services/elections/sendVoice';

export const useCurrentElectionStore = defineStore('currentElectionStore', () => {
    const electionQueueStore = useElectionQueueStore();

    const currentElection = ref<Election | null>(null);
    const candidates = ref<Candidate[]>([]);
    const publicKey = ref<string | null>(null);

    const electionNormalVoices = ref<ElectionNormalVoices | null>(null);
    const electionRunoffVoices = ref<ElectionRunoffVoices | null>(null);

    function setCurrentElection(election: Election | null) {
        currentElection.value = election;
    }

    function setCandidates(electionCandidates: Candidate[]) {
        candidates.value = [...electionCandidates];
    }

    function setPublicKey(electionPublicKey: string | null) {
        publicKey.value = electionPublicKey;
    }

    async function getCurrentElection() {
        if (!electionQueueStore.currentElection) return;
        
        const { data } = await fetchElectionById(electionQueueStore.currentElection);

        if (data.value) {
            setCurrentElection(data.value);
        }
    }

    async function getCandidates() {
        if (!electionQueueStore.currentElection) return;

        const { data } = await fetchCandidates(electionQueueStore.currentElection);
        if (data.value) {
            setCandidates(data.value);
            initializeElectionVoice(data.value);
        }
    }

    async function getPublicKey() {
        if (!electionQueueStore.currentElection) return;

        const { data } = await fetchElectionPublicKey(electionQueueStore.currentElection);
        if (data.value) {
            setPublicKey(data.value);
        }
    }

    async function vote() {
        if (!(currentElection.value && publicKey.value)) return;

        if (currentElection.value.isRunoff) {
            if (electionRunoffVoices.value) {
                await sendVoice(currentElection.value, publicKey.value, electionRunoffVoices.value)
                return;
            }
        }

        if (electionNormalVoices.value) {
            sendVoice(currentElection.value, publicKey.value, electionNormalVoices.value);
        }    
    }

    function initializeElectionVoice(candidates: Candidate[]) {
        if (!currentElection.value) return;

        if (currentElection.value.isRunoff) {
            electionRunoffVoices.value = candidates.map((candidate) => candidate.id);
            return;
        }

        electionNormalVoices.value = candidates.map((candidate) => [candidate.id, 0]);
    }

    function changeNormalElectionVoices(candidateId: string, voiceNumber: number) {
        if (!currentElection.value || currentElection.value.isRunoff || !electionNormalVoices.value) return;
    
        for (const voice of electionNormalVoices.value) {
            if (voice[0] === candidateId) {
                voice[1] = voiceNumber;
                return;
            }
        }
    }

    function changeRunoffElectionVoices(candidates: string[]) {
        if (!(currentElection.value && currentElection.value.isRunoff && electionRunoffVoices.value)) return;

        electionRunoffVoices.value = [...candidates];
    }

    return {
        currentElection,
        candidates,
        publicKey,
        getCurrentElection,
        getCandidates,
        getPublicKey,
        vote,
        changeNormalElectionVoices,
        changeRunoffElectionVoices,
    };
});