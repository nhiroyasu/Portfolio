<template>
  <div class="component-root clickable" @click="onClick">
    <div class="img-wrapper">
      <img class="btn-icon img-block" :src="data.icon" alt="icon" />
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
  methods: {
    onClick() {
      window.open(this.data.link, '_blank')
    },
  },
}
</script>

<style lang="scss" scoped>
.component-root {
  display: flex;
  align-items: center;
  padding: $mg-for-item;
}

.img-wrapper {
  border-radius: 8px;
  width: 64px;
  height: 64px;
  background-color: #fff;
  padding: 8px;
  margin-right: $mg-for-item;
}

img.btn-icon {
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

.name {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 1.1em;
}
</style>
