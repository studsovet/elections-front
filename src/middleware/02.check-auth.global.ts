import { useSessionStore } from '~/stores/session.store';
import { PageName } from '~/types/routes';

export default defineNuxtRouteMiddleware(async (to, _from) => {
    const sessionStore = useSessionStore();

    await sessionStore.getCurrentUser();
    if (!sessionStore.currentUser && to.name !== PageName.Login) {
        return navigateTo({ name: PageName.Login });
    }
    if (sessionStore.currentUser && to.name === PageName.Login) {
        return navigateTo({ name: PageName.Home });
    }
});