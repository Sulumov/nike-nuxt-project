<template>
  <div class="counter" :class="{ 'counter--small': small }">
    <button
      class="counter__btn counter__btn--minus"
      @click="counterClickHandler('decrement')"
    />
    {{ counterNum }}
    <button
      class="counter__btn counter__btn--plus"
      @click="counterClickHandler('increment')"
    />
  </div>
</template>

<script>
export default {
  name: 'Counter',
  props: {
    value: {
      type: Number,
      default: 99,
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    counterNum: 1,
  }),
  watch: {
    counterNum(currentValue, lastValue) {
      if (currentValue === 0 || currentValue > 199) this.counterNum = lastValue
      this.$emit('change', this.counterNum)
    },
    value(val) {
      this.counterNum = val
    },
  },
  mounted() {
    this.counterNum = this.value
  },
  methods: {
    counterClickHandler(type) {
      if (type === 'increment') this.counterNum++
      else if (type === 'decrement') this.counterNum--
    },
  },
}
</script>

<style lang="scss">
@import 'Counter';
</style>
