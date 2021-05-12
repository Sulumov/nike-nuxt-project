<template>
  <div
    class="cart-wrapper"
    :class="{ active: visibleStatus }"
    @click="cartWrapperHandler"
  >
    <div class="cart-window">
      <div class="cart-window__header">Твоя корзина</div>
      <a
        href="#"
        class="cart-window__close"
        @click.prevent="toggleCartWindow"
      />
      <div v-if="!cartItems.length" class="cart-window__empty">
        В корзине пусто
      </div>
      <template v-else>
        <div class="cart-window__list">
          <cart-item
            v-for="(item, index) in cartItems"
            :id="item.id"
            :key="item.id + item.size.value + item.color.value"
            :size="item.size.name"
            :discount="item.discount"
            :price="item.price"
            :old-price="item.oldPrice"
            :name="item.name"
            :image="item.image"
            :number="item.number"
            :index="index"
            :slug="item.slug"
          />
        </div>
        <div class="cart-window__footer">
          <div class="cart-window__total-amount">
            Предварительный итог:
            <div class="cart-window__num">{{ totalAmountFormat }}</div>
          </div>
          <button class="cart-window__buy">Оформить заказ</button>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'CartWindow',
  computed: {
    ...mapState({
      visibleStatus: (state) => state.cart.cartWindowVisibleStatus,
      cartItems: (state) => state.cart.cart,
    }),
    ...mapGetters({
      totalAmount: 'cart/getTotalAmount',
    }),
    totalAmountFormat() {
      return this.totalAmount.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')
    },
  },
  watch: {
    $route() {
      if (this.visibleStatus) this.toggleCartWindow(false)
    },
  },
  methods: {
    ...mapActions({
      toggleCartWindow: 'cart/toggleCart',
    }),
    cartWrapperHandler(e) {
      if (e.target === e.currentTarget) {
        this.toggleCartWindow()
      }
    },
  },
}
</script>

<style lang="scss">
@import 'CartWindow';
</style>
