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
    githubLink: {
      type: String,
      default: '',
    },
  },
  methods: {
    onClick() {
      window.open(this.githubLink, '_blank')
    },
  },
}
</script>

<style lang="scss" scoped>
.component-root {
  align-items: center;
  background-color: $github-theme;
  display: flex;
  justify-content: center;
  height: $btn-sm-height;
  width: $btn-sm-width;

  img.img-block {
    height: 100%;
    padding: $pd-lg;
  }

  .btn-title {
    color: $font-light-color;
    font-family: 'Noto Sans JP', sans-serif;
    letter-spacing: 1px;
    margin: 0 $mg-for-child;
  }
}
</style>
