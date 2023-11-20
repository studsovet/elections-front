import { defineStore } from 'pinia';
import { useElectionQueueStore } from './election-queue.store';

export const useCurrentElectionStore = defineStore('currentElectionStore', () => {
    const electionQueueStore = useElectionQueueStore();

    async function getCurrentElection() {
        // TODO
    }
});