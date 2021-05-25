import { loadPortfoliosData } from '@/services/fb_firestore'

export const state = () => ({
  data: [],
})

export const getters = {
  data: (state) => {
    return [...state.data]
  },
  findOne: (state) => (id) => {
    return state.data.find((portfolio) => portfolio.id === id)
  },
}

export const mutations = {
  setData: (state, payload) => {
    state.data = payload
  },
}

export const actions = {
  /**
   * @param context
   */
  async loadData(context) {
    const data = await loadPortfoliosData()
    context.commit('setData', data)
  },
}
