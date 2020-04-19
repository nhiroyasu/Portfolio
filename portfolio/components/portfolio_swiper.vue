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
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import CyanSwiper from "~/components/swiper_body.vue";

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
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        loop: true
        // speed: 500
        // autoplay: {
        //   delay: 5000,
        //   disableOnInteraction: true
        // }
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

$tab: 680px; // タブレット
$sp: 480px; // スマホ

@mixin tab {
  @media (max-width: ($tab)) {
    @content;
  }
}
@mixin sp {
  @media (max-width: ($sp)) {
    @content;
  }
}

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

    /deep/ .swiper-button-prev {
      background: url("~assets/arrow-left.svg") no-repeat center center /
        contain;
    }
    /deep/ .swiper-button-next {
      background: url("~assets/arrow-right.svg") no-repeat center center /
        contain;
    }

    @include tab {
      /deep/ .swiper-button-prev {
        background: url("~assets/arrow-left.svg") no-repeat center center /
          contain;
        display: none;
      }
      /deep/ .swiper-button-next {
        background: url("~assets/arrow-right.svg") no-repeat center center /
          contain;
        display: none;
      }
    }

    @include sp {
      /deep/ .swiper-button-prev {
        background: url("~assets/arrow-left.svg") no-repeat center center /
          contain;
        display: none;
      }
      /deep/ .swiper-button-next {
        background: url("~assets/arrow-right.svg") no-repeat center center /
          contain;
        display: none;
      }
    }
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
