<template>
  <div class="component-root">
    <img
      class="menu-btn img-block clickable move-to-top"
      src="@/assets/icons/commons/menu.svg"
      alt="menu icon"
      @click="onClickedMenuBtn"
    />
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    title: String,
  },
  methods: {
    onClickedMenuBtn() {
      this.$router.push('/menu')
    },
  },
}
</script>

<style lang="scss" scoped>
.component-root {
  align-items: center;
  color: $font-light-color;
  display: flex;
  position: fixed;
  height: $menu-icon-size;
  width: 100vw;
  box-sizing: content-box;
  z-index: 100;
  background-color: rgba($color: #000000, $alpha: 0.36);

  .menu-btn {
    height: $menu-icon-size;
    padding: $menu-icon-pad;
    position: absolute;
    width: $menu-icon-size;
  }

  .menu-title {
    flex-grow: 1;
    font-size: 1.5em;
    text-align: center;
  }
}
</style>
