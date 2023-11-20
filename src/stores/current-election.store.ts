import { defineStore } from 'pinia';
import { useElectionQueueStore } from './election-queue.store';
import { fetchElectionById } from '~/services/elections';
import type { Election } from '~/types/elections';

export const useCurrentElectionStore = defineStore('currentElectionStore', () => {
    const electionQueueStore = useElectionQueueStore();

    const currentElection = ref<Election | null>(null);

    function setCurrentElection(election: Election | null) {
        currentElection.value = election;
    }

    async function getCurrentElection() {
        if (!electionQueueStore.currentElection) return;
        
        const { data } = await fetchElectionById(electionQueueStore.currentElection);
        if (data.value) {
            setCurrentElection(data.value);
        }
    }

    return {
        getCurrentElection,
        currentElection
    }
});