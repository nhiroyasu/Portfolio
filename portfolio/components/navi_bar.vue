<template>
  <div class="navbar navbar-expand-lg navbar-custom p-0">
    <bar-item  value="HOME" link="#" />
    <bar-item value="PORTFOLIO" link="#" />
    <bar-item value="ABOUT" link="#" />
    <bar-item value="CONTACT" link="#" />
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
  box-shadow: 0px 5px 10px #CBEEFB;
}
</style>
