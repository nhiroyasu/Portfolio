<template>
  <div class="language-item-container">
    <div class="name-field">
      {{ lang.name }}
    </div>
    <div class="icon-field">
      <img :src="lang.icon" alt="icon" width="128">
    </div>
    <div class="level-field">
      {{ lang.level }}
    </div>
  </div>
</template>

<script>
import ProgramingLanguage from '~/scripts/types/ProgramLanguage';

export default {
  props: {
    lang: {
      type: ProgramingLanguage,
      default: {}
    },
  },
}
</script>

<style lang="scss" scoped>
.language-item-container {
  .name-field {

  }

  .icon-field {
    img {
      
    }
  }

  .level-field {

  }
}
</style>