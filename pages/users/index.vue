<script setup lang="ts">
const users = ref<number[]>([]);
for (let i = 1; i < 11; i++) {
  users.value.push(i);
}
</script>
<template>
  <div>
    <h1>Users Index</h1>
    <span v-for="user in users" :key="user">
      <NuxtLink :to="`/users/${user}`">User {{ user }}</NuxtLink
      >&nbsp;|&nbsp;
    </span>
  </div>
</template>
<style lang="scss" scoped></style>
