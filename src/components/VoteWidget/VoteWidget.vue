<script lang="ts" setup>
    import Button from '~/lib/Button/Button.vue';
    import IcPlus from '~/lib/Icon/Plus.svg';
    import IcMinus from '~/lib/Icon/Minus.svg';

    type VoteWidgetType = {
        id: string;
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
        <div class="btn-wrapper">
            <Button
                :icon="IcMinus"
                theme="danger"
                :disabled="removeDisabled"
                @click="removeVote"
            ></Button>
            <p class="vote-number">
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
    
</style>
