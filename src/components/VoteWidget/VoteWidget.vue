<script lang="ts" setup>
    import { Typo } from '~/lib/Typography';
    import Button from '~/lib/Button/Button.vue';
    import IcPlus from '~/lib/Icon/Plus.svg';
    import IcMinus from '~/lib/Icon/Minus.svg';

    type VoteWidgetType = {
        max: number;
        min?: number;
    }

    const props = withDefaults(
        defineProps<VoteWidgetType>(),
        {
            min: 0
        }
    );

    const votes = ref<number>(0);
    
    const addDisabled = computed<boolean>(() => {
        return votes.value >= props.max;
    });

    const removeDisabled = computed<boolean>(() => {
        return votes.value <= props.min;
    });

    function addVote() {
        if (!addDisabled.value) {
            votes.value++;
        }
    }

    function removeVote() {
        if (!removeDisabled.value) {
            votes.value--;
        }
    }
</script>

<template>
    <div class="vote-widget">
        <p class="vote-text">
            Проголосовать
        </p>
        <div class="vote-widget__content">
            <Button
                :icon="IcMinus"
                theme="danger"
                :disabled="removeDisabled"
                @click="removeVote"
            ></Button>
            <p class="vote-number" :class="[Typo.BODY]">
                {{ votes }}
            </p>
            <Button
                :icon="IcPlus"
                theme="success"
                :disabled="addDisabled"
                @click="addVote"
            ></Button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .vote-widget {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .vote-widget__content {
        display: flex;
        gap: 1.25rem;
    }

    .vote-text {
        @apply text-white;
    }

    .vote-number {
        @apply text-white;
    }
</style>
