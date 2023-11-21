import { PageName } from '~/types/routes';
import { useCurrentElectionStore } from '~/stores/current-election.store';

export default defineNuxtRouteMiddleware(async (to) => {
    const currentElectionStore = useCurrentElectionStore();
    await currentElectionStore.getCurrentElection();

    const electionId = to.params.id as string;
    if (!currentElectionStore.currentElection) {
        return navigateTo({ name: PageName.Home });
    }

    const currentElectionId = currentElectionStore.currentElection.id;
    if (currentElectionId !== electionId) {
        return navigateTo({
            name: PageName.Election,
            params: {
                id: currentElectionId
            }
        });
    }

    await Promise.all([
        currentElectionStore.getCandidates(),
        currentElectionStore.getPublicKey()
    ]);
});