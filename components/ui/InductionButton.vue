<template>
  <div class="component-root clickable non-selectable" @click="onClick">
    <div class="content">
      <div class="img-wrapper">
        <img class="btn-icon img-block" :src="data.icon" alt="icon" />
      </div>
      <div class="title">
        {{ data.title }}
      </div>
      <div class="description">
        {{ data.description }}
      </div>
    </div>
  </div>
</template>

<script>
import InductionButton from '@/scripts/types/componentprops/InductionButton'

export default {
  name: 'InductionButton',
  components: {
  },
  props: {
    data: InductionButton,
  },
  methods: {
    onClick() {
      this.$router.push(this.data.pageLink)
    },
  },
}
</script>

<style lang="scss" scoped>
$title-height: 26px;
$description-height: 16px;
$img-size: 64px;

.content {
  display: grid;
  grid-template-columns: $img-size auto;
  // grid-template-rows: $title-height $description-height;
  gap: 4px $mg-for-item;
  padding: 8px;

  .img-wrapper {
    grid-row: 1 / 3;
    grid-column: 1 / 2;
    align-self: center;
    background-color: #fff;
    overflow: hidden;
    box-sizing: border-box;
    width: 68px;
    height: 68px;
    border-radius: 15px;
    display: grid;
    place-content: center center;


    img.btn-icon {
      width: 42px;
      height: 42px;
    }
  }

  .title {
    color: $font-light-color;
    text-shadow: $text-shadow;
    font-size: 1.5em;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    line-height: $title-height;
    align-self: flex-end;
  }

  .description {
    color: $font-light-color;
    text-shadow: $text-shadow;
    font-size: 0.8em;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    align-self: flex-start;
  }
}
</style>
