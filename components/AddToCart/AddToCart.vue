<template>
  <div class="add-to-cart">
    <counter @change="counterHandler" />
    <button class="add-to-cart__button">В корзину</button>
  </div>
</template>

<script>
export default {
  name: 'AddToCart',
  data: () => ({
    counterNum: 1,
  }),
  methods: {
    counterHandler(num) {
      this.counterNum = num
    },
  },
}
</script>

<style lang="scss">
@import 'AddToCart';
</style>
