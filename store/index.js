const state = () => ({
  mobileMenuVisibleStatus: true,
})

const mutations = {
  SET_MOBILE_MENU_VISIBLE_STATUS: (state, status) =>
    (state.mobileMenuVisibleStatus = status),
}

export default { state, mutations }
