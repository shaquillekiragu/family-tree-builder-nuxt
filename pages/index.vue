<template>
  <section class="w-screen h-screen flex flex-col items-center">
    <header class="flex flex-col items-center my-10">
      <h1>Index Page</h1>
      <UButton></UButton>
    </header>
    <main class="w-full border-3 !mx-10 py-10 flex flex-col gap-10">
      <section class="w-full p-10 flex justify-center items-center gap-10">
        <article class="w-20 h-30 border"></article>
        <article class="w-20 h-30 border"></article>
      </section>
      <section class="w-full p-10 flex justify-center items-center gap-10">
        <article class="w-20 h-30 border"></article>
        <article class="w-20 h-30 border"></article>
        <article class="w-20 h-30 border"></article>
        <article class="w-20 h-30 border"></article>
      </section>
      <section class="w-full p-10 flex justify-center items-center gap-10">
        <article class="w-20 h-30 border"></article>
        <article class="w-20 h-30 border"></article>
        <article class="w-20 h-30 border"></article>
        <article class="w-20 h-30 border"></article>
      </section>
    </main>
  </section>
</template>

<script>
// MOCK DB DATA:

const user = {
  userId: 1,
  firstName: "John",
  middleNames: "",
  lastName: "Doe",
  email: "JohnD@gmail.com",
  password: "john_doe_",
};

const tree = {
  treeId: 1,
  userId: 1,
  treeName: "Doe Family Tree",
  treePassword: "DoeFam25",
  createdBy: 1,
  createdAt: 1752164053,
};

const sexEnum = ["male", "female"];

const person = {
  personId: 1,
  treeId: 1,
  firstName: "Richard",
  middleNames: "Samuel",
  lastName: "Doe",
  sex: sexEnum[0],
  dateOfBirth: "1922",
  countryOfBirth: "United States of America",
  isPrimaryPerson: true,
  biography: "",
  notes: "",
};

// LOGIC:

//
</script>
