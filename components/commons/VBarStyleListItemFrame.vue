<template>
  <div class="frame-root">
    <div class="content" :class="{ reverse: reverseLayout }">
      <div class="bar"></div>
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
.content {
  display: flex;

  &.reverse > * {
    text-align: right;
  }
}

.reverse {
  flex-direction: row-reverse;
}

.bar {
  background-color: $font-light-color;
  width: 3px;
}
</style>
