import { defineStore } from 'pinia';
import { useElectionQueueStore } from './election-queue.store';
import { fetchCandidates, fetchElectionById } from '~/services/elections';
import type { Election } from '~/types/elections';
import type { Candidate } from '~/types/candidate';

export const useCurrentElectionStore = defineStore('currentElectionStore', () => {
    const electionQueueStore = useElectionQueueStore();

    const currentElection = ref<Election | null>(null);
    const candidates = ref<Candidate[]>([]);

    function setCurrentElection(election: Election | null) {
        currentElection.value = election;
    }

    function setCandidates(electionCandidates: Candidate[]) {
        candidates.value = [...electionCandidates];
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

        const { data, error } = await fetchCandidates(electionQueueStore.currentElection);
        if (data.value) {
            setCandidates(data.value);
        }
    }

    return {
        getCurrentElection,
        getCandidates,
        currentElection,
        candidates
    }
});