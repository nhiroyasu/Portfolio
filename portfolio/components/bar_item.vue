<template>
  <div class="nav-item">
    <nuxt-link class="nav-link cus-nav-link p-2 p-md-3" v-bind:to="link">{{value}}</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    link: String
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Baloo+Bhai&display=swap');

.nav-item {
  height: auto;

  .cus-nav-link {
    font-family: 'Baloo Bhai', cursive;
    font-weight: 500;
    color: #fff;

    &:hover {
      color: var(--my-active-color);
    }
  }
}
</style>
