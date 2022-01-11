<template>
  <div class="framework-item-container">
    <div class="name-field">
      {{ framework.name }}
    </div>
    <div class="icon-field">
      <img :src="framework.icon" alt="icon" />
    </div>
    <div class="level-field">
      <small>{{ convertLevel(framework.level) }}</small>
    </div>
  </div>
</template>

<script>
import Framework from '~/scripts/types/Framework';
import { BIconStarFill } from 'bootstrap-vue';

export default {
  components: {
    BIconStarFill,
  },
  props: {
    framework: {
      type: Framework,
      default: {},
    },
  },
  methods: {
    convertLevel(level) {
      switch (level) {
        case 1:
          return 'ほぼ覚えてない';
        case 2:
          return 'しばらく使ってない';
        case 3:
          return 'たまに使う';
        case 4:
          return '結構使う';
        case 5:
          return '大好き！';
      }
      return "?"
    },
  },
};
</script>

<style lang="scss" scoped>
.framework-item-container {
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
