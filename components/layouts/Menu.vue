<template>
  <div class="component-root">
    <img
      class="menu-btn img-block clickable move-to-top"
      src="@/assets/icons/commons/menu.svg"
      alt="menu icon"
      @click="onClickedMenuBtn"
    />
    <div class="menu-title non-selectable">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    title: {
      type: String,
      default: '',
    },
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
  background: linear-gradient(
      121deg,
      rgba(37, 60, 128, 0.8) 0%,
      rgba(66, 106, 224, 0.8) 57%,
      rgba(15, 188, 249, 0.8) 100%
    ),
    url('@/assets/logos/cyan/logo.svg') center center/80% no-repeat;
  color: $font-light-color;
  display: flex;
  height: $menu-icon-size;

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
