<template>
  <nav class="breadcrumbs">
    <nuxt-link to="/"> Главная </nuxt-link>
    <span>{{ title }}</span>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Breadcrumbs',
  computed: mapState({
    title: (state) => state.products.currentProductTitle,
  }),
}
</script>

<style lang="scss">
@import 'Breadcrumbs';
</style>
