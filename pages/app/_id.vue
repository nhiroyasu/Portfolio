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
        <mac-like-icon :img="data.imgLink" :size="220" />
      </div>
      <div class="detail">
        {{ data.detail }}
      </div>
      <div class="btn-wrapper">
        <google-play-button
          v-if="data.googlePlayLink !== null"
          :google-play-link="data.googlePlayLink"
          class="google-play-btn"
        />
        <github-button
          v-if="data.githubLink !== null"
          :github-link="data.githubLink"
        />
        <icon-text-button
          title="ダウンロード"
          :icon="require('@/assets/icons/commons/download.svg')"
          link=""
        />
        <icon-text-button
          v-if="data.webAppLink !== null"
          title="アプリケーションサイト"
          :icon="require('@/assets/icons/commons/open_in_new.svg')"
          :link="data.webAppLink"
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
import { fetchPortfolio } from '@/services/fb_firestore'

export default {
  name: 'PresentApp',
  components: {
    AppMenu,
    MacLikeIcon,
    IconTextButton,
    GithubButton,
    GooglePlayButton,
  },
  async asyncData({ store, route }) {
    let foundData = store.getters['portfolio/findOne'](route.params.id)
    if (foundData == null) {
      foundData = await fetchPortfolio(route.params.id)
    }
    return {
      data: foundData,
    }
  },
}
</script>

<style lang="scss" scoped>
.component-root {
  & > *:last-child {
    margin-bottom: $mg-for-content;
  }
}

.content {
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0 48px;
  overflow: hidden;

  & > *:first-child {
    margin-top: $mg-for-content;
  }
}

.date {
  align-self: end;
  font-size: 0.8em;
}

.title {
  font-size: 1.5em;
  margin: $mg-for-item 0;
}

.detail {
  margin: $mg-for-content 0;
}

.btn-wrapper {
  display: inline-flex;
  flex-direction: column;

  & > * {
    margin: $mg-for-item 0;
  }

  & > .google-play-btn {
    margin: 0;
  }
}
</style>
