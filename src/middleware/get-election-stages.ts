import { useElectionQueueStore } from '~/stores/election-queue.store';

export default defineNuxtRouteMiddleware(async () => {
    if (!process.server) return;

    const electionQueueStore = useElectionQueueStore();
    await electionQueueStore.getAllElections();
});