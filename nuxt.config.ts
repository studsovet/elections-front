export default defineNuxtConfig({
	devtools: { enabled: true },
	components: true,
	css: ['normalize.css/normalize.css', '@/styles/index.scss'],
	modules: ['@nuxtjs/tailwindcss', 'nuxt-svgo'],
	srcDir: 'src',
	alias: {
		'lib': '/lib',
		'components': '/components'
	},
	svgo: {
		autoImportPath: '@/lib/Icon',
		componentPrefix: 'Ic'
	},
});
