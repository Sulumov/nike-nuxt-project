<template>
  <div v-if="history" class="history">
    <div class="history__title">История просмотров</div>
    <div class="history__list">
      <client-only>
        <carousel
          :per-page="5"
          :mouse-drag="true"
          :touch-drag="true"
          :pagination-enabled="false"
          :navigation-enabled="true"
          navigation-next-label="<div class='slider-arrow slider-arrow--right'></span>"
          navigation-prev-label="<div class='slider-arrow slider-arrow--left'></span>"
          :per-page-custom="[
            [1200, 4],
            [910, 3],
            [622, 2],
            [360, 1],
          ]"
        >
          <slide v-for="item in history" :key="item.id">
            <HistoryItem
              :name="item.name"
              :image="item.image"
              :price="item.price"
              :old-price="item.oldPrice"
              :discount="item.discount"
              :slug="item.slug"
            />
          </slide>
        </carousel>
      </client-only>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'HistoryBlock',
  computed: {
    ...mapState({
      history: (state) => state.products.history,
    }),
  },
}
</script>

<style lang="scss">
@import 'HistoryBlock';
</style>
