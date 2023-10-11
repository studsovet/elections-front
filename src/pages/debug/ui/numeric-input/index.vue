<script lang="ts" setup>
    import { ref } from "vue";
    import NumericInput from "$lib/NumericInput/NumericInput.vue";

    const value = ref<number>(1);
</script>

<template>
    <div class="content">
        <div class="input-block">
            <h3 class="input-title">Простой input</h3>
            <NumericInput v-model="value" />
        </div>

        <div class="input-block">
            <h3 class="input-title">Input заблокированный</h3>
            <NumericInput v-model="value" disabled />
        </div>
    </div>
</template>


<style lang="scss" scoped>
.content {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.input-title {
    margin-bottom: 4px;
}
</style>