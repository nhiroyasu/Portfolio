<template>
  <div class="component-root">
    <div class="content">
      <div class="btn-icon">
        <img :src="data.icon" alt="icon" />
      </div>
      <div class="title">
        {{ data.title }}
      </div>
    </div>
  </div>
</template>

<script>
import IconTextButton from '@/scripts/types/componentprops/IconTextButton'

export default {
  name: 'IconTextButton',
  props: {
    data: IconTextButton,
  },
}
</script>

<style lang="scss" scoped></style>
