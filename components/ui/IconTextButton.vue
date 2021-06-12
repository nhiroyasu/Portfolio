<template>
  <div class="component-root btn-frame clickable" @click="onClick">
    <img class="img-block" :src="icon" alt="icon" />
    <div class="title">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'IconTextButton',
  props: {
    title: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
  },
  methods: {
    onClick() {
      window.open(this.link, '_blank')
    },
  },
}
</script>

<style lang="scss" scoped>
.component-root {
  align-items: center;
  background: linear-gradient(
      121deg,
      rgba(37, 60, 128, 0.95) 0%,
      rgba(66, 106, 224, 0.95) 57%,
      rgba(15, 188, 249, 0.95) 100%
    ),
    url('@/assets/logos/cyan/logo.svg') center center/80% no-repeat;
  display: flex;
  justify-content: center;
  height: $btn-sm-height;
  width: $btn-sm-width;

  img {
    height: 100%;
    padding: $pd-lg;
  }

  .title {
    color: $font-light-color;
    font-family: 'Noto Sans JP', sans-serif;
  }
}
</style>
