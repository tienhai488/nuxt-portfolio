<template>
  <div class="container mx-auto max-w-4xl">
    <header class="flex justify-between items-center mt-5">
      <div class="flex items-start md:items-center md:space-x-12">
        <div>
          <NuxtLink
            to="/"
            class="text-xl font-semibold p-2 hover:bg-gray-200 dark:hover:bg-gray-800 hidden md:block"
          >
            TienHai
          </NuxtLink>
        </div>
        <Menu></Menu>
      </div>

      <ClientOnly>
        <ColorModeSelector />
      </ClientOnly>
    </header>

    <main class="p-2 mt-10">
      <slot></slot>
    </main>
  </div>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: "%s - TienHai",
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
      crossorigin: "",
    },
  ],
});
</script>

<style>
body {
  font-family: "Roboto";
}

body {
  @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300;
}
</style>