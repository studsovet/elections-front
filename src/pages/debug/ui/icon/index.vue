<script lang="ts" setup></script>

<template>
    <div class="content">
        <div class="icons-block">
            <IcUserCheck class="icon" />
            <IcUserPlus class="icon" />
            <IcCross class="icon" />
            <IcMinus class="icon" />
            <IcPlus class="icon" />
            <IcBoxArrowLeft class="icon" />
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

.icons-block {
    display: flex;
    gap: 1rem;
}

.icon {
    @apply text-blue-primary;
    font-size: 2rem;
}
</style>