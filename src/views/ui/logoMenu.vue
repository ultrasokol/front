<template>
  <router-link to="/"
    ><img class="logo__menu" :src="logoImg" alt="image" :width="props.width" :height="props.height"
  /></router-link>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  width: {
    type: Number,
    default: 200
  },
  height: {
    type: Number,
    default: 200
  }
})

const logoImg = '/img/pageLogo.png'
</script>

<style scoped></style>
