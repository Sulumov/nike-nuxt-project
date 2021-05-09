<template>
  <nav class="menu">
    <ul>
      <li
        v-for="(item, index) in menuList"
        :key="item.title"
        class="menu__link"
        :class="{ 'has-children': !!item.children, active: item.dropped }"
      >
        <a href="#" @click.prevent="menuItemHandler(index, menuList)">
          {{ item.title }}
        </a>
        <ul v-if="!!item.children" class="menu__drop">
          <li v-for="subItem in item.children" :key="subItem.title">
            <nuxt-link :to="subItem.to">{{ subItem.title }}</nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
import menuDrop from '@/mixins/menuDrop'
export default {
  name: 'TopMenu',
  mixins: [menuDrop],
  data: () => ({
    menuList: [
      {
        title: 'Одежда',
        dropped: false,
        children: [
          {
            title: 'Футболки',
            to: '/',
          },
          {
            title: 'Худи',
            to: '/',
          },
          {
            title: 'Свитшоты',
            to: '/',
          },
        ],
      },
      {
        title: 'Аксессуары',
        dropped: false,
        children: [
          {
            title: 'Подраздел 1',
            to: '/',
          },
          {
            title: 'Подраздел 2',
            to: '/',
          },
          {
            title: 'Подраздел 3',
            to: '/',
          },
        ],
      },
      {
        title: 'Коллекция',
        dropped: false,
        children: [
          {
            title: 'Все коллекции',
            to: '/',
          },
          {
            title: 'Air Max',
            to: '/',
          },
          {
            title: 'Dry Fit',
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
}
</script>

<style lang="scss">
@import 'TopMenu';
</style>
