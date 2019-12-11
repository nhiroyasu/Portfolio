<template>
  <div class="navbar">
    <bar-item value="テスト" link="#" />
    <bar-item value="テスト" link="#" />
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
* {
  margin: 0;
  padding: 0;
}

.navbar {
  padding: 10px;
  width: 100vw;
  height: auto;
  background-color: #2d3436;
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  box-shadow: 0px 10px 10px #7c7d7e;
  z-index: 2;
}
</style>
