<script lang="ts" setup>
    import Button from "$lib/Button/Button.vue";
</script>

<template>
    <div class="content">
        <div class="button-block">
            <Button>Кнопка</Button>
        </div>
        <div class="button-block">
            <Button widthFull size="large">Большая кнопка</Button>
        </div>
        <div class="button-block">
            <Button disabled>Заблокированная кнопка</Button>
        </div>
        <div class="button-block">
            <Button icon="+">Кнопка с иконкой</Button>
        </div>
        <div class="button-block">
            <Button theme="secondary" icon="+"></Button>
        </div>
    </div>
</template>

<style scoped>
.content {
    width: 100%;
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
}
</style>