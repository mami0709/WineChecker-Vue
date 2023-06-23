import { createStore } from 'vuex'
import { question } from './modules/question'

export const store = createStore({
  modules: {
    question
  }
})
