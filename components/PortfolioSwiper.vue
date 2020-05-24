<template>
  <div class="portfolio-box">
    <div class="portfolio-component">
      <swiper class="portfolio-component__swiper" :options="swiperOption">
        <cyan-swiper
          class="blog-slider__item swiper-slide"
          v-for="(value, index) in portfolio_list"
          :key="index"
          :slider_info="value"
        />
        <div class="swiper-pagination portfolio-component__pagination" slot="pagination"></div>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div> -->
      </swiper>
    </div>
  </div>
</template>

<script>
import CyanSwiper from "~/components/PortfolioSwiperBody.vue";

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
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev"
        // },
        loop: true,
        speed: 600,
        autoplay: {
          delay: 5000,
          disableOnInteraction: true
        }
      }
    };
  },
  computed: {
    portfolio_list(event) {
      return this.$store.state.portfolio.portfolios_data.slice(0, 5);
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

.portfolio-box {
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
      width: 15px;
      height: 15px;
      margin: 10px;
      display: inline-block;
      border-radius: 2px;
      background: #062744;
      opacity: 0.2;
      transition: all 0.3s;
      transform: rotateZ(45deg);
      &:hover {
        transform: rotateZ(45deg) scale(110%);
      }
      &-active {
        opacity: 1;
        background: rgb(2, 226, 227);
        width: 20px;
        height: 20px;
        box-shadow: 0px 0px 20px rgba(2, 226, 227, 0.2);

        @media screen and (max-width: 768px) {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
}
</style>
