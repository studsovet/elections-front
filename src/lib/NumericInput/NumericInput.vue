<script lang="ts" setup>
    import Input from '$lib/Input/Input.vue';
    import Button from '$lib/Button/Button.vue';

    type NumericInputProps = {
        disabled?: boolean;
        modelValue: number;
    }

    type NumericInputEmits = {
        (e: "update:modelValue", value: number): void;
    }

    const props = withDefaults(
        defineProps<NumericInputProps>(),
        {
            disabled: false,
        }
    );

    const emit = defineEmits<NumericInputEmits>();

    const inputValue = ref<number>(props.modelValue);

    function onValueUpdate(value: string) {
        const numericValue = parseInt(value);
        if (isFinite(numericValue)) {
            inputValue.value = numericValue;
            return emit("update:modelValue", inputValue.value);
        }
    }

    function increament() {
        inputValue.value++;
    }

    function decreament() {
        inputValue.value--;
    }
</script>

<template>
    <div class="numeric-input-wrapper">
        <Button icon="-" :disabled="disabled" @click="decreament" />
        {{ inputValue }}
        <Input
            class="numeric-input"
            :disabled="disabled"
            v-model:modelValue="inputValue"
            @update:modelValue="onValueUpdate"
        />
        <Button icon="+" :disabled="disabled" @click="increament" />
    </div>
</template>

<style scoped>
.numeric-input-wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.numeric-input {
    --inputPadding: 0.25rem 1.5rem;
}
</style>
