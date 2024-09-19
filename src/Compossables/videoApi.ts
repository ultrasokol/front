import axios from 'axios'
import { ref } from 'vue'
import { URL_VIDEO } from '@/URL'
import type { ApiResponseVideo } from '@/types/videoType'
import qs from 'qs'

const token =
  '60b77b3ca7f480b54e492b05f4f6e49e241b3777ee80ee4e4d72858b85840ecba675f84d9d48f261b887e944b3474ba7ce9e37eedf14f944bb393801371e96c5ed1297359c13992a4fd07971c6d3a3d175be55025bbbe0110a21a315f97f17e4274ea2e81f913a53cfcab6ed090d7b1180d310e33e6e55060303928a6fc0896f'

export const getVideo = async () => {
  const data = ref<ApiResponseVideo | null>(null)
  const status = ref<number>(0)
  try {
    const query = qs.stringify(
      {
        publicationState: 'preview',
        populate: '*'
      },
      {
        encodeValuesOnly: true
      }
    )
    const response = await axios.get<ApiResponseVideo>(`${URL_VIDEO}?${query}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    status.value = response.status
    data.value = response.data
  } catch (err) {
    status.value = 500
    data.value = null
  }
  return { data: data.value, status: status.value }
}
