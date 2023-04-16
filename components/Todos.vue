<script setup lang="ts">
import { gql, useQuery } from '@urql/vue';

const TodosQuery = gql`
	query {
		todos {
			id
			text
			complete
		}
	}
`;

const { data, fetching, error } = await useQuery({ query: TodosQuery });
</script>

<template>
	<p v-if="fetching">Loading...</p>
	<p v-else-if="error">Oh no... {{ error.message }}</p>
	<ul v-else>
		<Todo
			v-for="todo in data.todos"
			:key="todo.id"
			:text="todo.text"
			:id="todo.id"
			:complete="todo.complete"
			:disabled="fetching"
		/>
	</ul>
</template>
