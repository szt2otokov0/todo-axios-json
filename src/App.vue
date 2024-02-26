<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Tasks</RouterLink>
    <RouterLink to="/newtask">New Task</RouterLink>
  </nav>
  <RouterView />
</template>

<style scoped>

</style>
