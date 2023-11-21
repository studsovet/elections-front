import { defineStore } from 'pinia';
import { fetchAllElections } from '~/services/elections';
import { ElectionStatus } from '~/types/elections';

export const useElectionQueueStore = defineStore('electionQueueStore', () => {
    const unvotedElectionsMap = reactive<Set<string>>(new Set());
    const votedSelectionsMap = reactive<Set<string>>(new Set());

    const unvotedElections = computed(() => {
        return Array.from(unvotedElectionsMap);
    });
    const votedSelections = computed(() => {
        return Array.from(votedSelectionsMap);
    });

    const currentElection = computed<string | undefined>(() => {
        return unvotedElections.value[0];
    });

    async function getAllElections() {
        const { data } = await fetchAllElections(ElectionStatus.Started);

        if (Array.isArray(data.value)) {
            for (const electionId of data.value) {
                unvotedElectionsMap.add(electionId);
            }
        }
    }

    function setElectionVoted(electionId: string) {
        votedSelectionsMap.add(electionId);
        unvotedElectionsMap.delete(electionId);
    }

    return {
        unvotedElections,
        votedSelections,
        getAllElections,
        setElectionVoted,
        currentElection
    }
});