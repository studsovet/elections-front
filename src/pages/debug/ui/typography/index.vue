<script lang="ts" setup>
    import { Typo } from 'lib/Typography';
</script>

<template>
    <div class="content">
        <h3 class="title" :class=[Typo.HEAD]>
            Заголовок
        </h3>
        <p class="paragraph" :class=[Typo.BODY]>
            Текст
        </p>
        <NuxtLink>
            Ссылка
        </NuxtLink>
    </div>
</template>

<style lang="scss" scoped>
.content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.title, .paragraph {
    @apply text-grey-tertiary;
}
</style>