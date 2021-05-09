export default {
  data: () => ({
    $activeMenuItemIndex: null,
  }),
  methods: {
    menuItemHandler(index, menuList) {
      this.$activeMenuItemIndex = index
      if (menuList[index].to) return this.$router.push(menuList[index].to)
      if (menuList[index].dropped) {
        menuList[index].dropped = false
      } else {
        for (const idx in menuList) {
          menuList[idx].dropped = false
        }
        menuList[index].dropped = true
      }
    },
  },
}
