<template>
  <section class="not-prose font-mono">
    <div class="column text-gray-400 text-sm">
      <div>data</div>
      <div>title</div>
    </div>
    <ul>
      <li v-for="blog in blogs" :key="blog._path">
        <NuxtLink
          :to="blog._path"
          class="column hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <div class="text-gray-500">2023</div>
          <div>{{ blog.title }}</div>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
    
<script setup>
useHead({
  title: "Blog",
});

const { data: blogs } = await useAsyncData("blog-list", () =>
  queryContent("/blog")
    .where({
      _path: {
        $ne: "/blog",
      },
    })
    .only(["_path", "title"])
    .find()
);
</script>

<style scoped>
.column {
  @apply flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-700;
}
</style>