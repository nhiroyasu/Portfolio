<template>
  <div class="component-root">
    <img
      class="icon img-block"
      :src="img"
      alt=""
      :width="size"
      :height="size"
    />
  </div>
</template>

<script>
export default {
  name: 'MacLikeIcon',
  props: {
    img: {
      type: String,
      default: '',
    },
    size: {
      type: Number,
      default: 32,
    },
  },
}
</script>

<style lang="scss" scoped>
.icon {
  border-radius: 20%;
  box-shadow: 0 5px 3px rgba(0, 0, 0, 0.3);
}
</style>
