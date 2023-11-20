<script lang="ts" setup>
    import { PageName } from '~/types/routes';
    import { useCurrentElectionStore } from '~/stores/current-election.store';

    import { Typo } from '~/lib/Typography';
    import CandidatesList from '~/components/CandidatesList/CandidatesList.vue';

    const currentElectionStore = useCurrentElectionStore();

    definePageMeta({
        name: PageName.Election,
        middleware: [
            'get-election-stages',
            'get-current-election'
        ]
    });
</script>

<template>
    <div class="election-page" v-if="currentElectionStore.currentElection">
        <div class="election-page__head-content">
            <h1 class="title" :class="[Typo.HEAD]">
                {{ currentElectionStore.currentElection.name }}
            </h1>
            <p class="votes-left">
                Доступно голосов: {{ currentElectionStore.currentElection.mandates }}
            </p>
        </div>
        <div class="election-page__vote-block">
            <CandidatesList :candidates="currentElectionStore.candidates"/>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .election-page {
        width: 100%;
        padding-top: 3.5rem;
        padding-bottom: 2.25rem;
    }

    .election-page__head-content {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
    }

    .election-page__vote-block {
        margin-top: 2rem;
        max-width: 720px;
    }

    .title {
        @apply text-blue-primary;
    }

    .votes-left {
        @apply text-blue-primary;
    }
</style>