<script setup lang="ts">
const route = useRoute();
const currentRoute = computed(() => route.path);
</script>
<template>
  <div>
    <p>Current Route: {{ currentRoute }}</p>
  </div>
</template>
<style scoped lang="scss"></style>
