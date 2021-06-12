<template>
  <div class="page-root">
    <div class="close-btn clickable move-to-top" @click="routeBack">
      <img src="@/assets/icons/commons/close.svg" alt="close-btn" />
    </div>
    <div class="content">
      <menu-item
        v-for="(data, index) in menuItemData"
        :key="index"
        class="menu-item"
        :data="data"
      />
    </div>
  </div>
</template>

<script>
import MenuItem from '@/components/ui/MenuItem'
import { menuItemData } from '~/scripts/static/menu-item-data'

export default {
  name: 'Menu',
  components: {
    MenuItem,
  },
  data() {
    return {
      menuItemData,
    }
  },
  methods: {
    routeBack() {
      this.$router.back()
    },
  },
}
</script>

<style lang="scss" scoped>
* {
  color: $font-light-color;
}
.page-root {
  background-color: $primary-color;
  height: 100vh;
  width: 100vw;
}

.close-btn {
  margin: $mg-for-item;
  padding: $pd-sm;
  position: absolute;
  img {
    height: $icon-default-size;
    width: $icon-default-size;
  }
}

.content {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  position: absolute;
  width: 100vw;
  z-index: 1;
}
</style>
