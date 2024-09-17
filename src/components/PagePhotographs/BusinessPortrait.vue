<template>
  <section class="businessPortrait">
    <div class="containerView">
      <div class="businessPortrait__wrapper">
        <div class="businessPortrait__menu">
          <div class="businessPortrait__contentLogo">
            <logoMenu style="width: 100%; height: 100%" />
          </div>
          <itemMenu />
        </div>
        <div class="businessPortrait__content">
          <page-product
            v-for="photoCatalog in filtergetBusiness"
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
const filtergetBusiness = computed(() => store.filtergetBusiness)

const fetchPhoto = async () => {
  await store.getPhotoPost()
  await store.getBusiness()
}

onMounted(async () => {
  window.scrollTo(0, 0)
  await fetchPhoto()
})
</script>

<style scoped lang="scss">
.businessPortrait {
  background: black;
  min-height: 300vh;
  &__wrapper {
    padding: 100px 0;
    display: grid;
    grid-template-columns: 10% 87%;
    gap: 3%;
  }

  &__contentLogo {
    margin-bottom: 70px;
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
