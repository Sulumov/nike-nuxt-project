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
      <div class="cart-window__list">
        <cart-item
          id="123"
          size="L"
          discount="30"
          price="2900"
          old-price="3500"
          title="Свитшот Nike"
          image="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/c2579eeb-3048-4e65-a42c-c887a771354c/nikelab-fleece-rundhalsshirt-9czD4J.png"
        />
        <cart-item
          id="123"
          size="L"
          discount="30"
          price="2900"
          old-price="3500"
          title="Свитшот Nike"
          image="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/c2579eeb-3048-4e65-a42c-c887a771354c/nikelab-fleece-rundhalsshirt-9czD4J.png"
        />
        <cart-item
          id="123"
          size="L"
          discount="30"
          price="2900"
          old-price="3500"
          title="Свитшот Nike"
          image="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/c2579eeb-3048-4e65-a42c-c887a771354c/nikelab-fleece-rundhalsshirt-9czD4J.png"
        />
        <cart-item
          id="123"
          size="L"
          discount="30"
          price="2900"
          old-price="3500"
          title="Свитшот Nike"
          image="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/c2579eeb-3048-4e65-a42c-c887a771354c/nikelab-fleece-rundhalsshirt-9czD4J.png"
        />
        <cart-item
          id="123"
          size="L"
          discount="30"
          price="2900"
          old-price="3500"
          title="Свитшот Nike"
          image="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/c2579eeb-3048-4e65-a42c-c887a771354c/nikelab-fleece-rundhalsshirt-9czD4J.png"
        />
        <cart-item
          id="123"
          size="L"
          discount="30"
          price="2900"
          old-price="3500"
          title="Свитшот Nike"
          image="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/c2579eeb-3048-4e65-a42c-c887a771354c/nikelab-fleece-rundhalsshirt-9czD4J.png"
        />
        <cart-item
          id="123"
          size="L"
          discount="30"
          price="2900"
          old-price="3500"
          title="Свитшот Nike"
          image="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/c2579eeb-3048-4e65-a42c-c887a771354c/nikelab-fleece-rundhalsshirt-9czD4J.png"
        />
        <cart-item
          id="123"
          size="L"
          discount="30"
          price="2900"
          old-price="3500"
          title="Свитшот Nike"
          image="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/c2579eeb-3048-4e65-a42c-c887a771354c/nikelab-fleece-rundhalsshirt-9czD4J.png"
        />
      </div>
      <div class="cart-window__footer">
        <div class="cart-window__total-amount">
          Предварительный итог:
          <div class="cart-window__num">2900</div>
        </div>
        <button class="cart-window__buy">Оформить заказ</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'CartWindow',
  computed: {
    ...mapState({
      visibleStatus: (state) => state.cart.cartWindowVisibleStatus,
    }),
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
