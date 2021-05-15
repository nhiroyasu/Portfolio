import { loadPortfoliosData } from '@/services/fb_firestore'

export const state = () => ({
  data: [],
})

export const getters = {
  data: (state) => {
    return [...state.data]
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
