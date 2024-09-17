<template>
  <div>
    <div class="video__wrapper">
      <iframe
        width="100%"
        height="300"
        :src="videoCatalog.attributes.video"
        allow="autoplay; fullscreen; accelerometer; gyroscope; picture-in-picture; encrypted-media"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { DataItemVideo } from '@/types/videoType'

const props = defineProps({
  videoCatalog: {
    type: Object as PropType<DataItemVideo>,
    required: true
  }
})
</script>

<style scoped lang="scss">
.video__title {
  margin: 0;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 80px;
  font-style: normal;
  font-weight: 400;
  line-height: 124px; /* 155% */
  text-transform: uppercase;
}
.video__img {
  width: 100%;
  height: 100%;
}
.video__wrapper {
  width: 100%;
  height: 100%;
}
</style>
