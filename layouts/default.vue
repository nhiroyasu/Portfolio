<template>
  <div>
    <menu-component />
    <nuxt />
  </div>
</template>

<script>
import MenuComponent from '@/components/Menu.vue'
import Loading from '@/components/Loading.vue'

export default {
  components: {
    MenuComponent,
    Loading,
  },
}
</script>

<style lang="scss">
:root {
  --my-active-color: #0fbcf9;
  --my-active2-color: #0da8e0;
  --my-sub-color: #03fdb7;
  --my-dark-blue: #3d4df5;
  --my-primary-blue: #b5f8fd;
  --my-black: #1e272e;
  --my-gray: #636e72;
  --my-white: #ecf0f1;
  --my-barkblue: #15293d;
}
</style>
