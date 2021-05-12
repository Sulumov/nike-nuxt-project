<template>
  <div>
    <Header />
    <Nuxt />
    <Footer />
    <client-only>
      <cart-window />
    </client-only>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: mapState({
    bodyScrollFixStatus: (state) => state.bodyScrollFixStatus,
    cart: (state) => state.cart.cart,
  }),
  watch: {
    cart: {
      handler(val) {
        localStorage.setItem('cart', JSON.stringify(val))
      },
      deep: true,
    },
  },
  beforeMount() {
    const cart = JSON.parse(localStorage.getItem('cart'))
    if (Array.isArray(cart)) {
      this.setCartPreset(cart)
    }
  },
  methods: mapMutations({
    setCartPreset: 'cart/SET_CART_PRESET',
  }),

  head() {
    return {
      bodyAttrs: {
        class: this.bodyScrollFixStatus ? 'fix-scroll' : '',
      },
    }
  },
}
</script>
<style lang="scss"></style>
