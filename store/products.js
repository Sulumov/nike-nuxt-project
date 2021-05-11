const state = () => ({
  productList: [],
})

const mutations = {
  SET_PRODUCTS_LIST: (state, payload) => (state.productList = payload),
}

const actions = {}

const getters = {
  getProductBySlug: (state) => (slug) => {
    return state.productList.find((product) => product.slug === slug)
  },
}

export default { state, mutations, actions, getters }
