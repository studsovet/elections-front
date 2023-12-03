<script lang="ts" setup>
    import { Typo } from '~/lib/Typography';
    import type { Candidate } from '~/types/candidate';

    type CandidateDescriptionProps = {
        candidate: Candidate;
    };

    const props = withDefaults(
        defineProps<CandidateDescriptionProps>(),
        {
            candidate: () => ({} as Candidate)
        }
    );
</script>

<template>
    <div class="candidate-description">
        <div class="img-block">
            <img :src="candidate.photourl" :alt="`Картинка участника ${candidate.name}`">
        </div>
        <h3 class="name" :class="[Typo.HEAD]">
            {{ candidate.name }}
        </h3>
        <p class="description">
            {{ candidate.description }}
        </p>
    </div>
</template>

<style lang="scss" scoped>
    .candidate-description {
        max-width: 760px;
        margin: 0 auto;
        padding: 0 1rem 3rem;
    }

    .img-block {
        width: 272px;
        height: 360px;
        float: left;
        margin-right: 2rem;
        margin-bottom: 1rem;
    }

    img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 0.5rem;
    }

    .name {
        margin-bottom: 0.75rem;
    }

    .name, .description {
        @apply text-blue-primary;
    }
</style>