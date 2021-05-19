<template>
  <div class="component-root">
    <div class="content">
      <div :class="{ reverse: reverseLayout }" class="bar"></div>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VBarStyleListItemFrame',
  props: {
    // reverseLayout ? bar placed on right : bar placed on left;
    reverseLayout: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.reverse {
}
</style>
