<template>
  <div>
    <Header />
    <Nuxt />
    <cart-window />
  </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
  head() {
    return {
      bodyAttrs: {
        class: this.bodyScrollFixStatus ? 'fix-scroll' : '',
      },
    }
  },
  computed: mapState({
    bodyScrollFixStatus: (state) => state.bodyScrollFixStatus,
  }),
}
</script>
<style lang="scss"></style>
