<template>
  <nuxt-link :to="'/product/' + slug" class="relevant-item">
    <img :src="image" class="relevant-item__image" />
    <div class="relevant-item__title">{{ name }}</div>
    <div class="relevant-item__price">
      {{ price }}
    </div>
  </nuxt-link>
</template>

<script>
export default {
  name: 'RelevantItem',
  props: {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss">
@import 'RelevantItem';
</style>
