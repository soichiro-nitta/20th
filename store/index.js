export const state = () => ({
  opening: false,
  canplayBG: false,
  loadingComplete: false
})

export const getters = {
  opening: state => state.opening,
  canplayBG: state => state.canplayBG,
  loadingComplete: state => state.loadingComplete
}

export const mutations = {
  setOpening(state) {
    state.opening = true
  },
  setCanplayBG(state) {
    state.canplayBG = true
  },
  setLoadingComplete(state) {
    state.loadingComplete = true
  }
}

export const actions = {}
