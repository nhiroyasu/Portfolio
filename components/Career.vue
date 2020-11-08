<template>
  <div class="career-container"></div>
</template>

<script>
export default {
  data() {
    return {
      datas: [
        {
          date: '2019-09-06',
          title: 'HACK U 2019 SENDAI',
          official_site: 'https://hacku.yahoo.co.jp/hacku2019sendai/',
          product_link: 'https://github.com/cyan-0fbcf9/HackU'
        },
        {
          date: '2019-10-26 2019-10-27',
          title: 'JPHacks Hack Day',
          official_site: 'https://jphacks.com/2019/hackdays/',
          product_link: 'https://github.com/jphacks/SD_1903',
        },
        {
          date: '2019-11-09',
          title: 'JPHacks Award Day',
          offical_site: 'https://jphacks.com/information/result-report2019/',
          product_link: 'https://github.com/jphacks/SD_1903',
          result: 'イノベーター認定, ビズリーチ賞, リクルート賞'
        },
        {
          date: '2019-12-07 ~ 2019-12-08',
          title: 'KDDI 学生向けハッカソン 2019 WINTER　"IoTでワクワクする空間をデザインしよう',
          official_site: 'https://www.kdghacks.com/',
          product_link: 'https://github.com/cyan-0fbcf9/KDGHacks-MyCode',
          result: '最優秀賞',
        },

        {
          date: '2020-05-02 ~ 2020-05-04',
          title: 'TwoGate Dev Camp',
          official_site: 'https://devcamp2020.twogate.com/',
          product_link: 'https://github.com/cyan-0fbcf9/DAILY-GAME',
        },
        {
          date: '2020-09-30',
          title: 'Civictech Challenge Cup',
          official_site: 'https://ccc2020.code4japan.org/',
          product_link: 'https://github.com/CCC-Shirouto'
        },
        {
          date: '2020-10-17 ~ 2020-10-18',
          title: 'KDG HACKS 2020 AUTUMN',
          official_site: 'https://www.kdghacks.com/',
          result: '優秀賞',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.career-container {
  background: white;
}
</style>
