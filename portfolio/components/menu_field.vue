<template>

</template>

<style scoped>

</style>

<script>
export default {
  data: function() {
    return {
      menu_disp: false
    };
  },
  methods: {
    menu_clicked: function() {
      this.menu_disp = !this.menu_disp;
    }
  }
};
</script>
