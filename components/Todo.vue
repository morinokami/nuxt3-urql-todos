<script setup lang="ts">
import { gql, useMutation } from '@urql/vue';

defineProps<{
	id: string;
	text: string;
	complete: boolean;
	disabled: boolean;
}>();

const ToggleTodoMutation = gql`
	mutation ($id: ID!) {
		toggleTodo(id: $id) {
			id
		}
	}
`;

const {
	executeMutation: toggleTodo,
	fetching,
	error,
} = useMutation(ToggleTodoMutation);
</script>

<template>
	<p v-if="error">Something went wrong while toggling</p>
	<li v-else>
		<p @click="() => toggleTodo({ id })">
			{{ text }}
		</p>
		<p>{{ complete ? 'Completed' : 'Todo' }}</p>
		<button
			@click="() => toggleTodo({ id })"
			:disabled="disabled || fetching"
			type="button"
		>
			{{ complete ? 'Toggle todo' : 'Complete todo' }}
		</button>
	</li>
</template>
