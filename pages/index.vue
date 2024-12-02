<script setup lang="ts">
const { data, refresh, pending } = await useAsyncData(async () => {
  const apis = [
    $fetch("https://nuxr3.zeabur.app/api/v1/rooms/"),
    $fetch("https://nuxr3.zeabur.app/api/v1/rooms/"),
  ];
  const resp = await Promise.allSettled(apis);
  return resp;
});
</script>
<template>
  <div>
    <h1>Hello World!</h1>
    <button @click="refresh">Refresh</button>
    <p v-if="pending">Loading...</p>
    <pre v-else>{{ data }}</pre>
  </div>
</template>
<style scoped lang="scss"></style>
