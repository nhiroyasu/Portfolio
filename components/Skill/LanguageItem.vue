<template>
  <div class="language-item-container">
    <div class="name-field">
      {{ lang.name }}
    </div>
    <div class="icon-field">
      <img :src="lang.icon" alt="icon" />
    </div>
    <div class="level-field">
      <small>Level</small>
      <b-icon-star-fill v-for="(value, index) in lang.level" :key="index"></b-icon-star-fill>
    </div>
  </div>
</template>

<script>
import ProgramingLanguage from '~/scripts/types/ProgramLanguage'
import { BIconStarFill } from 'bootstrap-vue'

export default {
  components: {
    BIconStarFill,
  },
  props: {
    lang: {
      type: ProgramingLanguage,
      default: {},
    },
  },
}
</script>

<style lang="scss" scoped>
.language-item-container {
  align-items: center;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  margin: 12px 10px;
  padding: 12px;

  .name-field {
    font-size: 1.5em;
    text-align: center;
  }

  .icon-field {
    background-color: white;
    border-radius: 12px;
    padding: 15px;
    img {
      width: 64px;
    }
  }

  .level-field {
    small {
      padding-right: 8px;
    }
    color: var(--my-dark-blue);
  }
}
</style>
