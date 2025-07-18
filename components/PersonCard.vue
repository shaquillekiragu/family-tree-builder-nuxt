<script setup lang="ts">
import type { IPerson } from "~/data/Person";

interface Props {
  person: IPerson;
}

defineProps<Props>();
</script>

<template>
  <article class="w-50 h-75 border flex flex-col gap-2 p-2">
    <h4 class="">Name: {{ person.getFullName() }}</h4>
    <p class="">Year of birth: {{ person.getYearOfBirth() }}</p>
  </article>
</template>
