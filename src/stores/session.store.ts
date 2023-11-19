import type { UserInfo } from '~/types/user';
import { defineStore } from 'pinia';

export const useSessionStore = defineStore('sessionStore', () => {
    const { $config } = useNuxtApp();
    const tokenCookie = useCookie('token');

    const currentUser = ref<UserInfo | null>(null);
    
    function setCurrentUser(user: UserInfo | null) {
        if (user === null) {
            currentUser.value = null;
            return;
        }

        // TODO: add json validation
        currentUser.value = user;
    }

    async function getCurrentUser() {
        setCurrentUser({
            email: '123',
            first_name: 'Артём',
            last_name: 'Почувалов'
        });
        // setCurrentUser(null);
    }

    function login() {
        navigateTo(`${$config.public.backendIp}/auth/elk?redirect_uri=${$config.public.clientIp}/login`, {
            external: true
        });
    }

    function logout() {
        tokenCookie.value = undefined;
        setCurrentUser(null);
    }

    return {
        login,
        logout,
        currentUser,
        getCurrentUser
    };
});