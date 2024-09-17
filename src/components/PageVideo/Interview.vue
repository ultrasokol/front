<template>
  <section class="Interview">
    <div class="containerView">
      <div class="Interview__wrapper">
        <div class="Interview__menu">
          <div class="Interview__contentLogo">
            <logoMenu style="width: 100%; height: 100%" />
          </div>
          <ItemVideo />
        </div>
        <div class="Interview__content">
          <page-video
            v-for="videoCatalog in videos"
            :key="videoCatalog.id"
            :videoCatalog="videoCatalog"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ItemVideo from '@/views/ui/ItemVideo.vue'
import logoMenu from '@/views/ui/logoMenu.vue'
import { onMounted, computed } from 'vue'
import { useStore } from '@/stores/store'
import PageVideo from '@/views/ui/PageVideo.vue'

const store = useStore()
const videos = computed(() => store.video)

const fetchVideo = async () => {
  await store.getVideoPost()
}

onMounted(async () => {
  window.scrollTo(0, 0)
  await fetchVideo()
})
</script>

<style scoped lang="scss">
.Interview {
  background: black;
  min-height: 700vh;
  &__wrapper {
    padding: 100px 0;
    display: grid;
    grid-template-columns: 15% 83%;
    gap: 10px;
  }

  &__contentLogo {
    margin-bottom: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
  }
}
</style>
