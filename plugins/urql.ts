import {
	cacheExchange,
	Client,
	fetchExchange,
	SSRData,
	ssrExchange,
} from '@urql/vue';

// https://nuxt.com/docs/api/composables/use-nuxt-app#payload
const ssrKey = '__URQL_DATA__';
const useUrqlData = () => useState<SSRData | null>(ssrKey, () => null);

export default defineNuxtPlugin((nuxtApp) => {
	const { vueApp } = nuxtApp;

	const ssr = ssrExchange({
		isClient: process.client,
	});
	// https://nuxt.com/docs/api/advanced/hooks#app-hooks-runtime
	nuxtApp.hook('app:created', () => {
		// Called when initial vueApp instance is created.
		if (process.client) {
			const urqlData = useUrqlData();
			if (urqlData.value) {
				ssr.restoreData(urqlData.value);
			}
		}
	});
	nuxtApp.hook('app:rendered', () => {
		// Called when SSR rendering is done.
		const urqlData = useUrqlData();
		urqlData.value = ssr.extractData();
	});

	const client = new Client({
		url: 'https://k1ths.sse.codesandbox.io/',
		exchanges: [cacheExchange, ssr, fetchExchange],
		fetchOptions: () => {
			const token = getToken();
			return token ? { headers: { Authorization: `Bearer ${token}` } } : {};
		},
	});

	vueApp.provide('$urql', ref(client));
});
