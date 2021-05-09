<template>
  <div class="cart-item">
    <div class="cart-item__img">
      <img :src="image" :alt="title" />
    </div>
    <div class="cart-item__description">
      <div class="cart-item__top-section">
        <a
          href="#"
          class="cart-item__remove"
          @click.prevent="removeItemFromCart"
        />
        <div class="cart-item__title">
          {{ title }}
        </div>
        <div class="cart-item__size">{{ size }}</div>
      </div>
      <div class="cart-item__bottom-section">
        <counter :small="true" />
        <div class="cart-item__price-section">
          <div v-if="discount" class="cart-item__discount">
            -{{ discount }}%
          </div>
          <div class="cart-item__old-price">
            {{ oldPrice }}
          </div>
          <div class="cart-item__price">
            {{ price }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    discount: {
      type: String,
    },
    price: {
      type: String,
      required: true,
    },
    oldPrice: {
      type: String,
    },
    size: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  methods: {
    removeItemFromCart(id) {},
  },
}
</script>

<style lang="scss">
@import 'CartItem';
</style>
