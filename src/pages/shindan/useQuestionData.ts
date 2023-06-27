import { ref, computed, onMounted, watch } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import {
  questionsDef,
  totalQuestionCount,
  resultMessageDef,
  resultMessageShiroDef
} from '@/definitions/consts'

export default {
  setup() {
    const store = useStore()
    const router = useRouter()

    const questionNum = computed(() => store.state.question.questionNum)

    const currentQuestion = questionsDef?.[questionNum.value]
    const finished = computed(() => questionNum.value >= questionsDef.length)
    console.log('finished', finished)

    watch(finished, (newVal) => {
      if (newVal) {
        setTimeout(() => {
          const path = router.currentRoute.value.path
          if (path.includes('/shindan/AkaPage')) {
            router.push('/shindan/resultAka')
          } else if (path.includes('shiroPage')) {
            router.push('/shindan/resultShiro')
          }
        }, 2000)
      }
    })

    return {
      questionNum,
      currentQuestion,
      finished
    }
  }
}
