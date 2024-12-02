<script setup lang="ts">
const route = useRoute();
const userId = computed(() => route.params.id);
</script>
<template>
  <div>
    <h1>使用者ID: {{ userId }} 詳細資料</h1>
    <NuxtLink :to="`/users/${userId}`">返回</NuxtLink>
  </div>
</template>
<style lang="scss" scoped></style>
