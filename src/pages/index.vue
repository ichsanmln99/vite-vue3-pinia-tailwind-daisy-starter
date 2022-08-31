<script setup lang="ts">
import { useHead } from "@vueuse/head"
import { useCounterStore } from '~/stores/example'

const counter = useCounterStore()

useHead({
  title: 'Home',
  meta: [
    {
      name: `Home`,
      content: 'Lorem Ipsum Dolor',
    },
  ],
})
</script>

<template>
  <h1 class="text-6xl font-bold mt-24">Count {{counter.count}}</h1>
  <div class="btn-group ">
    <button class="btn btn-outline btn-primary btn-wide" @click="counter.increment">+</button>
    <button class="btn btn-outline btn-primary btn-wide" @click="counter.decrement">-</button>
  </div>
</template>

<route>
{
  name: "Home",
}
</route>