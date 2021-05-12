<template>
  <div class="property-selector">
    <div class="property-selector__title">{{ title }}:</div>
    <div
      class="property-selector__property-list"
      :class="{ 'property-selector__property-list--big': big }"
    >
      <div
        v-for="(property, index) in properties"
        :key="property.value"
        class="property-selector__property"
        :class="{ active: property.name === currentProp.name }"
        @click="toggleProperty(index)"
      >
        {{ property.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PropertySelector',
  props: {
    title: {
      type: String,
      required: true,
    },
    properties: {
      type: Array,
      required: true,
      default: () => [
        {
          name: 'Синий',
          value: 'blue',
        },
        {
          name: 'Черный',
          value: 'black',
        },
        {
          name: 'Красный',
          value: 'red',
        },
      ],
    },
    big: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    currentProp: {},
  }),
  methods: {
    toggleProperty(index) {
      this.currentProp = this.properties[index]
      this.$emit('select', this.currentProp)
    },
  },
}
</script>

<style lang="scss">
@import 'PropertySelector';
</style>
