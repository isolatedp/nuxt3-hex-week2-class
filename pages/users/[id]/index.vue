<script setup lang="ts">
const route = useRoute();
const userId = computed(() => route.params.id);
// const userName = computed(() => route.params.name);
</script>
<template>
  <div>
    <h1>使用者ID: {{ userId }}</h1>
    <NuxtLink :to="`/users/${userId}/about`">詳細資料</NuxtLink>
  </div>
</template>
<style lang="scss" scoped></style>
