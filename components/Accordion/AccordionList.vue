<template>
  <div class="accordion" :class="{ 'accordion--high-level': highLevel }">
    <div
      v-for="(item, index) of list"
      :key="item.title"
      class="accordion__group"
      :class="{
        active: item.dropped,
        'accordion__group--show-all': item.showAll,
      }"
    >
      <div
        class="accordion__title"
        :class="{ 'accordion__title--drop': !!item.children }"
        @click="menuItemHandler(index, list)"
      >
        {{ item.title }}
      </div>
      <div v-if="!!item.children" class="accordion__list">
        <accordion-list :menu-list="item.children" />
      </div>
    </div>
  </div>
</template>

<script>
import menuDrop from '@/mixins/menuDrop'

export default {
  name: 'AccordionList',
  mixins: [menuDrop],
  props: {
    menuList: {
      type: Array,
      required: true,
    },
    highLevel: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    list: [],
  }),
  watch: {
    menuList(newList) {
      this.list = newList
    },
  },
  mounted() {
    this.list = this.menuList
  },
}
</script>

<style lang="scss">
@import 'components/Accordion/AccordionList';
</style>
