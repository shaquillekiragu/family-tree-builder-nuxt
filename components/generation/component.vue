<template>
	<section
		v-for="person in generation"
		class="w-full p-10 flex justify-center items-center gap-10"
	>
		<PersonComponent :person="person" />
	</section>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type IPerson from '~/types/person';

const { generation } = defineProps({
	generation: {
		type: Array as PropType<IPerson[]>,
		required: true,
	},
});
</script>
