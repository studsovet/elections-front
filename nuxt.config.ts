export default defineNuxtConfig({
	devtools: { enabled: true },
	components: true,
	css: ['normalize.css/normalize.css', '@/styles/index.scss'],
	modules: ['@nuxtjs/tailwindcss', 'nuxt-svgo', '@pinia/nuxt'],
	srcDir: 'src',
	alias: {
		'lib': '/lib',
		'components': '/components',
		'helpers': '/helpers',
		'page': '/pages',
		'routes': '/routes'
	},
	svgo: {
		autoImportPath: '@/lib/Icon',
		componentPrefix: 'Ic'
	},
	runtimeConfig: {
		public: {
			backendIp: ''
		}
	}
});
