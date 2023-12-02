import { useElectionQueueStore } from '~/stores/election-queue.store';

export default defineNuxtRouteMiddleware(async () => {
    const electionQueueStore = useElectionQueueStore();

    if (electionQueueStore.unvotedElections.length === 0) {
        await electionQueueStore.getAllElections();
    }
});