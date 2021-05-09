<template>
  <div class="cart-icon" @click="toggleCartWindow">
    <span class="cart-icon__number"> {{ num }} </span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'CartIcon',
  computed: mapGetters({
    num: 'cart/getTotalCartItems',
  }),
  methods: mapActions({
    toggleCartWindow: 'cart/toggleCart',
  }),
}
</script>

<style lang="scss">
@import 'CartIcon';
</style>
