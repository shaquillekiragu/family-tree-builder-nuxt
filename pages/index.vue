<template>
  <section class="w-screen h-screen flex flex-col items-center">
    <h1 class="my-10 text-center text-2xl font-bold">Index Page</h1>
    <main class="w-full border-3 !mx-10 py-10 flex flex-col gap-10">
      <section class="w-full p-10 flex justify-center items-center gap-10">
        <article class="w-50 h-75 border flex flex-col gap-2 p-2">
          <h4 class="">Name: {{ personOne.getFullName() }}</h4>
          <p class="">Year of birth: {{ personOne.getYearOfBirth() }}</p>
        </article>
        <article class="w-50 h-75 border flex flex-col gap-2 p-2">
          <h4 class="">Name: {{ personTwo.getFullName() }}</h4>
          <p class="">Year of birth: {{ personTwo.getYearOfBirth() }}</p>
        </article>
      </section>
      <section class="w-full p-10 flex justify-center items-center gap-10">
        <article class="w-50 h-75 border flex flex-col gap-2 p-2">
          <h4 class="">Name: {{ personThree.getFullName() }}</h4>
          <p class="">Year of birth: {{ personThree.getYearOfBirth() }}</p>
        </article>
        <article class="w-50 h-75 border flex flex-col gap-2 p-2">
          <h4 class="">Name: {{ personFour.getFullName() }}</h4>
          <p class="">Year of birth: {{ personFour.getYearOfBirth() }}</p>
        </article>
        <article class="w-50 h-75 border flex flex-col gap-2 p-2">
          <h4 class="">Name: {{ personFive.getFullName() }}</h4>
          <p class="">Year of birth: {{ personFive.getYearOfBirth() }}</p>
        </article>
        <article class="w-50 h-75 border flex flex-col gap-2 p-2">
          <h4 class="">Name: {{ personSix.getFullName() }}</h4>
          <p class="">Year of birth: {{ personSix.getYearOfBirth() }}</p>
        </article>
      </section>
      <section class="w-full p-10 flex justify-center items-center gap-10">
        <article class="w-50 h-75 border flex flex-col gap-2 p-2">
          <h4 class="">Name: {{ personSeven.getFullName() }}</h4>
          <p class="">Year of birth: {{ personSeven.getYearOfBirth() }}</p>
        </article>
        <article class="w-50 h-75 border flex flex-col gap-2 p-2">
          <h4 class="">Name: {{ personEight.getFullName() }}</h4>
          <p class="">Year of birth: {{ personEight.getYearOfBirth() }}</p>
        </article>
        <article class="w-50 h-75 border flex flex-col gap-2 p-2">
          <h4 class="">Name: {{ personNine.getFullName() }}</h4>
          <p class="">Year of birth: {{ personNine.getYearOfBirth() }}</p>
        </article>
        <article class="w-50 h-75 border flex flex-col gap-2 p-2">
          <h4 class="">Name: {{ personTen.getFullName() }}</h4>
          <p class="">Year of birth: {{ personTen.getYearOfBirth() }}</p>
        </article>
      </section>
    </main>
  </section>
</template>

<script setup lang="ts">
import {
  personOne,
  personTwo,
  personThree,
  personFour,
  personFive,
  personSix,
  personSeven,
  personEight,
  personNine,
  personTen,
} from "~/data/personInstances";
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

// LOGIC:

//
</script>
