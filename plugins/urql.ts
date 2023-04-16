import { cacheExchange, Client, fetchExchange } from '@urql/vue';

export default defineNuxtPlugin((nuxtApp) => {
	const { vueApp } = nuxtApp;

	const client = new Client({
		url: 'https://0ufyz.sse.codesandbox.io',
		exchanges: [cacheExchange, fetchExchange],
	});

	vueApp.provide('$urql', ref(client));
});
