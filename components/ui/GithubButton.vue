<template>
  <div class="component-root btn-frame clickable" @click="onClick">
    <img
      class="img-block"
      src="@/assets/logos/github/github-logo.png"
      alt="github"
    />
    <span class="btn-title"> Github </span>
  </div>
</template>

<script>
export default {
  name: 'GithubButton',
  props: {
    githubLink: String,
  },
  methods: {
    onClick() {
      window.open(this.githubLink, '_blank')
    },
  },
}
</script>

<style lang="scss" scoped>
$width: 180px;
$height: 60px;

.component-root {
  align-items: center;
  background-color: $github-theme;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  height: $height;

  img.img-block {
    height: 100%;
    padding: $pd-lg;
  }

  .btn-title {
    color: $font-light-color;
    font-family: 'Noto Sans JP', sans-serif;
    font-size: 1.1em;
    letter-spacing: 1px;
    margin: 0 $mg-for-child;
  }
}
</style>
