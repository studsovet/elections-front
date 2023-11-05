<script lang="ts" setup>
    import { ref, watchEffect, computed } from "vue";

    type InputProps = {
        modelValue?: string | number;
        placeholder?: string;
        disabled?: boolean;
        error?: string;
        mask?: RegExp;
    }

    type InputEmits = {
        (e: "update:modelValue", value: string): void;
    }

    const props = withDefaults(
        defineProps<InputProps>(), 
        {
            modelValue: '',
            disabled: false
        }
    );

    const emit = defineEmits<InputEmits>();

    const focused = ref<boolean>(false);

    const stringmodelValue = computed<string>(() => {
        return props.modelValue.toString();
    });

    const inputValue = ref<string>(stringmodelValue.value);

    watchEffect(() => {
        if (!checkMask(stringmodelValue.value)) {
            emit("update:modelValue", '');
            inputValue.value = '';
        }
    });

    function handleFocus() {
        focused.value = true;
    }

    function handleBlur() {
        focused.value = false;
    }

    function handleInput(event: Event) {
        const input = event.target as any;

        if (!checkMask(input.value)) {
            input.value = inputValue.value;
        }

        inputValue.value = input.value;

        emit("update:modelValue", inputValue.value);
    }

    function checkMask(value: string): boolean {
        if (props.mask && value) {
            const maskRegex = new RegExp(props.mask);
            return maskRegex.test(value);
        }
        return true;
    }
</script>

<template>
    <div
        class="input-wrapper"
        :class="[
            {'focused': focused}
        ]"
    >
        <div class="content">
            <input
                class="input"
                :class="[
                    {'error': error}
                ]"
                @input="handleInput"
                @focus="handleFocus"
                @blur="handleBlur"
                :value="inputValue"
                :disabled="disabled"
            >

            <p class="placeholder" v-if="placeholder">{{ placeholder }}</p>
        </div>

        <p class="error-message" v-if="error">{{ error }}</p>
    </div>
</template>

<style lang="scss" scoped>
.input-wrapper {
    position: relative;
    display: flex;
    flex-direction: column;

    --inputPadding: 14px 18px;
    --inputFocusedPlaceholderPadding: 4px 20px;
}

.content {
    display: flex;
}

.input {
    border: 2px solid theme('colors.grey-secondary');
    border-radius: 16px;
    padding: var(--inputPadding);
    outline: none;
    flex: auto;
}

.input:focus {
    border-color: theme('colors.blue-primary');
    outline: none;
}

.input:disabled {
    background-color: theme('colors.grey-secondary');
}

.input.error {
    border-color: theme('colors.danger');
}

.placeholder {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: transparent;
    padding: var(--inputPadding);
    pointer-events: none;
    transition: 100ms ease-out padding, 100ms ease-out font-size; 
}

.focused .placeholder {
    padding: var(--inputFocusedPlaceholderPadding);
    font-size: 10px;
}

.error-message {
    margin-top: 4px;
    color: theme('colors.danger');
}
</style>