<template>
  <div class="career-item-container">
    <div class="date-wrapper">
      {{ value.date }}
    </div>
    <div class="split-line"></div>
    <div class="contents-wrapper d-flex flex-column align-items-start">
      <div class="title-field">
        <a :href="value.official_site || '#'" target="blank">
          <b-icon-box-arrow-up-right
            class="mr-1"
            style="color: var(--my-dark-blue)"
          ></b-icon-box-arrow-up-right>
          {{ value.title }}
        </a>
      </div>
      <div v-if="value.result" class="result-field">
        <b-icon-trophy class="mr-1" style="color: var(--my-dark-blue)"></b-icon-trophy>
        {{ value.result }}
      </div>
    </div>
  </div>
</template>

<script>
import { BIconTrophy, BIconBoxArrowUpRight } from 'bootstrap-vue'

export default {
  components: {
    BIconTrophy,
    BIconBoxArrowUpRight,
  },
  props: {
    value: {
      type: Object,
      default: {
        date: 'NULL',
        title: 'NULL',
      },
    },
  },
}
</script>

<style lang="scss" scoped>
$tab: 768px; // タブレット（Bootstrap - md）
$sp: 544px; // スマホ（Bootstrap - sm）

@mixin tab {
  @media (max-width: ($tab)) {
    @content;
  }
}
@mixin sp {
  @media (max-width: ($sp)) {
    @content;
  }
}

$accent-color: var(--my-dark-blue);

.career-item-container {
  color: var(--my-black);
  display: flex;
  font-size: 1.1rem;
  padding: 8px 16px;
  margin: 4px 0px;

  @include tab {
    border-left: 3px solid $accent-color;
    flex-direction: column;
    padding: 0px 12px;
    margin: 16px 0px;
  }

  @include tab {
    font-size: 1rem;
  }

  .date-wrapper {
    font-family: 'Muli', sans-serif;
    font-size: 1em;
    letter-spacing: 0.12rem;
    padding-right: 20px;
    min-width: 300px;

    @include tab {
      font-size: 0.8em;
      letter-spacing: 0.08rem;
      margin-bottom: 2px;
    }
  }

  .split-line {
    background-color: $accent-color;
    margin-right: 24px;
    width: 3px;

    @include tab {
      display: none;
    }
  }

  .contents-wrapper {
    & > * {
      margin: 2px 0px;
    }

    .title-field {
      a:link,
      a:visited,
      a:hover,
      a:active {
        color: $accent-color;
      }
    }

    .result-field {
      opacity: 0.8;
      font-family: 'Noto Sans JP', sans-serif;
    }
  }
}
</style>
