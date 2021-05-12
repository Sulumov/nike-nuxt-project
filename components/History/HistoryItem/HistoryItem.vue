<template>
  <div class="history-item">
    <img class="history-item__image" :src="image" :alt="name" />
    <div class="history-item__description">
      <span v-if="discount" class="history-item__discount">
        - {{ discount }} %
      </span>
      <nuxt-link :to="'/product/' + slug" class="history-item__title">
        {{ name }}
      </nuxt-link>
      <div class="history-item__price-info">
        <span v-if="oldPrice" class="history-item__old-price">
          {{ oldPrice }}
        </span>
        <span class="history-item__price">
          {{ price }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HistoryItem',
  props: {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    oldPrice: {
      type: Number,
      default: 0,
    },
    discount: {
      type: Number,
      default: 0,
    },
    slug: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss">
@import 'HistoryItem';
</style>
