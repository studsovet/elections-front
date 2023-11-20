import { useElectionQueueStore } from '~/stores/election-queue.store';

export default defineNuxtRouteMiddleware(async () => {
    if (!process.client) return;

    const electionQueueStore = useElectionQueueStore();
    await electionQueueStore.getAllElections();
});