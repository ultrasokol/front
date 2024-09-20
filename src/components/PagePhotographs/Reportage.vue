<template>
  <section class="reportage">
    <div class="containerView">
      <div class="reportage__wrapper">
        <div class="reportage__menu">
          <div class="reportage__contentLogo">
            <logoMenu style="width: 100%; height: 100%" />
          </div>
          <itemMenu />
        </div>
        <div class="reportage__content">
          <page-product
            v-for="photoCatalog in filterReportage"
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
const filterReportage = computed(() => store.filterReportage)

const fetchPhoto = async () => {
  await store.getPhotoPost()
  await store.getReportage()
  console.log(filterReportage.value)
}

onMounted(async () => {
  window.scrollTo(0, 0)
  await fetchPhoto()
})
</script>

<style scoped lang="scss">
.reportage {
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
