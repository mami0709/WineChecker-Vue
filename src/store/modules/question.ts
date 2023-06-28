import { Module } from 'vuex'

// 状態の型を定義
interface State {
  totalPoint: number
  questionNum: number
  answers: number[]
  rank: number
  questions: { q: string; a1: string; a2: string }[]
}

// 初期状態を定義
const state: State = {
  totalPoint: 0,
  questionNum: 0,
  answers: [],
  rank: 0,
  questions: [
    // 質問のリストを初期化
    { q: '洋食と和食どっちが好きですか？', a1: '洋食', a2: '和食' },
    { q: '料理の好みは？', a1: 'こってり派', a2: 'さっぱり派' },
    {
      q: 'チョコレートはどっちが好き？',
      a1: '高カカオのビターチョコレート',
      a2: '甘くてまろやかなミルクチョコレート'
    },
    { q: '季節を感じるお酒がいい', a1: '気にしない', a2: 'もちろん' },
    { q: '料理と一緒にワインを味わいたい', a1: 'もちろん', a2: '別がいい' }
  ]
}

export const question: Module<State, unknown> = {
  namespaced: true,
  state,
  // Vuexの状態を変更するための関数
  mutations: {
    // 質問ナンバーを更新
    updateQuestionNum(state: State) {
      state.questionNum += 1
    },
    // ステートを初期状態にリセット
    resetAnswers(state: State) {
      Object.assign(state, {
        totalPoint: 0,
        questionNum: 0,
        answers: [],
        rank: 0
      })
    }
  },
  // Actions: 非同期操作や、複数のミューテーションを組み合わせるための関数
  actions: {
    // 合計点数とランクが更新され、次の質問に進むための質問番号が更新される
    answerQuestion({ commit, state }, payload: { value: number }) {
      // ユーザーの回答をstate.answers配列に追加
      state.answers.push(payload.value)
      // ユーザーの回答の点数をstate.totalPointに加算
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

      // updateQuestionNumミューテーションが実行され、次の質問に進むための質問番号が更新
      commit('updateQuestionNum')
    }
  }
}
