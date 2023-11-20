<script lang="ts" setup>
    import CommonLayout from '~/components/CommonLayout/CommonLayout.vue';
</script>

<template>
    <CommonLayout :show-logout="false" :show-title="false">
        <slot></slot>
    </CommonLayout>
</template>