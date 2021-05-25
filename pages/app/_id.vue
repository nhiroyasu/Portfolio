<template>
  <div class="page-root">
    <app-menu title="" />
    <div class="content">
      <div class="date">
        {{ data.dateString }}
      </div>
      <div class="title">
        {{ data.title }}
      </div>
      <div class="icon-wrapper">
        <mac-like-icon :img="data.imgLink" size="220" />
      </div>
      <div class="detail">
        {{ data.detail }}
      </div>
      <div class="btn-wrapper">
        <google-play-button
          v-if="data.googlePlayLink !== null"
          :google-play-link="data.googlePlayLink"
        />
        <github-button
          v-if="data.githubLink !== null"
          :github-link="data.githubLink"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppMenu from '@/components/layouts/Menu'
import MacLikeIcon from '@/components/ui/MacLikeIcon'
import IconTextButton from '@/components/ui/IconTextButton'
import GithubButton from '@/components/ui/GithubButton'
import GooglePlayButton from '@/components/ui/GooglePlayButton'

export default {
  name: 'present_app',
  components: {
    AppMenu,
    MacLikeIcon,
    IconTextButton,
    GithubButton,
    GooglePlayButton,
  },
  computed: {
    data() {
      return this.$store.getters['portfolio/findOne'](this.$route.params.id)
    },
  },
}
</script>

<style lang="scss" scoped>
.content {
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0 36px;
  overflow: hidden;

  & > *:first-child {
    margin-top: $mg-for-content;
  }
}

.date {
  align-self: start;
  font-size: 0.8em;
}

.title {
  font-size: 1.3em;
  margin: $mg-for-item 0;
}

.detail {
  margin: $mg-for-content 0;
}

.btn-wrapper {
  align-self: stretch;
  display: inline-flex;
  flex-direction: column;

  & > * {
    margin: $mg-for-item 0;
  }
}
</style>
