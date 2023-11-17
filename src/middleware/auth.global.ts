export default defineNuxtRouteMiddleware(async (to: any, from: any) => {
    if (!process.server) return;

    const tokenQuery = to.query.string as string | undefined;
    if (tokenQuery) {
        const tokenCookie = useCookie('authToken', { httpOnly: true });
        tokenCookie.value = tokenQuery;
    }
});