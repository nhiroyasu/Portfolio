<template>
  <div class="page-root">
    <app-menu title="ABOUT" />
    <div class="top-container">
      <img
        class="top-icon img-block non-selectable"
        src="@/assets/logos/cyan/logo.svg"
        alt="icon"
      />
      <div class="name-wrapper">
        <div class="headline">NAME - 名前</div>
        <div class="value">HIROYASU - ひろやす</div>
      </div>
      <div class="account-name-wrapper">
        <div class="headline">アカウントネーム</div>
        <div class="small-description">SNS上の名前</div>
        <div class="value">Cyan</div>
      </div>
    </div>
    <div class="content-container">
      <div class="career-content">
        <div class="headline">Career - 経歴</div>
        <div class="list-container">
          <career-list-item
            v-for="(data, index) in awardData"
            :key="index"
            :data="data"
          />
        </div>
      </div>
      <div class="award-content">
        <div class="headline">Award - 受賞歴</div>
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
  name: 'about',
  components: {
    AppMenu,
    CareerListItem,
    AwardListItem,
  },
  data: function () {
    return {
      awardData,
      careerData,
    }
  },
}
</script>

<style lang="scss" scoped></style>
