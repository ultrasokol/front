import { defineStore } from 'pinia'
import type { DataItem } from '@/types/photoType'
import type { DataItemVideo } from '@/types/videoType'
import { ref } from 'vue'
import { getPhoto } from '@/Compossables/photoApi'
import { getVideo } from '@/Compossables/videoApi'

export const useStore = defineStore('store', () => {
  const photo = ref<DataItem[]>([])
  const video = ref<DataItemVideo[]>()
  const filterReportage = ref<DataItem[]>()
  const filtergetBusiness = ref<DataItem[]>()
  const filterCatShooting = ref<DataItem[]>()
  const filterInteriorPh = ref<DataItem[]>()
  const filterSportsEvents = ref<DataItem[]>()
  const filterSubjectShooting = ref<DataItem[]>()

  async function getPhotoPost() {
    const response = await getPhoto()
    if (response.status === 200 && response.data && response.data.data) {
      photo.value = response.data.data as DataItem[]
    }
  }

  async function getVideoPost() {
    const response = await getVideo()
    if (response.status === 200 && response.data && response.data.data) {
      video.value = response.data.data as DataItemVideo[]
    }
  }

  async function getReportage() {
    filterReportage.value = (photo.value || []).filter((item) =>
      item.attributes.photo_subs.data.some((sub) => sub.attributes.title === 'Reportage')
    )
  }
  async function getBusiness() {
    filtergetBusiness.value = (photo.value || []).filter((item) =>
      item.attributes.photo_subs.data.some((sub) => sub.attributes.title === 'BusinessPortrait')
    )
  }

  async function getCatShooting() {
    filterCatShooting.value = (photo.value || []).filter((item) =>
      item.attributes.photo_subs.data.some((sub) => sub.attributes.title === 'CatalogShooting')
    )
  }

  async function getInteriorPh() {
    filterInteriorPh.value = (photo.value || []).filter((item) =>
      item.attributes.photo_subs.data.some((sub) => sub.attributes.title === 'InteriorPhotography')
    )
  }

  async function getSportsEvents() {
    filterSportsEvents.value = (photo.value || []).filter((item) =>
      item.attributes.photo_subs.data.some((sub) => sub.attributes.title === 'SportsEvents')
    )
  }
  async function getSubjectShooting() {
    filterSubjectShooting.value = (photo.value || []).filter((item) =>
      item.attributes.photo_subs.data.some((sub) => sub.attributes.title === 'SubjectShooting')
    )
  }
  return {
    photo,
    getPhotoPost,
    getVideoPost,
    getReportage,
    video,
    getBusiness,
    filterReportage,
    filtergetBusiness,
    getCatShooting,
    filterCatShooting,
    getInteriorPh,
    filterInteriorPh,
    getSportsEvents,
    filterSportsEvents,
    getSubjectShooting,
    filterSubjectShooting
  }
})
