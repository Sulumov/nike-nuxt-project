<template>
  <div class="header">
    <mobile-menu />
    <nuxt-link to="/" class="logo" />
    <top-menu />
    <div class="tools">
      <div class="search" />
      <cart-icon />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss" scoped>
@import 'Header';
</style>
