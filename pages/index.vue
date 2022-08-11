<template>
  <div class="page-root">
    <Background />
    <img class="menu-icon img-block clickable move-to-top" src="@/assets/icons/commons/menu.svg" alt="menu-icon"
      @click="onMenuClicked" />
    <div class="contents-wrapper">
      <div class="responsive-box">
        <div class="top-container">
          <div class="central-wrapper">
            <img class="cyan-logo img-block" src="@/assets/logos/cyan/logo white border.svg" alt="cyan-logo"
              draggable="false" />
            <!-- <div class="app-icons-wrapper">
            <mac-like-icon v-for="(data, index) in recentPortfolio" :key="index" :img="data.imgLink" :size="48" />
          </div> -->
            <div class="summary non-selectable">
              <div class="title">
                HIROYASU<br />
                PortfolioSite
              </div>
              <div class="sub-title">
                Application Engineer
              </div>
            </div>
          </div>
        </div>
        <div class="induction-links-container">
          <induction-button v-for="(data, index) in inductionLinkData" :key="index" :data="data" />
        </div>
        <div class="end-container">
          <div class="powered-by">Powered by Nuxt.js</div>
          <div class="copyright">&copy;Hiroyasu Niitsuma</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InductionButton from '@/components/ui/InductionButton'
import MacLikeIcon from '@/components/ui/MacLikeIcon'
import { inductionLinkData } from '@/scripts/static/induction-link-data'
import Background from '@/components/ui/Background.vue'

export default {
  components: {
    InductionButton,
    MacLikeIcon,
    Background,
  },
  data: function () {
    return {
      inductionLinkData,
    }
  },
  async fetch({ store }) {
    await store.dispatch('portfolio/loadData')
  },
  fetchOnServer: false,
  computed: {
    recentPortfolio() {
      return this.$store.getters['portfolio/data'].slice(0, 3)
    },
  },
  methods: {
    onMenuClicked() {
      this.$router.push('/menu')
    },
  },
}
</script>

<style lang="scss" scoped>
.menu-icon {
  height: $menu-icon-size;
  padding: $menu-icon-pad;
  position: fixed;
  width: $menu-icon-size;
}

.contents-wrapper {
  background: $background-overwrap-color;
  box-sizing: border-box;
  overflow: hidden;
}

.top-container {
  color: $font-light-color;
  display: grid;
  grid-template-areas:
    '.'
    'summary'
    '.';
  grid-template-rows: 1fr 1fr 1fr;
  height: 100vh;
  place-items: center stretch;
  width: 100%;

  .central-wrapper {
    align-self: center;
    display: flex;
    flex-direction: column;
    grid-area: summary;
    justify-self: center;

    img.cyan-logo {
      height: 256px;
      width: 256px;
    }

    .app-icons-wrapper {
      display: flex;
      justify-content: center;

      &>* {
        margin: 0 $mg-for-child;
      }
    }

    .summary {
      margin: $mg-for-item;
      text-align: center;

      .title {
        font-size: 1.5em;
        margin-bottom: $mg-for-child;
        letter-spacing: 0.05em;
        text-shadow: $text-shadow;
      }

      .sub-title {
        font-size: 0.9em;
        text-shadow: $text-shadow;
      }
    }
  }


}

.induction-links-container {
  background-color: transparent;

  &>* {
    margin: $mg-for-item + 6px $mg-for-item;
  }

  &>*:first-child {
    margin-top: $mg-for-item * 2;
  }

  &>*:last-child {
    margin-bottom: $mg-for-item * 2;
  }
}

.end-container {
  color: $font-light-color;
  font-size: 0.9em;
  margin-bottom: $mg-for-item;
  text-align: center;
  text-shadow: $text-shadow;

  .powered-by {
    font-family: 'Noto Sans JP', sans-serif;
  }

  .copyright {}
}
</style>
