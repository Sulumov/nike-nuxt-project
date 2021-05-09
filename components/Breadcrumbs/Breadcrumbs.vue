<template>
  <nav class="breadcrumbs">
    <nuxt-link to="/"> Главная </nuxt-link>
    <span>{{ currentPageTitle }}</span>
  </nav>
</template>

<script>
export default {
  name: 'Breadcrumbs',
  computed: {
    currentPageTitle() {
      return document.title
    },
  },
}
</script>

<style lang="scss">
@import 'Breadcrumbs';
</style>
