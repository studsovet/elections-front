import { defineStore } from 'pinia';
import { publicDecrypt } from 'crypto';
import { useElectionQueueStore } from './election-queue.store';
import { fetchCandidates, fetchElectionById, fetchElectionPublicKey } from '~/services/elections';
import { ElectionStatus, type Election } from '~/types/elections';
import type { Candidate } from '~/types/candidate';

export const useCurrentElectionStore = defineStore('currentElectionStore', () => {
    const electionQueueStore = useElectionQueueStore();

    const currentElection = ref<Election | null>(null);
    const fetching = ref<boolean>(false);
    const error = ref<Error | null>(null);
    const candidates = ref<Candidate[]>([]);
    const publicKey = ref<string | null>(null);

    function setCurrentElection(election: Election | null) {
        currentElection.value = election;
    }

    function setFetching(bool: boolean) {
        fetching.value = bool;
    }

    function setError(newError: Error | null) {
        error.value = newError;
    }

    function setCandidates(electionCandidates: Candidate[]) {
        candidates.value = [...electionCandidates];
    }

    function setPublicKey(electionPublicKey: string | null) {
        publicKey.value = electionPublicKey;
    }

    async function getCurrentElection() {
        if (!electionQueueStore.currentElection) return;
        
        setFetching(true);
        const { data, error } = await fetchElectionById(electionQueueStore.currentElection);

        const currentElection = data.value;
        if (currentElection) {
            if (currentElection.status === ElectionStatus.Started) {
                setCurrentElection(data.value);
                setError(error.value);
                setFetching(false);
                return;
            }
            electionQueueStore.setElectionVoted(electionQueueStore.currentElection);
            getCurrentElection();
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