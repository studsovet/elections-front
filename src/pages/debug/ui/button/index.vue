<script lang="ts" setup>
    import Button from 'lib/Button/Button.vue';
</script>

<template>
    <div class="content">
        <div class="button-block">
            <Button>Кнопка</Button>
            <Button :disabled="true">Заблокированная кнопка</Button>
        </div>
        <div class="button-block _blue-back">
            <Button theme="secondary">Кнопка</Button>
            <Button theme="secondary" :disabled="true">Заблокированная кнопка</Button>
        </div>
        <div class="button-block _grey-back">
            <Button theme="info">Кнопка</Button>
            <Button theme="info" :disabled="true">Заблокированная кнопка</Button>
        </div>
        <div class="button-block">
            <Button theme="success">Кнопка</Button>
            <Button theme="success" :disabled="true">Заблокированная кнопка</Button>
        </div>
        <div class="button-block">
            <Button theme="danger">Кнопка</Button>
            <Button theme="danger" :disabled="true">Заблокированная кнопка</Button>
        </div>
        <div class="button-block">
            <Button fullWidth>Кнопка</Button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.button-block {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: self-start;
    gap: 0.5rem;
}

.button-block._blue-back {
    @apply bg-blue-primary;
}

.button-block._grey-back {
    @apply bg-grey-secondary;
}
</style>