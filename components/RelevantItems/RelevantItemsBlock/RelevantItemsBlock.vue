<template>
  <div class="relevant-items-block">
    <div class="relevant-items-block__title">Смотрите также</div>
    <div class="relevant-items-block__list">
      <relevant-item
        v-for="item in getRelevantItems"
        :key="item.id"
        :name="item.name"
        :image="item.images[0]"
        :price="item.current_price"
        :slug="item.slug"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'RelevantItemsBlock',
  computed: mapGetters({
    getRelevantItems: 'products/getRelevantItems',
  }),
}
</script>

<style lang="scss">
@import 'RelevantItemsBlock';
</style>
