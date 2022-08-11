<template>
  <div class="page-root">
    <Background />
    <div class="contents-wrapper">
      <AppMenu />
      <div class="responsive-box">
        <div class="top-container">
          <img class="top-icon img-block non-selectable" src="@/assets/logos/cyan/logo white border.svg" alt="icon" />
          <div class="name-container">
            <div class="wrapper name-wrapper">
              <div class="headline">NAME - 名前</div>
              <div class="value">HIROYASU - ひろやす</div>
            </div>
          </div>
        </div>
        <div class="content-container">
          <div class="career-content">
            <div class="headline">
              <div class="headline-title">Career - 経歴</div>
            </div>
            <div class="list-container">
              <career-list-item v-for="(data, index) in careerData" :key="index" :data="data" />
            </div>
          </div>
          <div class="award-content">
            <div class="headline">
              <div class="headline-title">Award - 受賞歴</div>
            </div>
            <div class="list-container">
              <award-list-item v-for="(data, index) in awardData" :key="index" :data="data" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppMenu from '@/components/layouts/Menu'
import CareerListItem from '@/components/ui/CareerListItem'
import AwardListItem from '@/components/ui/AwardListItem'
import { awardData } from '@/scripts/static/award-data'
import { careerData } from '@/scripts/static/career-data'
import Background from '@/components/ui/Background.vue'

export default {
  name: 'about',
  components: {
    AppMenu,
    CareerListItem,
    AwardListItem,
    Background
  },
  data: function () {
    return {
      awardData,
      careerData,
    }
  },
}
</script>

<style lang="scss" scoped>
$top-icon-size: 220px;
$content-top-mg: 24px;

.contents-wrapper {
  background: $background-overwrap-color;
  box-sizing: border-box;
  overflow: hidden;
}

.top-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: $pd-lg 0;
  margin-bottom: $mg-for-content;
  margin-top: 64px;

  img.top-icon {
    filter: drop-shadow(10px 10px 3px rgba(0, 0, 0, 0.2));
    height: $top-icon-size;
    width: $top-icon-size;
  }

  .name-container {
    display: flex;
    flex-direction: column;
    justify-content: stretch;

    .wrapper {
      margin: $mg-for-child 0;

      .headline {
        color: $font-light-color;
        font-size: 0.9em;
      }

      .small-description {
        color: $font-light-color;
        font-size: 0.7em;
      }

      .value {
        font-size: 1.2em;
      }
    }
  }
}

.content-container {
  overflow: hidden;

  &>* {
    margin-top: $content-top-mg;
  }

  .list-container {
    margin: 0 $mg-for-item;

    &>* {
      margin: $mg-for-item 0;
    }
  }

  .headline {
    align-items: center;
    display: flex;
    margin: 0 $mg-for-item;

    &.reverse-layout {
      flex-direction: row-reverse;
    }

    .headline-title {
      font-size: 2em;
    }

    img.effect {
      filter: drop-shadow(-6px 6px 3px rgba(0, 0, 0, 0.2));
      height: 100px;
    }
  }
}
</style>
