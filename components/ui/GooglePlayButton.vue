<template>
  <div class="component-root clickable" @click="onClick">
    <img
      src="@/assets/images/google-play-badge.png"
      alt="play"
      class="img-block"
    />
  </div>
</template>

<script>
export default {
  name: 'GooglePlayButton',
  props: {
    googlePlayLink: {
      type: String,
      default: '',
    },
  },
  methods: {
    onClick() {
      window.open(this.googlePlayLink, '_blank')
    },
  },
}
</script>

<style lang="scss" scoped>
$badge-height: 80px;

.component-root {
  display: grid;
  place-items: center center;
  margin: 0;

  img {
    height: $badge-height;
  }
}
</style>
