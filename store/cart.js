const state = () => ({
  cart: [],
})

const getters = {
  getTotalCartItems: (state) => state.cart.length,
}

export default { state, getters }
