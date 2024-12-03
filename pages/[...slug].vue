<script setup lang="ts">
const event = useRequestEvent();
if (event) setResponseStatus(event, 404, "Page Not Found");
</script>
<template>
  <div>
    <h1>404 錯誤</h1>
  </div>
</template>
<style lang="scss" scoped></style>
