<template>
  <section class="not-prose">
    <ul>
      <li v-for="blog in blogs" :key="blog._path">
        <NuxtLink :to="blog._path">{{ blog.title }}</NuxtLink>
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