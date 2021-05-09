<template>
  <div class="header">
    <mobile-menu />
    <nuxt-link to="/" class="header__logo" />
    <top-menu />
    <div class="header__tools">
      <div class="header__search" />
      <cart-icon />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss">
@import 'Header';
</style>
