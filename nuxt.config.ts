export default defineNuxtConfig({
	devtools: { enabled: true },
	components: true,
	css: ['normalize.css/normalize.css', '@/styles/index.scss'],
	modules: [
		'@nuxtjs/tailwindcss',
		'nuxt-svgo',
		'@pinia/nuxt',
		'@vueuse/nuxt',
	],
	srcDir: 'src',
	svgo: {
		autoImportPath: '@/lib/Icon',
		componentPrefix: 'Ic'
	},
	runtimeConfig: {
		public: {
			backendIp: '',
			clientIp: ''
		}
	}
});
