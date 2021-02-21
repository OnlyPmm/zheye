import { createStore } from 'vuex'
import { GlobalDataProps } from "@/propType"

export default createStore<GlobalDataProps>({
  state: {
    user: {
      isLogin: false
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
