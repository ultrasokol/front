<template>
  <div>
    <div class="photo__wrapper">
      <img class="photo__img" :src="photoCatalog.attributes.img" alt="image" />
      <!-- <div class="photo">
        <div class="product__wrap">
          <h3 class="product__title">{{ photoCatalog.attributes.description }}</h3>
          <h3 class="product__title">{{ photoCatalog.attributes.title }}</h3>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { DataItem } from '@/types/photoType'

const props = defineProps({
  photoCatalog: {
    type: Object as PropType<DataItem>,
    required: true
  }
})
</script>

<style scoped lang="scss">
// .photo__title {
//   margin: 0;
//   color: #ffffff;
//   font-family: 'Roboto';
//   font-size: 80px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 124px; /* 155% */
//   text-transform: uppercase;
// }
.photo__img {
  width: 100%;
  height: 100%;
}
.photo__wrapper {
  width: 100%;
  height: 100%;
}
</style>
