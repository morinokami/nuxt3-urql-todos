import { cacheExchange, Client, fetchExchange, ssrExchange } from '@urql/vue';

const ssrKey = '__URQL_DATA__';

export default defineNuxtPlugin((nuxtApp) => {
	const { vueApp } = nuxtApp;

	const ssr = ssrExchange({
		isClient: process.client,
	});
	// https://nuxt.com/docs/api/advanced/hooks#app-hooks-runtime
	nuxtApp.hook('app:created', () => {
		// Called when initial vueApp instance is created.
		if (process.client) {
			ssr.restoreData(nuxtApp.payload[ssrKey]);
		}
	});
	nuxtApp.hook('app:rendered', () => {
		// Called when SSR rendering is done.
		nuxtApp.payload[ssrKey] = ssr.extractData();
	});

	const client = new Client({
		url: 'https://0ufyz.sse.codesandbox.io',
		exchanges: [cacheExchange, ssr, fetchExchange],
	});

	vueApp.provide('$urql', ref(client));
});
