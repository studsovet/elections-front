<script lang="ts" setup>
    import { Typo } from 'lib/Typography';
    import Button from 'lib/Button/Button.vue';

    definePageMeta({
        layout: 'login'
    });
</script>

<template>
    <div class="login-page">
        <div class="content">
            <h1 class="header" :class=[Typo.HEAD]>Выборы 2023-2024</h1>
            <div class="description">
                <p class="description-item" :class=[Typo.BODY]>
                    Добро пожаловать на страницу выборов в Студенческое самоуправление 2023-2023!
                </p>
                <p class="description-item" :class=[Typo.BODY]>
                    После авторизации вы сможете просмотреть список кандидатов, выдвинуть свою кандидатуру и принять участие в голосовании.
                </p>
            </div>
            <div class="btn-wrapper">
                <Button>Войти через ЭЛК</Button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .login-page {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .header, .description-item {
        @apply text-blue-primary;
        text-align: center;
    }

    .description {
        max-width: 642px;
        margin-top: 3.5rem;
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }

    .btn-wrapper {
        margin-top: 6rem;
    }

    @media screen and (max-width: theme('screens.sm')) {
        .description {
            margin-top: 5rem;
        }  

        .btn-wrapper {
            margin-top: 8rem;
        }
    }
</style>
