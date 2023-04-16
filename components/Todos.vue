<script setup lang="ts">
import { useQuery } from '@urql/vue';
import { graphql } from '~/gql';

const TodosQuery = graphql(`
	query Todos {
		todos {
			id
			text
			complete
		}
	}
`);

const { data, fetching, error } = await useQuery({ query: TodosQuery });
</script>

<template>
	<p v-if="fetching">Loading...</p>
	<p v-else-if="error">Oh no... {{ error.message }}</p>
	<ul v-else-if="data">
		<template v-for="todo in data.todos">
			<Todo
				v-if="
					todo?.id &&
					todo?.text &&
					todo?.complete !== undefined &&
					todo?.complete !== null
				"
				:key="todo.id"
				:text="todo.text"
				:id="todo.id"
				:complete="todo.complete"
				:disabled="fetching"
			/>
		</template>
	</ul>
</template>
