<script lang="ts" setup>
    import { PageName } from '~/types/routes';
    import { Typo } from '~/lib/Typography';
    import { useSessionStore } from '~/stores/session.store';
    import { useElectionQueueStore } from '~/stores/election-queue.store';

    const sessionStore = useSessionStore();
    const electionsQueueStore = useElectionQueueStore();

    definePageMeta({
        name: PageName.Home,
        middleware: ['get-election-stages']
    });
</script>

<template>
    <div class="home-page">
        <div class="greeting-block">
            <h1 class="greeting-block__header" :class=[Typo.HEAD]>
                <template v-if="sessionStore.currentUser?.first_name">
                    {{ sessionStore.currentUser.first_name }}, добро пожаловать 👋
                </template>
                <template v-else>
                    Добро пожаловать 👋
                </template>
            </h1>
            <p class="greeting-block__description" :class=[Typo.BODY]>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent ultricies eu ligula mattis cursus.
                Morbi sodales nulla ut turpis egestas accumsan.
                Donec sed purus sit amet nibh rhoncus convallis et et lacus.
                Proin eu molestie orci. Nullam congue ornare sapien, eget tempus purus consectetur eu.
                Nullam odio nibh, pharetra ut ipsum nec, dignissim maximus dui.
                Praesent at odio pellentesque, imperdiet tortor ut, pellentesque tellus.
            </p>
        </div>
        <div class="navigation-block">
            1
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .home-page {
        padding-top: 2.5rem;
        padding-bottom: 4.5rem;
    }

    .greeting-block__header {
        @apply text-blue-primary;
        margin-bottom: 1.25rem;
    }

    .greeting-block__description {
        @apply text-blue-primary;
        max-width: 1000px;
    }

    .navigation-block {
        margin-top: 1.25rem;
    }
</style>
