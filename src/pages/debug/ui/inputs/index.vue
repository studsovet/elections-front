<script lang="ts" setup>
import Input from "$lib/Input/Input.vue";

const value = ref<string>("");
</script>

<template>
    <div class="content">
        <div class="input-block">
            <h3 class="input-title">Простой input</h3>
            <Input v-model="value" />
        </div>

        <div class="input-block">
            <h3 class="input-title">Input с заглушкой</h3>
            <Input v-model="value" placeholder="Заглушка" />
        </div>
    
        <div class="input-block">
            <h3 class="input-title">Input с ошибкой</h3>
            <Input v-model="value" error="Ошибка" />
        </div>

        <div class="input-block">
            <h3 class="input-title">Input с маской</h3>
            <Input v-model="value" :mask=/^\d{0,5}$/ />
        </div>

        <div class="input-block">
            <h3 class="input-title">Заблокированный input</h3>
            <Input v-model="value" disabled />
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