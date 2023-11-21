<script lang="ts" setup>
    import type { Candidate } from '~/types/candidate';

    import Button from '~/lib/Button/Button.vue';
    import { Typo } from '~/lib/Typography';

    type CandidateCardProps = {
        candidate: Candidate;
    };

    const props = withDefaults(
        defineProps<CandidateCardProps>(),
        {
            candidate: () => ({} as Candidate)
        }
    );
</script>

<template>
    <div class="candidate-card">
        <div class="img-block">
            <img :src="candidate.photoUrl" :alt="`Картинка участника ${candidate.name}`" />
        </div>
        <div class="description-block">
            <h3 class="name" :class="[Typo.BODY]">
                {{ candidate.name }}
            </h3>
            <Button theme="info">Программа</Button>
        </div>
        <div class="vote-block">
            <slot name="voteBlock"></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .candidate-card {
        @apply bg-blue-primary;
        display: flex;
        align-items: center;
        padding: 0.625rem;
        width: 100%;
        border-radius: 0.5rem;
    }

    img {
        width: 140px;
        height: 140px;
        border-radius: 0.5rem;
        margin-right: 1rem;
        background-size: contain;
    }

    .description-block {
        flex-grow: 1;
    }

    .name {
        @apply text-white;
        margin-bottom: 1rem;
    }

    .vote-block {
        margin-right: 2.5rem;
    }
</style>
