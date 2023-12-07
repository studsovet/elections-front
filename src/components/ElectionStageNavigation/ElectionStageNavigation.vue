<script lang="ts" setup>
    import { useCurrentElectionStore } from '~/stores/current-election.store';

    import ElectionStageNavigationItem from './ElectionStageNavigationItem.vue';
    import IcUserCheck from '~/lib/Icon/UserCheck.svg';

    const currentElectionStore = useCurrentElectionStore();
    
    await currentElectionStore.getCurrentElection();
</script>

<template>
    <div class="election-stage-navigation">
        <ElectionStageNavigationItem
            title="Голосование"
            :election="currentElectionStore.currentElection"
            :icon="IcUserCheck"
        />
    </div>
</template>

<style lang="scss" scoped>
    
</style>