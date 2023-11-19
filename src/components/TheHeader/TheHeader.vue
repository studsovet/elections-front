<script lang="ts" setup>
    import { Typo } from 'lib/Typography';

    type TheHeaderProps = {
        showTitle?: boolean;
        showLogout?: boolean;
    };

    const props = withDefaults(
        defineProps<TheHeaderProps>(),
        {
            showTitle: false,
            showLogout: false
        }
    );
</script>

<template>
    <header class="the-header">
        <div class="the-header__content">
            <h3
                class="the-header__title"
                :class="[Typo.SUBHEAD]"
                v-if="showTitle"
            >
                Выборы в Студенческий совет НИУ ВШЭ
            </h3>
        </div>
    </header>
</template>

<style lang="scss" scoped>
    @import './index.scss';

    .the-header {
        @apply bg-blue-primary;
        height: $theHeaderHeight;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;

        @media screen and (max-width: theme('screens.sm')) {
            height: $theHeaderHeightMobile;
        }
    }

    .the-header__content {
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 1rem;
    }

    .the-header__title {
        @apply text-white;

        @media screen and (max-width: theme('screens.sm')) {
            max-width: 10rem;
        }
    }
</style>
