<script lang="ts" setup>
    import { type DefineComponent } from 'vue';
    import type { ElectionStage } from './types';
    import { ElectionStatus } from '~/types/elections';
    import { getDescription } from './helpers/getDescription';

    import IcUserCheck from '~/lib/Icon/UserCheck.svg';
    import Button from '~/lib/Button/Button.vue';

    type ElectionStageNavigationProps = {
        title: string;
        icon?: InstanceType<DefineComponent> | string;
        onButtonClick?: () => void;
    } & ElectionStage;

    const props = withDefaults(
        defineProps<ElectionStageNavigationProps>(),
        {
            status: ElectionStatus.Finished,
            icon: IcUserCheck
        }
    );

    const description = computed<string>(() => {
        return getDescription({
            startTime: props.startTime,
            finishTime: props.finishTime,
            status: props.status,
            endDescription: props.endDescription 
        });
    });
</script>

<template>
    <div class="election-stage-navigation">
            <div class="election-stage-navigation__content">
                <div class="title">
                {{ title }}
            </div>
            <p class="description">
               {{ description }}
            </p>
            <div class="btn-wrapper">
                <Button @click="onButtonClick" theme="secondary">Перейти</Button>
            </div>
        </div>
        <div class="election-stage-navigation__icon-wrapper">
            <Component :is="icon" class="icon" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .election-stage-navigation {
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