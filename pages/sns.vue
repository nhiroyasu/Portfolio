<template>
  <div class="page-root">
    <Background />
    <app-menu title="SNS" />
    <div class="content">
      <div class="responsive-box">
        <div class="sns-btn-wrapper">
          <sns-button v-for="(data, index) in snsData" :key="index" :data="data" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppMenu from '@/components/layouts/Menu'
import SnsButton from '@/components/ui/SnsButton'
import { snsData } from '@/scripts/static/sns-data'
import Background from '~/components/ui/Background.vue'

export default {
  name: 'sns',
  components: {
    SnsButton,
    AppMenu,
    Background
  },
  data: function () {
    return {
      snsData,
    }
  },
}
</script>

<style lang="scss" scoped>
.content {
  background: $background-overwrap-color;
  box-sizing: border-box;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  padding: $menu-height 32px 0px 32px;
}

.sns-btn-wrapper {
  display: grid;
  grid-template-columns: 1fr;
}
</style>
