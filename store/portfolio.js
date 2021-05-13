export const state = () => ({
  value: 'myvalue',
  portfolios_data: [],
})

export const getters = {
  getterValue: (state) => {
    return state.value
  },
  getPtfsData: (state) => {
    return state.portfolios_data
  },
}

export const mutations = {
  updateValue: (state, payload) => {
    state.value = payload
  },
  updatePtfsData: (state, payload) => {
    state.portfolios_data = payload
  },
}

export const actions = {
  updateActionValue({ commit }) {
    commit('updateValue', payload)
  },
}
