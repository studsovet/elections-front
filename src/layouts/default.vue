<script lang="ts" setup>
    
</script>

<template>
    <Style>
        :root {
            --appBgColor: var(--blue-secondary);
        }
    </Style>

    <div class="page-layout">
        <div class="content-wrapper">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.page-layout {
    width: 100%;
    height: 100%;
}

.content-wrapper {
    width: 100%;
    height: 100%;
    max-width: 1200px;
    padding: 0 1rem;
    margin: 0 auto;
}
</style>