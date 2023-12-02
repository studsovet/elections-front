<script lang="ts" setup>
    import type { DefineComponent } from 'vue';
    import type { Election } from '~/types/elections';
    import { PageName } from '~/types/routes';
    import { getElectionDescription } from './helpers';

    import IcUserCheck from '~/lib/Icon/UserCheck.svg';
    import Button from '~/lib/Button/Button.vue';

    type ElectionStageNavigationItemProps = {
        title: string;
        icon?: InstanceType<DefineComponent> | string;
        election: Election | null;
        endDescription?: string;
        disabled?: boolean;
    };

    const props = withDefaults(
        defineProps<ElectionStageNavigationItemProps>(),
        {
            disabled: false,
            icon: IcUserCheck,
            election: null
        }
    );

    const description = computed<string>(() => {
        return getElectionDescription(props.election);
    });

    function navigateToElection() {
        if (!props.election?.id) return;

        navigateTo({
            name: PageName.Election,
            params: {
                id: props.election.id
            }
        });
    }
</script>

<template>
    <div class="election-stage-navigation-item">
        <div class="content">
            <div class="title">
                {{ election?.name ?? title }}
            </div>
            <p class="description">
                {{ description }}
            </p>
            <div class="btn-wrapper">
                <Button @click="navigateToElection" theme="secondary">Перейти</Button>
            </div>
        </div>
        <div class="icon-wrapper">
            <Component :is="icon" class="icon" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .election-stage-navigation-item {
        @apply bg-blue-primary;
        border-radius: 0.5rem;
        max-width: 320px;
        padding: 1.25rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 1rem;
    }

    .title {
        @apply text-white;
        margin-bottom: 0.5rem;
    }

    .description {
        @apply text-white;
    }

    .btn-wrapper {
        margin-top: 1.75rem;
    }

    .icon {
        @apply text-white;
        font-size: 4.5rem;
    }
</style>