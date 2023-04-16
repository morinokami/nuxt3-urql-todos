<script setup lang="ts">
import { useMutation } from '@urql/vue';
import { graphql } from '~/gql';

const props = defineProps<{
	setIsAuthenticated: (value: boolean) => void;
}>();

const name = ref('');

const LoginMutation = graphql(`
	mutation Login($name: String!) {
		login(name: $name)
	}
`);

const { executeMutation: login, fetching } = useMutation(LoginMutation);

function handleSubmit() {
	login({ name: name.value }).then(({ data }) => {
		if (data?.login) {
			setToken(data.login);
			props.setIsAuthenticated(true);
		}
	});
}
</script>

<template>
	<form @submit.prevent="handleSubmit">
		<h2>Login</h2>
		<input v-model="name" />
		<button :disabled="fetching" type="submit">Login!</button>
	</form>
</template>
