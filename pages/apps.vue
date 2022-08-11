<template>
  <div class="page-root">
    <Background />
    <div class="contents-wrapper">
      <app-menu title="APPLICATION" />
      <div class="contents-wrapper">
        <div class="product-list responsive-box">
          <product-button v-for="data in $store.getters['portfolio/data']" :key="data.id" :data="data" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppMenu from '@/components/layouts/Menu'
import ProductButton from '@/components/ui/ProductButton'
import Background from '~/components/ui/Background.vue'

export default {
  name: 'apps',
  components: {
    AppMenu,
    ProductButton,
    Background
  },
  async fetch() {
    await this.$store.dispatch('portfolio/loadData')
  },
}
</script>

<style lang="scss" scoped>
.contents-wrapper {
  background: $background-overwrap-color;
  box-sizing: border-box;
  overflow: hidden;
}

.product-list {
  &>*:first-child {
    margin-top: $mg-for-item + $menu-height;
  }

  &>* {
    margin: $mg-for-item;
  }
}
</style>
