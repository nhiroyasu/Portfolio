<template>
  <div class="frame-root">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ButtonFrame',
}
</script>

<style lang="scss" scoped>
.frame-root {
  border-radius: 8px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
}
</style>
