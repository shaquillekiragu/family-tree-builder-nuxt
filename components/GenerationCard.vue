<script setup lang="ts">
import type { IPerson } from "~/data/Person";
import { PersonCard } from "#components";

interface Props {
  generation: IPerson[];
}

defineProps<Props>();
</script>

<template>
  <section class="w-full p-10 flex justify-center items-center gap-10">
    <PersonCard
      v-for="person in generation"
      :key="person.personId"
      :person="person"
    />
  </section>
</template>
