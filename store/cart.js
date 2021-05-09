const state = () => ({
  cart: [],
  cartWindowVisibleStatus: false,
})

const mutations = {
  SET_CART_WINDOW_VISIBLE_STATUS: (state, status) =>
    (state.cartWindowVisibleStatus = status),
}

const actions = {
  toggleCart({ commit, state }) {
    const status = !state.cartWindowVisibleStatus
    commit('SET_CART_WINDOW_VISIBLE_STATUS', status)
    commit('SET_BODY_SCROLL_FIX_STATUS', status, { root: true })
    if (status) {
      commit('SET_MOBILE_MENU_VISIBLE_STATUS', false, {
        root: true,
      })
    }
  },
}

const getters = {
  getTotalCartItems: (state) => state.cart.length,
}

export default { state, getters, actions, mutations }
