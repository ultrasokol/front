<template>
  <section class="catalogShooting">
    <div class="containerView">
      <div class="catalogShooting__wrapper">
        <div class="catalogShooting__menu">
          <div class="catalogShooting__contentLogo">
            <logoMenu style="width: 100%; height: 100%" />
          </div>
          <itemMenu />
        </div>
        <div class="catalogShooting__content">
          <page-product
            v-for="photoCatalog in filterCatShooting"
            :key="photoCatalog.id"
            :photoCatalog="photoCatalog"
          ></page-product>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import itemMenu from '@/views/ui/ItemPhoto.vue'
import logoMenu from '@/views/ui/logoMenu.vue'
import { onMounted, computed } from 'vue'
import { useStore } from '@/stores/store'
import PageProduct from '@/views/ui/PageProduct.vue'

const store = useStore()
const filterCatShooting = computed(() => store.filterCatShooting)

const fetchPhoto = async () => {
  await store.getPhotoPost()
  await store.getCatShooting()
}

onMounted(async () => {
  window.scrollTo(0, 0)
  await fetchPhoto()
})
</script>

<style scoped lang="scss">
.catalogShooting {
  background: black;
  min-height: 300vh;
  &__wrapper {
    padding: 100px 0;
    display: grid;
    grid-template-columns: 10% 87%;
    gap: 3%;
  }

  &__contentLogo {
    margin-bottom: 100px;
    display: flex;
    justify-content: center;
  }
  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
  }
}
</style>
