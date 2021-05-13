<template>
  <div class="component-root">
    <component-frame>
      <div class="content">
        <div class="btn-icon">
          <img :src="data.icon" alt="icon" />
        </div>
        <div class="date">
          {{ data.date }}
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
import ProductButton from '@/scripts/types/componentprops/ProductButton'

export default {
  name: 'ProductButton',
  components: {
    ComponentFrame,
  },
  props: {
    data: ProductButton,
  },
}
</script>

<style lang="scss" scoped></style>
