<template>
  <div class="cart-icon">
    <span class="number"> {{ num }} </span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CartIcon',
  computed: mapGetters({
    num: 'cart/getTotalCartItems',
  }),
}
</script>

<style lang="scss" scoped>
@import 'CartIcon';
</style>
