
<script setup lang="ts">
import { useHead } from "@vueuse/head"

useHead({
  title: 'Wakacipuy',
  meta: [
    {
      name: `description`,
      content: 'hehe boisss',
    },
  ],
})
</script>

<template>
  <router-view></router-view>
</template>
