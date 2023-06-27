<template>
  <DefaultLayout>
    <CGrid
      container
      spacing="6"
      :style="gridContainerStyle"
      templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
      gap="6"
      pt="50"
      pb="50"
    >
      <CGridItem v-for="wine in wineList" :key="wine.id" cols="3">
        <router-link :to="`/recommend/${wine.id}`">
          <CBox
            maxW="1200px"
            borderWidth="1px"
            rounded="lg"
            overflow="hidden"
            h="400px"
            w="100%"
            bg="white"
          >
            <CImage
              :src="wine.wine_image"
              :alt="wine.wine_name"
              w="100%"
              h="150px"
              objectFit="contain"
              m="auto"
              bg="white"
            />
            <CBox p="6">
              <CBox d="flex" alignItems="baseline">
                <CBox
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  {{ wine.wine_type }} &bull; {{ wine.wine_country }}
                </CBox>
              </CBox>
              <CBox mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                {{ wine.wine_name }}
              </CBox>
              <CBox>
                {{ wine.one_word }}
                <CBox as="span" color="gray.600" fontSize="sm">
                  {{ wine.winery }}
                </CBox>
              </CBox>
            </CBox>
          </CBox>
        </router-link>
      </CGridItem>
    </CGrid>
  </DefaultLayout>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { CBox, CImage, CGrid, CGridItem } from '@chakra-ui/vue-next'
import DefaultLayout from '@/components/DefaultLayout.vue'

interface Wine {
  id: string
  wine_image: string
  wine_name: string
  wine_type: string
  wine_country: string
  winery: string
  one_word: string
}

export default {
  name: 'RecommendPage',
  components: {
    DefaultLayout,
    CBox,
    CImage,
    CGrid,
    CGridItem
  },
  setup() {
    const wineList = ref<Wine[]>([])
    const loading = ref(true)
    const gridContainerStyle = { width: '80%', margin: '0px auto', marginTop: 50, marginBottom: 70 }

    onMounted(async () => {
      try {
        const { data } = await axios.get<Wine[]>('http://localhost:18888/api/recommend')
        if (data) {
          wineList.value = data
        }
      } catch (error) {
        console.error(error)
      } finally {
        loading.value = false
      }
    })

    return { wineList, loading, gridContainerStyle }
  }
}
</script>
