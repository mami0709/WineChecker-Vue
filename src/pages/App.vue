<template>
  <!-- <DefaultLayout> -->
  <CFlex flexDirection="column" alignItems="center">
    <img src="/images/top.png" alt="Top" boxSize="400px" />
    <CFlex flexDirection="column" paddingTop="30px">
      <span> ワインって種類が多すぎて何が自分に合うワインなのかわからない… </span>
      <span>そう思った経験はありませんか？</span>
      <span>
        このサイトは10個の質問に答えるだけで、あなたにぴったりのワインを診断いたします！
      </span>
      <span> あなたにぴったりのワインを選んで、ワインライフをもっと楽しんでみませんか？ </span>
    </CFlex>
    <CText fontSize="2xl" color="#CD1919" paddingTop="30px"> \ 好みのワインを簡単に診断！ / </CText>
    <CText fontSize="4xl" color="#CD1919" fontWeight="bold" paddingTop="30px"> ワイン診断 </CText>
    <CFlex paddingTop="30px">
      <router-link to="/shindan/aka">
        <button color="#CD1919">赤ワインで診断</button>
      </router-link>
      <router-link to="/shindan/shiro" style="margin-left: 20px">
        <button color="#10B981">白ワインで診断</button>
      </router-link>
    </CFlex>
  </CFlex>
  <!-- </DefaultLayout> -->
</template>

<script>
import { ref, onMounted } from 'vue'
// import { useStore } from 'vuex'
// import DefaultLayout from '../layouts/DefaultLayout.vue'
import { CFlex, CText } from '@chakra-ui/vue-next'
// import OutlineButton from './components/Button/outlineButton'

const span = {
  props: ['children'],
  template: '<CText fontSize="lg">{{ children }}</CText>'
}

export default {
  components: {
    // DefaultLayout,
    CFlex,
    CText
    // OutlineButton
  },
  setup() {
    // const store = useStore()
    const matches = ref(false)

    // TOPページに来ると診断結果をリセットする
    onMounted(() => {
      store.dispatch('resetAnswers')
    })

    return {
      matches
    }
  }
}
</script>

<style scoped>
/* 必要なCSSをここに追加します */
</style>
