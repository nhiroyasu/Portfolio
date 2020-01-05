<template>
  <div id="Navbar" class="navbar navbar-expand navbar-custom  justify-content-center align-items-center p-0">
    <bar-item  value="HOME" link="/" />
    <bar-item value="PORTFOLIO" link="#" />
    <bar-item value="ABOUT" link="/#about-place" />
    <bar-item value="CONTACT" link="contact" />
  </div>
</template>


<script>
import BarItem from "~/components/bar_item.vue";

export default {
  components: {
    BarItem
  },
}
</script>


<style lang="scss" scoped>

.navbar-custom {
  /* background-color: #1e272e; */
  background-color: var(--my-black);
  box-shadow: 0px 5px 10px var(--my-white);
}
</style>
