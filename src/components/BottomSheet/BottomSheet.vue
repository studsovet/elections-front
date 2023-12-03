<script lang="ts" setup>
    import VueBottomSheet from '@webzlodimir/vue-bottom-sheet';
    import '@webzlodimir/vue-bottom-sheet/dist/style.css';

    type BottomSheetProps = {
        show?: boolean;
    };

    type BottomSheetEmits = {
        (e: "update:show", show: boolean): void;
    };

    const props = withDefaults(
        defineProps<BottomSheetProps>(),
        {
            show: false
        }
    );

    const emit = defineEmits<BottomSheetEmits>();

    const bottomSheetRef = ref<InstanceType<typeof VueBottomSheet>>();

    const open = () => {
        bottomSheetRef.value?.open();
    };

    const close = () => {
        emit("update:show", false);
    };

    watch(
        () => props.show,
        (show) => {
            if (show) {
                open();
            } else {
                close();
            }
        }
    );
</script>

<template>
    <ClientOnly>
        <VueBottomSheet ref="bottomSheetRef" @closed="close">
            <slot></slot>
        </VueBottomSheet>
    </ClientOnly>
</template>

<style lang="scss" scoped>
    :global(.bottom-sheet__content) {
        max-width: 100% !important;
        min-height: 30vh !important;
        max-height: 70vh !important;
        height: unset !important;
    }

    :global(.bottom-sheet__overlay) {
        background-color: theme('colors.black') !important;
        opacity: 0.7;
    }
</style>