<script lang="ts" setup>
    import type { Candidate, CandidateVote } from '~/types/candidate';
    import type { Election } from '~/types/elections';

    import CandidateCard from './elements/CandidateCard.vue';

    type CandidateListProps = {
        candidates: Candidate[];
        election: Election;
    };

    type CandidateListEmits = {
        (e: 'vote', candidateVote: CandidateVote): void;
        (e: 'update:votesLeft', votesLeft: number): void;
    };

    const props = withDefaults(
        defineProps<CandidateListProps>(),
        {
            candidates: () => ([]),
            election: () => ({} as Election)
        }
    );

    const emit = defineEmits<CandidateListEmits>();

    const candidateVotes: CandidateVote[] = reactive(
        props.candidates.map(candidate => ({
            candidate: candidate,
            votes: 0,
            votesLeft: props.election.mandates ?? 0
        }))
    );

    function handleCandidateVotesChange(candidateVote: CandidateVote, newVotes: number) {
        const voteDiff = newVotes - candidateVote.votes;

        candidateVotes.map((currentCandidateVote) => {
            if (currentCandidateVote.candidate.id !== candidateVote.candidate.id) {
                currentCandidateVote.votesLeft -= voteDiff;
            } else {
                currentCandidateVote.votes = newVotes;
            }
        });

        emit('vote', candidateVote);
    }

    watchEffect(() => {
        const votesSum = candidateVotes.reduce((votesSum, candidateVote) => {
            return votesSum + candidateVote.votes;
        }, 0);

        if (props.election.mandates) {
            emit('update:votesLeft', props.election.mandates - votesSum);
        }
    });
</script>

<template>
    <div class="candidate-list">
        <CandidateCard
            v-for="candidateVote of candidateVotes"
            :candidate="candidateVote.candidate"
            :key="candidateVote.candidate.id"
        >
            <template v-slot:voteBlock>
                <VoteWidget
                    :votes="candidateVote.votes"
                    :max="candidateVote.votesLeft"
                    @update:votes="votes => (
                        handleCandidateVotesChange(candidateVote, votes)
                    )"
                />
            </template>
        </CandidateCard>
    </div>
</template>

<style lang="scss" scoped>
    .candidate-list {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }
</style>