<template>
  <div class="container-fluid main-container">
    <div class="row justify-content-around main-container__contents">
      <div
        class="col-10 col-lg-8 main-container__contents__swiper"
        v-for="(value, index) in portfolio_list"
        :key="index"
      >
        <cyan-swiper class="blog-slider__item swiper-slide" :slider_info="value" />
      </div>
    </div>
  </div>
</template>

<script>
import firestore from '~/plugins/fb_firestore.js';
import CyanSwiper from '~/components/PortfolioSwiperBody.vue';

export default {
  components: {
    CyanSwiper,
  },
  created() {
    if (this.$store.state.portfolio.portfolios_data.length <= 0) {
      firestore.load_ptf_datas(this.$store);
    }
  },
  computed: {
    portfolio_list() {
      return this.$store.state.portfolio.portfolios_data;
    },
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  position: relative;
  background-color: var(--my-active-color);

  &__contents {
    min-width: 100%;
    padding: 30px 0px;

    &__swiper {
      background: #fff;
      margin: 30px 0px;
      padding: 0px;
      box-shadow: 5px 5px 0px rgba(34, 46, 58, 0.5);
      border-radius: 15px;
      transition: all ease-out 0.3s;
      transform: rotateX(0deg) rotateY(0deg);
      &:hover {
        box-shadow: 5px 5px 0px rgba(34, 46, 58, 0.5);
        transform: rotateX(0deg) rotateY(0deg);
      }
    }
  }
}
</style>
