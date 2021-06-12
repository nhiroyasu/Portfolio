<template>
  <div class="page-root">
    <app-menu title="ABOUT" />
    <div class="top-container">
      <img
        class="top-icon img-block non-selectable"
        src="@/assets/logos/cyan/logo.svg"
        alt="icon"
      />
      <div class="name-container">
        <div class="wrapper name-wrapper">
          <div class="headline">NAME - 名前</div>
          <div class="value">HIROYASU - ひろやす</div>
        </div>
        <div class="wrapper account-name-wrapper">
          <div class="headline">アカウントネーム</div>
          <div class="small-description">SNS上の名前</div>
          <div class="value">Cyan</div>
        </div>
      </div>
    </div>
    <div class="content-container">
      <div class="career-content">
        <div class="headline reverse-layout">
          <img
            class="effect img-block"
            src="@/assets/commons/back effect reverse.svg"
            alt="effect"
          />
          <div class="headline-title">Career - 経歴</div>
        </div>
        <div class="list-container">
          <career-list-item
            v-for="(data, index) in careerData"
            :key="index"
            :data="data"
          />
        </div>
      </div>
      <div class="award-content">
        <div class="headline">
          <img
            class="effect img-block"
            src="@/assets/commons/back effect.svg"
            alt="effect"
          />
          <div class="headline-title">Award - 受賞歴</div>
        </div>
        <div class="list-container">
          <award-list-item
            v-for="(data, index) in awardData"
            :key="index"
            :data="data"
          />
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

export default {
  name: 'About',
  components: {
    AppMenu,
    CareerListItem,
    AwardListItem,
  },
  data() {
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

.top-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: $pd-lg 0;
  margin-bottom: $mg-for-content;

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
        color: $font-gray-color;
        font-size: 0.9em;
      }

      .small-description {
        color: $font-gray-color;
        font-size: 0.7em;
      }

      .value {
        font-size: 1.2em;
      }
    }
  }
}

.content-container {
  background-color: $gray-color;
  overflow: hidden;

  & > * {
    margin-top: $content-top-mg;
  }

  .list-container {
    margin: 0 $mg-for-item;

    & > * {
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
