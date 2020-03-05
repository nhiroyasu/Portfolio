<template>
  <div class="portfoio-box">
    <div class="portfolio-component">
      <swiper class="portfolio-component__swiper" :options="swiperOption">
        <cyan-swiper
          class="blog-slider__item swiper-slide"
          v-for="(value, index) in portfolio_list"
          :key="index"
          :slider_info="value"
        />
        <div class="swiper-pagination portfolio-component__pagination m-1" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import CyanSwiper from "~/components/cyan_swiper.vue";

import firestore from "~/plugins/fb_firestore.js";

export default {
  components: {
    CyanSwiper
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: { // 付けないとLoopしない？
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        loop: true,
        freeMode: true, // 付けないとLoopしない？
        speed: 500,
        autoplay: {
          delay: 5000,
          disableOnInteraction: true
        }
      }
    };
  },
  created() {
    // firestore.load_ptf_datas(this.$store);
  },
  computed: {
    portfolio_list(event) {
      console.log(
        "swiper component",
        this.$store.state.portfolio.portfolios_data
      );
      return this.$store.state.portfolio.portfolios_data;
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800");
@import url("https://fonts.googleapis.com/css?family=Ibarra+Real+Nova&display=swap");

.portfoio-box {
  background: linear-gradient(135deg, rgb(52, 165, 231), rgb(2, 227, 214));
  border-radius: 15px;
  padding: 2px;
}

.portfolio-component {
  &__swiper {
    background: #fff;
    box-shadow: 0px 14px 80px rgba(34, 46, 58, 0.2);
    border-radius: 13px;
  }

  &__pagination {
    /deep/ .swiper-pagination-bullet {
      width: 11px;
      height: 11px;
      display: inline-block;
      border-radius: 10px;
      background: #062744;
      opacity: 0.2;
      transition: all 0.3s;
      &-active {
        opacity: 1;
        background: rgb(2, 226, 227);
        width: 30px;
        box-shadow: 0px 0px 20px rgba(2, 226, 227, 0.3);

        @media screen and (max-width: 768px) {
          height: 11px;
          width: 30px;
        }
      }
    }
  }
}
</style>
