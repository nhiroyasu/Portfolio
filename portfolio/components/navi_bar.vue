<template>
  <div class="navbar navbar-expand-lg navbar-custom">
    <bar-item  value="HOME" link="#" />
    <bar-item value="PORTFOLIO" link="#" />
    <bar-item value="REPORT" link="#" />
    <bar-item value="CONECT" link="#" />
    <bar-item value="ABOUT" link="#" />
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


<style scoped>

.navbar-custom {
  background-color: #1e272e;
  box-shadow: 0px 10px 15px #808e9b;
}
</style>
