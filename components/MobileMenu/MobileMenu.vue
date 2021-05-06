<template>
  <div class="mobile-menu">
    <button
      class="hamburger hamburger--collapse"
      :class="{ 'is-active': mobileMenuVisibleStatus }"
      type="button"
      @click="burgerHandler"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>
    <div class="menu-window" :class="{ active: mobileMenuVisibleStatus }">
      <accordion-list :high-level="true" :menu-list="menuList" />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import menuDrop from '@/mixins/menuDrop'
export default {
  name: 'MobileMenu',
  mixins: [menuDrop],
  data: () => ({
    menuList: [
      {
        title: 'Одежда',
        dropped: false,
        children: [
          {
            title: 'Все коллекции',
            to: '/',
          },
          {
            title: 'Air Max',
            dropped: false,
            children: [
              {
                title: 'Air Max 1',
                to: '/',
              },
              {
                title: 'Air Max 90',
                to: '/',
              },
              {
                title: 'Air Max 95',
                to: '/',
              },
              {
                title: 'Air Max 97',
                to: '/',
              },
              {
                title: 'Air Max 270',
                to: '/',
              },
              {
                title: 'Air Max 720',
                to: '/',
              },
            ],
          },
          {
            title: 'Dry fit',
            to: '/',
          },
          {
            title: 'Free',
            to: '/',
          },
          {
            title: 'Zoom',
            to: '/',
          },
        ],
      },
      {
        title: 'Аксессуары',
        dropped: false,
        children: [
          {
            title: 'Все коллекции',
            to: '/',
          },
          {
            title: 'Air Max',
            dropped: false,
            children: [
              {
                title: 'Air Max 1',
                to: '/',
              },
              {
                title: 'Air Max 90',
                to: '/',
              },
              {
                title: 'Air Max 95',
                to: '/',
              },
              {
                title: 'Air Max 97',
                to: '/',
              },
              {
                title: 'Air Max 270',
                to: '/',
              },
              {
                title: 'Air Max 720',
                to: '/',
              },
            ],
          },
          {
            title: 'Dry fit',
            to: '/',
          },
          {
            title: 'Free',
            to: '/',
          },
          {
            title: 'Zoom',
            to: '/',
          },
        ],
      },
      {
        title: 'Коллекции',
        dropped: false,
        children: [
          {
            title: 'Все коллекции',
            to: '/',
          },
          {
            title: 'Air Max',
            dropped: false,
            children: [
              {
                title: 'Air Max 1',
                to: '/',
              },
              {
                title: 'Air Max 90',
                to: '/',
              },
              {
                title: 'Air Max 95',
                to: '/',
              },
              {
                title: 'Air Max 97',
                to: '/',
              },
              {
                title: 'Air Max 270',
                to: '/',
              },
              {
                title: 'Air Max 720',
                to: '/',
              },
            ],
          },
          {
            title: 'Dry fit',
            to: '/',
          },
          {
            title: 'Free',
            to: '/',
          },
          {
            title: 'Zoom',
            to: '/',
          },
        ],
      },
    ],
  }),
  computed: {
    ...mapState({
      mobileMenuVisibleStatus: (state) => state.mobileMenuVisibleStatus,
    }),
  },
  methods: {
    burgerHandler() {
      return this.setVisibleStatus(!this.mobileMenuVisibleStatus)
    },
    ...mapMutations({
      setVisibleStatus: 'SET_MOBILE_MENU_VISIBLE_STATUS',
    }),
  },
}
</script>

<style lang="scss" scoped>
@import 'MobileMenu';
</style>
