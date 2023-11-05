<script lang="ts" setup>
    import { type DefineComponent } from 'vue';
    import type {
        ButtonTheme,
        ButtonHTMLType,
    } from './types';
    import { Typo } from 'lib/Typography';

    type ButtonProps = {
        theme?: ButtonTheme;
        fullWidth?: boolean;
        icon?: InstanceType<DefineComponent>;
        disabled?: boolean;
        htmlType?: ButtonHTMLType;
    }

    const props = withDefaults(
        defineProps<ButtonProps>(),
        {
            theme: 'primary',
            disabled: false,
            fullWidth: false,
            htmlType: 'button'
        }
    );

    const slots = useSlots();

    const classes = computed<string[]>(() => {
        const theme = `_${props.theme}`;
        const fullWidth = props.fullWidth ? '_full-width' : '';
        const icon = props.icon && !slots.default ? '_icon' : '';

        return [
            theme,
            fullWidth,
            icon,
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
        <slot></slot>
        
        <div class="button__icon" v-if="icon">
            <Component :is="icon" />
        </div>
    </button>
</template>

<style lang="scss" scoped>
.button {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    transition-duration: 200ms;
    transition-timing-function: ease-in;
    transition-property: background-color, border, color;

    background-color: var(--buttonBgColor);
    border: 2px solid var(--buttonBorderColor, currentColor);
    color: var(--buttonTextColor);
    padding: var(--buttonPadding, 7px 0.75rem);
    width: var(--buttonWidth);
}

.button._full-width {
    --buttonWidth: 100%;
}

.button._primary {
    --buttonTextColor: theme('colors.blue-primary');
    --buttonBgColor: theme('colors.white');
}

.button._primary:hover {
    --buttonBgColor: theme('colors.blue-primary');
    --buttonTextColor: theme('colors.white');
    --buttonBorderColor: theme('colors.blue-primary');
}

.button._primary:disabled {
    --buttonBgColor: theme('colors.grey-secondary');
    --buttonTextColor: theme('colors.grey-tertiary');
    --buttonBorderColor: currentColor;
}

.button._secondary {
    --buttonBgColor: transparent;
    --buttonTextColor: theme('colors.white');
}

.button._secondary:hover {
    --buttonBgColor: theme('colors.white');
    --buttonTextColor: theme('colors.blue-primary');
}

.button._secondary:disabled {
    --buttonBgColor: transparent;
    --buttonTextColor: theme('colors.grey-tertiary');
    --buttonBorderColor: currentColor;
}

.button._success {
    --buttonTextColor: theme('colors.white');
    --buttonBgColor: theme('colors.success');
}

.button._success:hover {
    --buttonTextColor: theme('colors.success');
    --buttonBgColor: theme('colors.white');
}

.button._success:disabled {
    --buttonBgColor: transparent;
    --buttonTextColor: theme('colors.grey-tertiary');
    --buttonBorderColor: currentColor;
}

.button._danger {
    --buttonTextColor: theme('colors.white');
    --buttonBgColor: theme('colors.danger');
}

.button._danger:hover {
    --buttonTextColor: theme('colors.danger');
    --buttonBgColor: theme('colors.white');
}

.button._danger:disabled {
    --buttonBgColor: transparent;
    --buttonTextColor: theme('colors.grey-tertiary');
    --buttonBorderColor: currentColor;
}

.button._info {
    --buttonBgColor: transparent;
    --buttonTextColor: theme('colors.white');
}

.button._info:hover {
    --buttonBgColor: theme('colors.blue-primary');
    --buttonTextColor: theme('colors.white');
}

.button._info:disabled {
    --buttonBgColor: transparent;
    --buttonTextColor: theme('colors.grey-tertiary');
    --buttonBorderColor: currentColor;
}

.button:disabled {
    cursor: not-allowed;
}

.button._icon {
    width: 2rem;
    height: 2rem;
    --buttonPadding: 0;
}
</style>
