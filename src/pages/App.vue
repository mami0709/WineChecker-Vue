<template>
  <DefaultLayout>
    <CBox display="flex" flexDirection="column" alignItems="center">
      <CImage src="/images/top.png" alt="Top" w="400px" objectFit="cover" />
      <CBox display="flex" flexDirection="column" pt="30px" fontSize="1.2rem">
        <CBox>ワインって種類が多すぎて何が自分に合うワインなのかわからない…</CBox>
        <CBox>そう思った経験はありませんか？</CBox>
        <CBox
          >このサイトは10個の質問に答えるだけで、あなたにぴったりのワインを診断いたします！</CBox
        >
        <CBox>あなたにぴったりのワインを選んで、ワインライフをもっと楽しんでみませんか？</CBox>
      </CBox>
      <CText fontSize="1.5em" fontWeight="bold" color="#cd1919" pt="25px">
        \ 好みのワインを簡単に診断！ /
      </CText>
      <CText fontSize="5em" color="#cd1919" fontWeight="bold" pt="10px"> ワイン診断 </CText>
      <CBox pt="30px">
        <router-link to="/shindan/aka">
          <CButton colorScheme="red" variant="outline" fontSize="1.3em"> 赤ワインで診断 </CButton>
        </router-link>
        <router-link to="/shindan/shiro" style="margin-left: 20px">
          <CButton colorScheme="green" variant="outline" fontSize="1.3em"> 白ワインで診断 </CButton>
        </router-link>
      </CBox>
    </CBox>
  </DefaultLayout>
</template>

<script lang="ts">
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import DefaultLayout from '@/components/DefaultLayout.vue'
import { CButton, CBox, CText, CImage } from '@chakra-ui/vue-next'

export default {
  components: {
    DefaultLayout,
    CButton,
    CBox,
    CText,
    CImage
  },
  setup() {
    const store = useStore()

    // TOPページに来ると診断結果をリセットする
    onMounted(() => {
      store.commit('question/resetAnswers')
    })
  }
}
</script>

<style scoped>
/* 必要なCSSをここに追加します */
</style>
