<template>
  <div class="nav-item">
    <a class="nav-link cus-nav-link p-3" v-bind:href="link">{{value}}</a>
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
