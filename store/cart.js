const state = () => ({
  cart: [],
  cartWindowVisibleStatus: false,
})

const mutations = {
  SET_CART_PRESET: (state, cart) => {
    state.cart = cart
  },
  SET_CART_WINDOW_VISIBLE_STATUS: (state, status) =>
    (state.cartWindowVisibleStatus = status),
  ADD_NEW_ITEM_TO_CART: (state, item) => {
    state.cart.push(item)
  },
  QUANTIFY_ITEMS: (state, item) => {
    state.cart[item.index].number += item.number
  },
  CHANGE_ITEM_NUMBER: (state, item) => {
    state.cart[item.index].number = item.number
  },
  REMOVE_FROM_CART: (state, index) => {
    state.cart.splice(index, 1)
  },
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
  findMatches({ state }, properties) {
    // return -1 if item is not found
    return state.cart.findIndex((item) => {
      return (
        item.id === properties.id &&
        item.size.value === properties.size.value &&
        item.color.value === properties.color.value
      )
    })
  },
  async addToCart({ commit, dispatch }, payload) {
    const exists = await dispatch('findMatches', {
      id: payload.id,
      color: payload.color,
      size: payload.size,
    })
    if (exists + 1) {
      commit('QUANTIFY_ITEMS', { index: exists, number: payload.number })
    } else {
      commit('ADD_NEW_ITEM_TO_CART', payload)
    }
  },
}

const getters = {
  getTotalCartItems: (state) => {
    return state.cart.reduce(function (totalNum, item) {
      return totalNum + item.number
    }, 0)
  },
  getTotalAmount: (state) => {
    return state.cart.reduce(function (totalNum, item) {
      return totalNum + item.price * item.number
    }, 0)
  },
}

export default { state, getters, actions, mutations }
