export default defineNuxtRouteMiddleware((to, _from) => {
    if (!process.server) return;

    const tokenQuery = to.query.token as string | undefined;
    if (tokenQuery) {
        const tokenCookie = useCookie('token', { httpOnly: true });
        tokenCookie.value = tokenQuery;
        return navigateTo({ ...to, query: {} });
    }
});