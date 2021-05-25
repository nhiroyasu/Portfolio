<template>
  <div class="page-root">
    {{ appId }}
  </div>
</template>

<script>
export default {
  name: 'present_app',
  async asyncData({ route }) {
    return {
      appId: route.params.id,
    }
  },
}
</script>

<style lang="scss" scoped></style>
