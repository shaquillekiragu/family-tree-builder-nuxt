<template>
	<article class="w-50 h-75 border flex flex-col gap-2 p-2">
		<h4 class="">Name: {{ person.full_name }}</h4>
		<p class="">Year of Birth: {{ person.year_of_birth.toString() }}</p>
	</article>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { IPerson } from '~/types/person';

const { person } = defineProps({
	person: {
		type: Object as PropType<IPerson>,
		required: true,
	},
});
</script>
