<template>
  <article
    class="prose dark:prose-invert prose-pre:bg-white dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-300"
  >
    <ContentDoc>
      <template #not-found>
        <h1>Document not found</h1>
      </template>
    </ContentDoc>
  </article>
</template>

<script setup>
const route = useRoute();
</script>