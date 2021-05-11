<template>
  <div class="product-slider">
    <client-only>
      <div class="product-slider__elements">
        <div class="product-slider__elements-inner">
          <img
            v-for="(image, index) in images"
            :key="image"
            class="product-slider__image"
            :class="{ active: currentSlide === index }"
            :src="image"
            @click="leftSideImageHandler(index)"
          />
        </div>
      </div>
      <div class="product-slider__main-image-container">
        <div v-if="discount > 0" class="product-slider__discount">
          -{{ discount }}%
        </div>
        <carousel
          ref="slider"
          :per-page="1"
          :mouse-drag="false"
          :pagination-enabled="false"
          :navigation-enabled="true"
          navigation-next-label="<div class='slider-arrow slider-arrow--right'></span>"
          navigation-prev-label="<div class='slider-arrow slider-arrow--left'></span>"
          :loop="true"
          @page-change="slideChangedEvent"
        >
          <slide v-for="image in images" :key="image">
            <image-zoom
              v-if="$device.isDesktop"
              ref="imageZoom"
              :zoom-amount="10"
              :regular="image"
              :click-zoom="true"
              :show-message="false"
              :show-message-touch="false"
            />
            <img v-else :src="image" />
          </slide>
        </carousel>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  name: 'ProductSlider',
  props: {
    images: {
      type: Array,
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
    },
  },
  data: () => ({
    currentSlide: 0,
  }),
  methods: {
    leftSideImageHandler(index) {
      this.$refs.slider.goToPage(index)
    },
    slideChangedEvent(number) {
      this.currentSlide = number
    },
  },
}
</script>

<style lang="scss">
@import 'ProductSlider';
</style>
