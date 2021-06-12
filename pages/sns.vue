<template>
  <div class="page-root">
    <app-menu title="SNS" />
    <div class="content">
      <div class="sns-btn-wrapper">
        <sns-button
          v-for="(data, index) in snsData"
          :key="index"
          :data="data"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppMenu from '@/components/layouts/Menu'
import SnsButton from '@/components/ui/SnsButton'
import { snsData } from '@/scripts/static/sns-data'

export default {
  name: 'Sns',
  components: {
    SnsButton,
    AppMenu,
  },
  data() {
    return {
      snsData,
    }
  },
}
</script>

<style lang="scss" scoped>
.sns-btn-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
</style>
