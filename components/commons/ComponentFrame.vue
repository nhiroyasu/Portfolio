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
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
  overflow: hidden;

  .content {
    background-color: #ffffff;
    border-radius: $default-border-radius - 2px;
    margin: 3px;
  }
}
</style>
