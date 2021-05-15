<template>
  <div class="page-root">
    <div class="close-btn clickable move-to-top">
      <img src="@/assets/icons/commons/close.svg" alt="close-btn" />
    </div>
    <div class="content">
      <menu-item
        class="menu-item"
        v-for="(data, index) in menuItemData"
        :key="index"
        :data="data"
      />
    </div>
  </div>
</template>

<script>
import MenuItem from '@/components/ui/MenuItem'
import { menuItemData } from '~/scripts/static/menu-item-data'

export default {
  name: 'menu',
  components: {
    MenuItem,
  },
  data: function () {
    return {
      menuItemData,
    }
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
