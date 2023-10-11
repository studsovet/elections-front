<script lang="ts" setup>
    import { type DefineComponent, computed, useSlots } from "vue";
    import type {
        ButtonTheme,
        ButtonSize,
        ButtonHtmlType
    } from "./types";
    import { Typo } from "$lib/Typography";

    type ButtonProps = {
        theme?: ButtonTheme;
        size?: ButtonSize;
        widthFull?: boolean;
        icon?: InstanceType<DefineComponent> | string;
        disabled?: boolean;
        htmlType?: ButtonHtmlType;
    }

    const props = withDefaults(
        defineProps<ButtonProps>(),
        {
            theme: "primary",
            size: "normal",
            disabled: false,
            widthFull: false,
            htmlType: "button"
        }
    );

    const slots = useSlots();

    const classes = computed<string[]>(() => {
        const themeClass = `_theme-${props.theme}`;
        const sizeClass = `_size-${props.size}`;
        const widthFull = props.widthFull ? `_width-full` : '';
        const isIcon = !slots["default"] && props.icon ? '_icon' : '';

        return [
            themeClass,
            sizeClass,
            widthFull,
            isIcon,
            Typo.SUBHEAD
        ];
    });
</script>

<template>
    <button
        class="button"
        :class="classes"
        :disabled="disabled"
    >
        <div class="button__icon" v-if="icon">
            <template v-if="(typeof icon === 'string')">
                {{ icon }}
            </template>
            <Component :is="icon" v-else/>
        </div>
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
.button {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;

    background-color: var(--buttonBgColor, theme('colors.blue-primary'));
    color: var(--buttonTextColor);
    border-radius: var(--buttonBorderRadius, 1rem);
    padding: var(--buttonPadding);

    transition: ease-in-out .3s opacity;
}

.button._icon {
    width: 3rem;
    height: 3rem;
    --buttonBorderRadius: 50%;
}

.button._width-full {
    width: 100%;
}

.button._size-large {
    --buttonPadding: 0.75rem;
}

.button._size-normal {
    --buttonPadding: 0.25rem 0.75rem;
}

.button._theme-primary {
    --buttonBgColor: theme('colors.blue-primary');
    --buttonTextColor: theme('colors.white');
}

.button._theme-secondary {
    --buttonBgColor: theme('colors.white');
    --buttonTextColor: theme('colors.blue-primary');
}

.button:hover:not(:disabled) {
    opacity: 0.75;
}

.button:disabled {
    --buttonBgColor: theme('colors.grey-secondary');
    --buttonTextColor: theme('colors.white');
}
</style>
