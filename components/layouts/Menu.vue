<template>
<div class='component-root'>
  <div class='menu-btn' @click='onClickedMenuBtn'>
    <img src='~assets/icons/commons/menu.svg' alt='menu icon'>
  </div>
  <div class='menu-title'>
    {{ title }}
  </div>
</div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    title: String
  },
  methods: {
    onClickedMenuBtn() {
      // TODO("メニューを表示
    }
  }
};
</script>

<style lang='scss' scoped>
.component-root {
  background: linear-gradient(121deg, rgba(37, 60, 128, 0.8) 0%, rgba(66, 106, 224, 0.8) 57%, rgba(15, 188, 249, 0.8) 100%), url('~assets/logos/logo.svg') center center/80% no-repeat;
}
</style>