<template>
  <div class="page-root">
    <app-menu title="APPLICATION" />
    <div class="product-list">
      <product-button
        v-for="data in $store.getters['portfolio/data']"
        :key="data.id"
        :data="data"
      />
    </div>
  </div>
</template>

<script>
import AppMenu from '@/components/layouts/Menu'
import ProductButton from '@/components/ui/ProductButton'

export default {
  name: 'Apps',
  components: {
    AppMenu,
    ProductButton,
  },
  async fetch() {
    await this.$store.dispatch('portfolio/loadData')
  },
}
</script>

<style lang="scss" scoped>
.product-list {
  & > * {
    margin: $mg-for-item;
  }
}
</style>
