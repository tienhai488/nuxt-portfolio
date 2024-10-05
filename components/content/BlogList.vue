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
          class="column hover:bg-gray-100 dark:hover:bg-gray-800 group"
        >
          <div
            :class="{
              'text-white group-hover:text-gray-100 dark:text-gray-900 dark:group-hover:text-gray-800':
                !blog.displayYear,
              'text-gray-400 dark:text-gray-500': blog.displayYear,
            }"
          >
            {{ blog.year }}
          </div>
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

const props = defineProps({
  limit: {
    type: Number,
    default: null,
  },
});

const { data } = await useAsyncData("blog-list", () => {
  const query = queryContent("/blog")
    .where({
      _path: {
        $ne: "/blog",
      },
    })
    .only(["_path", "title", "publishedAt"])
    .sort({ publishedAt: -1 });

  if (props.limit) {
    query.limit(props.limit);
  }

  return query.find();
});

const blogs = computed(() => {
  if (!data.value.length) {
    return [];
  }

  let result = [];
  let lastYear = null;

  for (let blog of data.value) {
    let year = new Date(blog.publishedAt).getFullYear();
    let displayYear = lastYear != year;
    lastYear = year;
    result.push({
      ...blog,
      year,
      displayYear,
    });
  }

  return result;
});
</script>

<style scoped>
.column {
  @apply flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-700;
}
</style>