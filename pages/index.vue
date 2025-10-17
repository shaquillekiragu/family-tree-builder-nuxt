<template>
	<section class="w-screen h-screen flex flex-col items-center">
		<h1 class="my-10 text-center text-2xl font-bold">Index Page</h1>
		<main class="w-full border-3 !mx-10 py-10 flex flex-col gap-10">
			<GenerationComponent
				v-for="generation in tree_data"
				:generation="generation"
			/>
		</main>
	</section>
</template>

<script setup lang="ts">
import tree_data from '~/data/person-data';

// const user = {
//   userId: 1,
//   firstName: "John",
//   middleNames: "",
//   lastName: "Doe",
//   email: "JohnD@gmail.com",
//   password: "john_doe_",
// };

// const tree = {
//   treeId: 1,
//   userId: 1,
//   treeName: "Doe Family Tree",
//   treePassword: "DoeFam25",
//   createdBy: 1,
//   createdAt: 1752164053,
// };
</script>
