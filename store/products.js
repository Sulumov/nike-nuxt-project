const state = () => ({
  productList: [],
  currentProductId: '',
})

const mutations = {
  SET_PRODUCTS_LIST: (state, payload) => (state.productList = payload),
  SET_CURRENT_PRODUCT: (state, productId) =>
    (state.currentProductId = productId),
}

const actions = {}

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

export default { state, mutations, actions, getters }
