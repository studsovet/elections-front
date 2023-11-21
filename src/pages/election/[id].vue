<script lang="ts" setup>
    import { PageName } from '~/types/routes';
    import { useCurrentElectionStore } from '~/stores/current-election.store';

    import { Button } from '~/lib/Button';
    import { Typo } from '~/lib/Typography';
    import CandidatesList from '~/components/CandidatesList/CandidatesList.vue';


    const currentElectionStore = useCurrentElectionStore();
    
    const votesLeft = ref<number | undefined>(currentElectionStore.currentElection?.mandates);

    definePageMeta({
        name: PageName.Election,
        middleware: [
            'get-election-stages',
            'get-current-election'
        ]
    });

    function onVote() {

    }
</script>

<template>
    <div class="election-page" v-if="currentElectionStore.currentElection">
        <div class="head-content">
            <h1 class="title" :class="[Typo.HEAD]">
                {{ currentElectionStore.currentElection.name }}
            </h1>
            <p class="votes-left">
                Доступно голосов: {{ votesLeft }}
            </p>
        </div>
        <div class="vote-block">
            <CandidatesList
                :candidates="currentElectionStore.candidates"
                :election="currentElectionStore.currentElection"
                v-model:votes-left="votesLeft"
                @vote="onVote"
            />
        </div>
        <div class="btn-block">
            <Button :disabled="votesLeft !== 0" theme="primary">
                Сохранить голоса и перейти дальше
            </Button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .election-page {
        width: 100%;
        padding-top: 3.5rem;
        padding-bottom: 2.25rem;
    }

    .head-content {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
    }

    .vote-block {
        margin-top: 2rem;
        max-width: 720px;
    }

    .title {
        @apply text-blue-primary;
    }

    .votes-left {
        @apply text-blue-primary;
    }

    .btn-block {
        margin-top: 2rem;
    }
</style>