import { Module } from 'vuex'

// 状態の型を定義
interface State {
  totalPoint: number
  questionNum: number
  answers: number[]
  rank: number
}

// 初期状態を定義
const state: State = {
  totalPoint: 0,
  questionNum: 0,
  answers: [],
  rank: 0
}

export const question: Module<State, unknown> = {
  namespaced: true,
  state,
  mutations: {
    answerQuestion(state: State, payload: { value: number }) {
      state.answers.push(payload.value)
      state.questionNum += 1
      state.totalPoint += payload.value

      // totalPointに基づいてrankを設定
      if (state.totalPoint < 5) {
        state.rank = 0
      } else if (state.totalPoint < 7) {
        state.rank = 1
      } else if (state.totalPoint < 9) {
        state.rank = 2
      } else {
        state.rank = 3
      }
    },
    resetAnswers(state: State) {
      Object.assign(state, {
        totalPoint: 0,
        questionNum: 0,
        answers: [],
        rank: 0
      })
    }
  }
}
