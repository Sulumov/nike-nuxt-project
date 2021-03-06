const state = () => ({
  mobileMenuVisibleStatus: false,
  bodyScrollFixStatus: false,
})

const mutations = {
  SET_MOBILE_MENU_VISIBLE_STATUS: (state, status) => {
    state.mobileMenuVisibleStatus = status
  },
  SET_BODY_SCROLL_FIX_STATUS: (state, status) => {
    state.bodyScrollFixStatus = status
  },
}

const actions = {
  async nuxtServerInit({ commit }, { req }) {
    const { data } = await this.$axios.get(
      'https://adam.yorc.org/testmock/products.json'
    )
    commit('products/SET_PRODUCTS_LIST', data, { root: true })
  },
  toggleMobileMenu({ commit, state }) {
    const status = !state.mobileMenuVisibleStatus
    commit('SET_MOBILE_MENU_VISIBLE_STATUS', status)
    commit('SET_BODY_SCROLL_FIX_STATUS', status)
    if (status) {
      commit('cart/SET_CART_WINDOW_VISIBLE_STATUS', false, { root: true })
    }
  },
}

export default { state, mutations, actions }
