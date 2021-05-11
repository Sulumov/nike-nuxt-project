<template>
  <div class="add-to-cart">
    <counter @change="counterHandler" />
    <button class="add-to-cart__button" @click="preparation">В корзину</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'AddToCart',
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: Object,
      required: true,
    },
    size: {
      type: Object,
      required: true,
    },
    oldPrice: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
    },
    image: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    counterNum: 1,
  }),
  methods: {
    counterHandler(num) {
      this.counterNum = num
    },
    ...mapActions({
      addToCart: 'cart/addToCart',
    }),
    async preparation() {
      if (this.size.value && this.color.value) {
        await this.addToCart({
          id: this.id,
          name: this.name,
          number: this.counterNum,
          price: this.price,
          oldPrice: this.oldPrice,
          discount: this.discount,
          size: this.size,
          color: this.color,
          image: this.image,
        })
      }
    },
  },
}
</script>

<style lang="scss">
@import 'AddToCart';
</style>
