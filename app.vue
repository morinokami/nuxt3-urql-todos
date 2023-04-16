<script setup lang="ts">
const isAuthenticated = useState('isAuthenticated', () => !!getToken());
function setIsAuthenticated(value: boolean) {
	isAuthenticated.value = value;
}
</script>

<template>
	<div>
		<Todos v-if="isAuthenticated" :setIsAuthenticated="setIsAuthenticated" />
		<Login v-else :setIsAuthenticated="setIsAuthenticated" />
	</div>
</template>
