export default defineNuxtConfig({
	devtools: { enabled: true },
	nitro: {
		plugins: ["~/server/plugins/mongodb.ts"],
	},
})
