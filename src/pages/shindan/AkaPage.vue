<template>
  <DefaultLayout>
    <CBox v-if="finished" textAlign="center" pt="150px">
      <CText fontSize="5xl">Done!</CText>
      <CBox d="flex" justifyContent="center" mt="1.5rem">
        <CircularProgress value="{80}" w="40px" h="40px" style="margin: 0 auto" />
        <CircularProgress :progress="80" />
      </CBox>
    </CBox>

    <CBox v-else d="flex" flexDirection="column" alignItems="center" pt="100px" w="80%" mx="auto">
      <CText fontSize="4xl">Q{{ questionNum + 1 }}. {{ currentQuestion?.q }}</CText>
      <CBox mt="2rem" mb="4rem" borderTopWidth="1px" borderColor="#ccc" w="full" />

      <CImage
        :src="`/images/${String(questionNum + 1).padStart(2, '0')}.png`"
        alt="Top"
        h="400px"
        w="400px"
        style="margin: 0 auto"
      />

      <CBox d="flex" justifyContent="center" mt="5rem" w="full">
        <CButton
          colorScheme="red"
          variant="outline"
          fontSize="1.5em"
          @click="() => handleButtonClick(1)"
          color="#cd1919"
          :_hover="{ bg: '#cd1919', color: '#fff' }"
          mr="1em"
        >
          {{ currentQuestion?.a1 }}
        </CButton>

        <CButton
          colorScheme="red"
          variant="outline"
          fontSize="1.5em"
          @click="() => handleButtonClick(2)"
          color="#10b981"
          :_hover="{ bg: '#10b981', color: '#fff' }"
          ml="1em"
        >
          {{ currentQuestion?.a2 }}
        </CButton>
      </CBox>
    </CBox>
  </DefaultLayout>
</template>

<script lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import DefaultLayout from '@/components/DefaultLayout.vue'
import { CButton, CBox, CText, CImage } from '@chakra-ui/vue-next'
import CircularProgress from '@/components/CircularProgress.vue'

export default {
  name: 'AkaPage',
  components: {
    DefaultLayout,
    CButton,
    CImage,
    CText,
    CBox,
    CircularProgress
  },
  setup() {
    const store = useStore()
    const state = computed(() => store.state.question) // Vuex の question モジュールの状態にアクセス
    console.log(state.value)

    const currentQuestion = computed(() => state.value.questions[state.value.questionNum]) // 現在の質問を取得
    const questionNum = computed(() => state.value.questionNum) // 現在の質問番号を取得

    // 全ての質問が回答されたかどうかを判断するフラグ
    const finished = computed(() => questionNum.value >= state.value.questions.length)

    // handleButtonClick 関数の定義
    const handleButtonClick = (value: number) => {
      store.dispatch('question/answerQuestion', { value }) // Vuex の answerQuestion アクションをディスパッチ
      console.log(state.value)
    }

    return { currentQuestion, questionNum, handleButtonClick, finished } // handleButtonClick 関数をテンプレートで使用できるように return
  }
}
</script>
