<template>
  <nav>
    <NuxtLink to="/">Home</NuxtLink>&nbsp;|&nbsp;
    <NuxtLink to="/about">About</NuxtLink>&nbsp;|&nbsp;
    <NuxtLink to="/courses/1">Course 1</NuxtLink>&nbsp;|&nbsp;
    <NuxtLink to="/courses/2">Course 2</NuxtLink>&nbsp;|&nbsp;
    <NuxtLink to="/users">Users</NuxtLink>
  </nav>
  <div>
    <NuxtPage />
  </div>
</template>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  /* filter: blur(1rem); */
}
</style>
