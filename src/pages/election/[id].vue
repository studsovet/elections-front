<script lang="ts" setup>
    import { PageName } from '~/types/routes';
    import { useCurrentElectionStore } from '~/stores/current-election.store';
    import { Typo } from '~/lib/Typography';

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
    </div>
</template>

<style lang="scss" scoped>
    .election-page {
        width: 100%;
        height: 100%;
        margin-top: 3.5rem;
    }

    .election-page__head-content {
        display: flex;
        justify-content: space-between;
    }

    .title {
        @apply text-blue-primary;
    }

    .votes-left {
        @apply text-blue-primary;
    }
</style>