<template>
  <div class="component-root">

  </div>
</template>

<script>
export default {
  setup() {


    return {}
  }
}
</script>

<style lang="scss" scoped>
.component-root {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url('~/assets/images/background.png');
}

.component-root:before {
  content: '';
  position: fixed;
  height: 100vh;
  width: 100vw;
  background: inherit;
  filter: blur(5px);
  z-index: -1;
}
</style>