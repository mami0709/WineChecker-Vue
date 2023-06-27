<template>
  <DefaultLayout>
    <CBox p="5" pt="50px">
      <CBox w="80%" m="0 auto" maxW="1200px">
        <CBox borderBottom="2px solid red" pb="15px">
          <CText fontSize="4xl" fontWeight="bold">診断結果</CText>
          <CBox d="flex">
            <!-- アイコン設定 -->
            <GiGrapes size="160" />
            <CText fontSize="3xl" pt="20px" color="red" fontWeight="bold">{{
              resultMessage?.one_word
            }}</CText>
          </CBox>
        </CBox>

        <div style="display: flex; justify-content: center; padding-top: 30px">
          <CBox p="40px 80px" mr="20px">
            <img
              :src="resultImage?.wine_image"
              alt="result image"
              style="width: 1200px; height: 500px"
            />
          </CBox>
          <CBox d="flex" flexDirection="column" justifyContent="center">
            <CText fontSize="3xl" fontWeight="bold">{{ resultMessage?.wine_name }}</CText>
            <CText fontSize="3xl" pt="20px" color="red" fontWeight="bold">{{ Message }}</CText>
            <CText fontSize="xl" pt="40px">
              あなたにおすすめのワインは、{{ resultMessage?.comment }}
            </CText>
          </CBox>
        </div>

        <CBox d="flex" justifyContent="center" pb="30px">
          <router-link to="/">
            <CButton
              fontSize="1.3rem"
              color="#fff"
              bgColor="#DDA0DD"
              borderRadius="5px"
              px="35px"
              :_hover="{ opacity: 0.8 }"
              mr="20px"
              fontWeight="bold"
            >
              もう一度
            </CButton>
          </router-link>
          <router-link :to="`/shindan/${rank}`">
            <CButton
              fontSize="1.3rem"
              color="#fff"
              bgColor="#9370DB"
              borderRadius="5px"
              px="30px"
              :_hover="{ opacity: 0.8 }"
              ml="40px"
              fontWeight="bold"
            >
              ワインの詳細を見る
            </CButton>
          </router-link>
        </CBox>
      </CBox>
    </CBox>
  </DefaultLayout>
</template>

<script lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import DefaultLayout from '@/components/DefaultLayout.vue'
import { CButton, CBox, CText, CImage } from '@chakra-ui/vue-next'
import axios from 'axios'

interface Wine {
  one_word: string
  wine_image: string
  wine_name: string
  comment: string
}

interface ResultMessageDef {
  [key: number]: string
}

export default {
  name: 'ResultAka',
  components: {
    DefaultLayout,
    CBox,
    CText,
    CButton
  },
  setup() {
    const store = useStore()
    const rank = computed(() => store.state.question.rank)

    const wineList = ref<Wine[] | null>(null)
    const loading = ref(true)

    const resultMessageDef: ResultMessageDef = {
      1: '深い旨味の赤ワイン',
      2: 'まろやか濃厚赤ワイン',
      3: 'がっしり渋み赤ワイン',
      4: '華やかエレガント赤ワイン'
    }

    onMounted(async () => {
      try {
        const res = await axios.get('http://localhost:18888/api/resultAkaWine', {})
        if (res.data) {
          wineList.value = res.data
          console.log('Fetched data:', res.data) // add this line to print fetched data
          loading.value = false
        } else {
          console.error('Server returned an error response:', res)
        }
      } catch (err) {
        console.error('An error occurred while fetching data:', err)
      }
    })

    const resultMessage = computed(() => wineList.value?.[rank.value - 1]) // Use computed property and adjust the index for 0-base
    const resultImage = computed(() => wineList.value?.[rank.value - 1])
    const Message = computed(() => resultMessageDef[rank.value])

    return {
      loading,
      resultMessage,
      resultImage,
      Message,
      rank
    }
  }
}
</script>
