// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtModule } from 'nuxt';

export default defineNuxtConfig({
	modules: [
		'@nuxtjs/tailwindcss',
		'nuxt-swiper',
		'nuxt-icon',
		'@formkit/nuxt',
    '@pinia/nuxt',
    'nuxt-snackbar',
    '@pinia-plugin-persistedstate/nuxt'
	],
	devtools: { enabled: true },
	css: ['~/assets/css/main.css'],
	app: {
		
	},
	swiper: {
		prefix: 'Swiper',
	},
  snackbar: {
    top: true,
    right: true,
    duration: 5000
  },

  piniaPersistedstate: {
    storage: 'localStorage',
    persist: true
  },
	formkit: {
		autoImport: true,
	},

	devServer: {
		host: '--host',
	},
});
