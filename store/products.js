const state = () => ({
  productList: [],
  currentProductId: '',
  history: [],
})

const mutations = {
  SET_PRODUCTS_LIST: (state, payload) => (state.productList = payload),
  SET_CURRENT_PRODUCT: (state, productId) =>
    (state.currentProductId = productId),
  ADD_TO_ITEM_HISTORY: (state, product) => {
    const productIndex = state.history.findIndex(
      (item) => item.id === product.id
    )
    if (productIndex + 1) {
      // Up item in history
      state.history.unshift(...state.history.splice(productIndex, 1))
    } else {
      // Add item to history
      if (state.history.length === 8) state.history.pop()
      state.history.unshift(product)
    }
    localStorage.setItem('history', JSON.stringify(state.history))
  },
  SET_HISTORY_PRESET: (state, history) => {
    state.history = history
  },
}

const getters = {
  getProductBySlug: (state) => (slug) => {
    return state.productList.find((product) => product.slug === slug)
  },
  getRelevantItems: (state) => {
    return state.productList
      .filter((item) => item.id !== state.currentProductId)
      .sort(() => Math.random() - 0.5)
      .splice(0, 3)
  },
}

export default { state, mutations, getters }
