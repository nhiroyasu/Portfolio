<template>
  <div class="component-root">
    <div class="icon">
      <img :src="data.icon" alt="icon" />
    </div>
    <div class="name">
      {{ data.name }}
    </div>
  </div>
</template>

<script>
import SnsButton from '@/scripts/types/componentprops/SnsButton'

export default {
  name: 'SnsButton',
  props: {
    data: SnsButton,
  },
}
</script>

<style lang="scss" scoped></style>
