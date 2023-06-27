<template>
  <DefaultLayout>
    <CContainer maxW="1200px" bg="white" pb="60px">
      <CBox bg="white" display="flex" w="100%" pt="50">
        <CGridItem :style="{ height: '80vh', padding: '50px 130px', margin: '10px' }">
          <CImage
            :src="wineData?.wine_image"
            :alt="wineData?.wine_name"
            h="100%"
            w="auto"
            m="10px"
          />
        </CGridItem>
        <CGridItem
          :style="{
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'left',
            padding: '10px 40px 40px 20px'
          }"
        >
          <CGridItem :style="{ borderBottom: '1px solid #c5c5c5', paddingBottom: '10px' }">
            <CText fontSize="2xl" :style="{ marginTop: 30, marginBottom: 30, fontWeight: 'bold' }">
              {{ wineData?.wine_name }}
            </CText>
            <CText fontSize="lg">{{ wineData?.english_wine_name }}</CText>
            <CText fontSize="lg" v-if="wineData?.years">{{ wineData?.years }}年</CText>
          </CGridItem>

          <CGridItem :style="{ borderBottom: '1px solid #c5c5c5', padding: '30px 0' }">
            <CText fontSize="lg">{{ wineData?.comment }}</CText>
          </CGridItem>

          <CGridItem :style="{ padding: '30px 0' }">
            <CText fontSize="lg" fontWeight="bold">{{ wineData?.one_word }}</CText>
          </CGridItem>

          <CGridItem :style="{ padding: '20px 0' }">
            <CText fontSize="lg" fontWeight="bold">商品情報</CText>
            <CText fontSize="lg"
              >タイプ<span style="padding-left: 3px">{{ wineData?.wine_type }}</span></CText
            >
            <CText fontSize="lg"
              >生産者<span style="padding-left: 3px">{{ wineData?.producer }}</span></CText
            >
            <CText fontSize="lg"
              >生産地<span style="padding-left: 3px">{{ wineData?.wine_country }}</span></CText
            >
            <CText fontSize="lg"
              >ワイナリー<span style="padding-left: 3px">{{ wineData?.winery }}</span></CText
            >
            <CText fontSize="lg"
              >品種<span style="padding-left: 3px">{{ wineData?.breed }}</span></CText
            >
            <CText fontSize="lg"
              >容量<span style="padding-left: 3px">{{ wineData?.capacity }} ml</span></CText
            >
          </CGridItem>
        </CGridItem>
      </CBox>
      <CGrid
        container
        templateColumns="repeat(2, 1fr)"
        justifyContent="center"
        spacing="5"
        pt="30px"
      >
        <CGridItem colSpan="{1}">
          <CButton as="a" href="/shindan/recommend" variant="outline" colorScheme="yellow" mr="2"
            >戻る</CButton
          >
        </CGridItem>
        <CGridItem colSpan="{1}">
          <CButton as="a" :href="wineData?.wine_url || '#'" colorScheme="yellow" ml="2">
            ショップで見てみる
          </CButton>
        </CGridItem>
      </CGrid>
    </CContainer>
  </DefaultLayout>
</template>

<script>
import { CContainer, CGrid, CGridItem, CImage, CBox, CText, CButton } from '@chakra-ui/vue-next'
import axios from 'axios'
import { reactive, onMounted } from 'vue'
import DefaultLayout from '@/components/DefaultLayout.vue'
import { useRouter } from 'vue-router'

export default {
  name: 'WineDetail',
  components: {
    DefaultLayout,
    CContainer,
    CGrid,
    CGridItem,
    CImage,
    CBox,
    CText,
    CButton
  },
  setup() {
    const router = useRouter()
    const backendBaseUrl = 'http://localhost:18888/api/recommend'
    const wineData = reactive({})

    onMounted(async () => {
      const { id } = router.currentRoute.value.params

      if (id) {
        const response = await axios.get(`${backendBaseUrl}/${id}`)
        if (response.data) {
          Object.assign(wineData, response.data)
        }
      }
    })

    return {
      wineData
    }
  }
}
</script>
