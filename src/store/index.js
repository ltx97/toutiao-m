import { createStore } from 'vuex'
import { getItem, setItem } from '@/util/storage'

export default createStore({
  state: {
    user: getItem('user-token')
  },
  getters: {
  },
  mutations: {
    setUser (state, data) {
      state.user = data
      setItem('user-token', JSON.stringify(data))
    }
  },
  actions: {
  },
  modules: {
  }
})
