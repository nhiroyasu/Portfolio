<template>
  <div class="component-root">
    <div class="icon">
      <img :src="img" alt="icon" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'MacLikeIcon',
  props: {
    img: String,
  },
}
</script>

<style lang="scss" scoped></style>
