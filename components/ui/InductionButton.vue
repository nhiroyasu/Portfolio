<template>
  <div class="component-root">
    <component-frame>
      <div class="content">
        <div class="btn-icon">
          <img :src="data.icon" alt="icon" />
        </div>
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
}
</script>

<style lang="scss" scoped></style>
