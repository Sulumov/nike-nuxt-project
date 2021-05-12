<template>
  <div class="mobile-menu">
    <button
      class="hamburger hamburger--slider"
      :class="{ 'is-active': mobileMenuVisibleStatus }"
      type="button"
      @click="toggleMobileMenu"
    >
      <span class="hamburger-box"> <span class="hamburger-inner"></span></span>
    </button>
    <div class="menu-window" :class="{ active: mobileMenuVisibleStatus }">
      <accordion-list :high-level="true" :menu-list="menuList" />
      <div class="static-menu-list">
        <nuxt-link to="/">Доставка</nuxt-link>
        <nuxt-link to="/">Оплата</nuxt-link>
        <nuxt-link to="/">Возврат</nuxt-link>
        <nuxt-link to="/">О нас</nuxt-link>
        <nuxt-link to="/">Контакты</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
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
          {
            title: 'Показать все',
            showAll: true,
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
    ...mapActions({
      toggleMobileMenu: 'toggleMobileMenu',
    }),
  },
}
</script>

<style lang="scss">
@import 'MobileMenu';
</style>
