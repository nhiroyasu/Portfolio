<template>
  <div class="component-root">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComponentFrame',
}
</script>

<style lang="scss" scoped>
.component-root {
  background-image: linear-gradient(
    121deg,
    rgba(37, 60, 128, 1) 0%,
    rgba(66, 106, 224, 1) 57%,
    rgba(15, 188, 249, 1) 100%
  );
  border-radius: $default-border-radius;
  margin: 16px 16px;
  min-width: 100%;

  .content {
    background-color: #ffffff;
    border-radius: $default-border-radius - 2px;
    margin: 3px;
    height: 100%;
    width: 100%;
  }
}
</style>
