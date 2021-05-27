<template>
  <div class="component-root clickable" @click="onClick">
    <img class="btn-icon img-block" :src="data.icon" alt="icon" />
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
  padding: $mg-for-content 36px 0 36px;
}

img.btn-icon {
  border-radius: 50%;
  width: 100%;
}

.name {
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 1.2em;
  margin: $mg-for-item;
  text-align: center;
}
</style>
