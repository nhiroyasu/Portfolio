<template>
  <div class="component-root clickable non-selectable" @click="onClick">
    <component-frame>
      <div class="content">
        <img class="btn-icon img-block" :src="data.icon" alt="icon" />
        <div class="title">
          {{ data.title }}
        </div>
        <div class="description">
          {{ data.description }}
        </div>
      </div>
    </component-frame>
  </div>
</template>

<script>
import ComponentFrame from '@/components/commons/ComponentFrame'
import InductionButton from '@/scripts/types/componentprops/InductionButton'

export default {
  name: 'InductionButton',
  components: {
    ComponentFrame,
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
$img-size: $title-height + $description-height;

.content {
  display: grid;
  grid-template-columns: $img-size auto;
  grid-template-rows: $title-height $description-height;
  padding: 8px;

  img.btn-icon {
    grid-row: 1 / 3;
    grid-column: 1 / 2;
    margin: 2px;
  }

  .title,
  .description {
    margin-left: $mg-for-item;
  }

  .title {
    color: $font-dark-color;
    font-size: 1.5em;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    line-height: $title-height;
  }

  .description {
    color: $font-gray-color;
    font-size: 0.8em;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
}
</style>
