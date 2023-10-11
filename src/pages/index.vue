<script lang="ts" setup>
    import { Typo } from "$lib/Typography";
    import Button from "$lib/Button/Button.vue";
</script>

<template>
    <div class="welcome-page">
        <h1
            class="header"
            :class="Typo.HEAD_L"
        >
            Выборы 2023-2024
        </h1>
        <h3
            class="subheader"
            :class="Typo.SUBHEAD_L"
        >
            Добро пожаловать на страницу выборов Студенческое самоуправление 2023-2023!
        </h3>
        <p class="description">
            После авторизации вы сможете просмотреть список кандидатов, выдвинуть свою кандидатуру и принять участие в голосовании.
        </p>
        <div class="btn-wrapper">
            <Button size="large" theme="secondary">
                Войти через ЭЛК
            </Button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.welcome-page {
    @apply text-white;

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.subheader, .header, .description {
    text-align: center;
}

.subheader {
    margin-top: 2rem;
    margin-bottom: 1rem;
}

.btn-wrapper {
    margin-top: 4rem;
}
</style>
