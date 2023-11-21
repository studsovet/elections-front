<script lang="ts" setup>
    import TheHeader from '~/components/TheHeader/TheHeader.vue';

    type CommonLayoutProps = {
        showTitle?: boolean,
        showLogout?: boolean
    };

    const props = withDefaults(
        defineProps<CommonLayoutProps>(),
        {
            showTitle: true,
            showLogout: true
        }
    );
</script>

<template>
    <div class="app-layout">
        <TheHeader :show-logout="showTitle" :show-title="showTitle" />
        <div class="app-content">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '~/components/TheHeader/index.scss';

    .app-layout {
        width: 100%;
        height: 100%;
    }

    .app-content {
        @apply px-[1rem];
        padding-top: $theHeaderHeight;
        width: 100%;
        height: 100%;
        max-width: 1200px;
        margin: 0 auto;
    }

    @media screen and (max-width: theme('screens.sm')) {
        .app-content {
            padding-top: $theHeaderHeightMobile;
        }
    }
</style>
