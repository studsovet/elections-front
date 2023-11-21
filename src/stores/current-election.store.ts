import { defineStore } from 'pinia';
import { publicDecrypt } from 'crypto';
import { useElectionQueueStore } from './election-queue.store';
import { fetchCandidates, fetchElectionById, fetchElectionPublicKey } from '~/services/elections';
import type { Election } from '~/types/elections';
import type { Candidate } from '~/types/candidate';

export const useCurrentElectionStore = defineStore('currentElectionStore', () => {
    const electionQueueStore = useElectionQueueStore();

    const currentElection = ref<Election | null>(null);
    const candidates = ref<Candidate[]>([]);
    const publicKey = ref<string | null>(null);

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
        }
    }

    async function getPublicKey() {
        if (!electionQueueStore.currentElection) return;

        const { data } = await fetchElectionPublicKey(electionQueueStore.currentElection);
        if (data.value) {
            setPublicKey(data.value);
        }
    }

    return {
        getCurrentElection,
        getCandidates,
        getPublicKey,
        currentElection,
        candidates,
        publicKey
    }
});