import type { UserInfo } from '~/types/user';
import { defineStore } from 'pinia';
import { Cookies } from '~/types/cookie';
import { useApi } from '~/services/useApi';
import { getMyProfile } from '~/services/auth';

export const useSessionStore = defineStore('sessionStore', () => {
    const { $config } = useNuxtApp();
    const { baseURL } = useApi();
    const tokenCookie = useCookie(Cookies.AuthToken);

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
        const { data, error } = await getMyProfile();

        if (!error.value) {
            setCurrentUser(data.value);
        } else {
            setCurrentUser(null);
        }
    }

    function login() {
        navigateTo(`${baseURL}/auth/elk?redirect_uri=${$config.public.clientIp}/login`, {
            external: true,
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