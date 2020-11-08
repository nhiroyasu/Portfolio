<template>
  <div class="framework-item-container">
    <div class="name-field">
      {{ framework.name }}
    </div>
    <div class="icon-field">
      <img :src="framework.icon" alt="icon">
    </div>
    <div class="level-field">
      {{ framework.level }}
    </div>
  </div>
</template>

<script>
import Framework from '~/scripts/types/Framework';

export default {
  props: {
    framework: {
      type: Framework,
      default: {},
    },
  },
};
</script>

<style lang="scss" scoped>
.framework-item-container {
  .name-field {
  }

  .icon-field {
    img {
      width: 128px;
    }
  }

  .level-field {
  }
}
</style>
