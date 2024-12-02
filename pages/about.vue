<script setup lang="ts">
const route = useRoute();
const router = useRouter();
const currentRoute = computed(() => route.path);
const innerFlag = computed(
  () => route.path.startsWith("/about/a") || route.path.startsWith("/about/b")
);
</script>
<template>
  <nav>
    <NuxtLink to="/about/a">A</NuxtLink>&nbsp;|&nbsp;
    <NuxtLink to="/about/b">B</NuxtLink>
    <span v-if="innerFlag"
      >&nbsp;|&nbsp;
      <NuxtLink to="/about">Back</NuxtLink>
    </span>
  </nav>
  <div>
    <p>Current Route: {{ currentRoute }}</p>
    <NuxtPage />
  </div>
</template>
<style scoped lang="scss"></style>
