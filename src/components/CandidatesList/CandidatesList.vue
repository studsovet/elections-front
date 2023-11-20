<script lang="ts" setup>
    import type { Candidate } from '~/types/candidate';

    import CandidateCard from './CandidateCard.vue';

    type CandidateListProps = {
        candidates: Candidate[];
        isRunoff?: boolean;
    }

    const props = withDefaults(
        defineProps<CandidateListProps>(),
        {
            isRunoff: false,
            candidates: () => ([])
        }
    );
</script>

<template>
    <div class="candidate-list">
        <CandidateCard
            v-for="candidate of candidates"
            :candidate="candidate"
            :key="candidate.id"
        />
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