<template>
  <div class="cart-item">
    <nuxt-link :to="'/product/' + slug" class="cart-item__img">
      <img :src="image" :alt="title" />
    </nuxt-link>
    <div class="cart-item__description">
      <div class="cart-item__top-section">
        <a
          href="#"
          class="cart-item__remove"
          @click.prevent="removeFromCart(index)"
        />
        <nuxt-link :to="'/product/' + slug" class="cart-item__title">
          {{ title }} {{ id }}
        </nuxt-link>
        <div class="cart-item__size">{{ size }}</div>
      </div>
      <div class="cart-item__bottom-section">
        <counter
          :small="true"
          :value="number"
          @change="changeItemNumber({ index, number: $event })"
        />
        <div class="cart-item__price-section">
          <div v-if="discount" class="cart-item__discount">
            -{{ discount }}%
          </div>
          <div v-if="oldPrice" class="cart-item__old-price">
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
import { mapMutations } from 'vuex'
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
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    oldPrice: {
      type: Number,
      default: 0,
    },
    size: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
  },
  methods: {
    ...mapMutations({
      changeItemNumber: 'cart/CHANGE_ITEM_NUMBER',
      removeFromCart: 'cart/REMOVE_FROM_CART',
    }),
  },
}
</script>

<style lang="scss">
@import 'CartItem';
</style>
