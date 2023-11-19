import { createFetch } from '@vueuse/core';

const { $config } = useNuxtApp();

export const useFetch = createFetch({
    baseUrl: $config.public.backendIp,
    fetchOptions: {
        // mode: $config.app.
    }
})