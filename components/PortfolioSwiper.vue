<template>
  <div class="portfolio-box">
    <div class="portfolio-component my-3 my-md-5">
      <swiper class="portfolio-component__swiper" :options="swiperOption">
        <cyan-swiper
          class="blog-slider__item swiper-slide"
          v-for="(value, index) in portfolio_list"
          :key="index"
          :slider_info="value"
        />
        <div class="swiper-pagination portfolio-component__pagination" slot="pagination"></div>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>-->
      </swiper>
    </div>
  </div>
</template>

<script>
import CyanSwiper from '~/components/PortfolioSwiperBody.vue';

import firestore from '~/plugins/fb_firestore.js';

export default {
  components: {
    CyanSwiper,
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev"
        // },
        loop: true,
        speed: 600,
        autoplay: {
          delay: 5000,
          disableOnInteraction: true,
        },
      },
    };
  },
  computed: {
    portfolio_list(event) {
      return this.$store.state.portfolio.portfolios_data.slice(0, 5);
    },
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800');
@import url('https://fonts.googleapis.com/css?family=Ibarra+Real+Nova&display=swap');

$tab: 768px; // タブレット（Bootstrap - md）
$sp: 544px; // スマホ（Bootstrap - sm）

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

.portfolio-component {
  &__swiper {
    background: #fff;

    box-shadow: 5px 5px 0px rgba(34, 46, 58, 0.5);
    border-radius: 15px;
    transition: all ease-out 0.3s;
    transform: rotateX(0deg) rotateY(0deg);
    &:hover {
      box-shadow: 5px 5px 0px rgba(34, 46, 58, 0.5);
      transform: rotateX(0deg) rotateY(0deg);
    }

    /deep/ .swiper-button-prev {
      background: url('~assets/arrow-left.svg') no-repeat center center / contain;
    }
    /deep/ .swiper-button-next {
      background: url('~assets/arrow-right.svg') no-repeat center center / contain;
    }

    @include tab {
      /deep/ .swiper-button-prev {
        background: url('~assets/arrow-left.svg') no-repeat center center / contain;
        display: none;
      }
      /deep/ .swiper-button-next {
        background: url('~assets/arrow-right.svg') no-repeat center center / contain;
        display: none;
      }
    }

    @include sp {
      /deep/ .swiper-button-prev {
        background: url('~assets/arrow-left.svg') no-repeat center center / contain;
        display: none;
      }
      /deep/ .swiper-button-next {
        background: url('~assets/arrow-right.svg') no-repeat center center / contain;
        display: none;
      }
    }
  }

  &__pagination {
    /deep/ .swiper-pagination-bullet {
      width: 50px;
      height: 8px;
      margin: 10px;
      display: inline-block;
      border-radius: 2px;
      background: #062744;
      opacity: 0.2;
      transition: all 0.3s;
      @include tab {
        width: 25px;
      }
      @include sp {
        width: 25px;
      }
      &-active {
        opacity: 1;
        background: var(--my-active-color);
        width: 50px;
        height: 8px;
        transition: all ease-out 0.3s;

        @include tab {
          width: 30px;
        }
        @include sp {
          width: 30px;
        }

        &::before {
          content: '';
          position: absolute;
          width: 10px;
          height: 10px;
          background-color: var(--my-active-color);
          transition: all ease-out 0.5s;
          transform: translateX(-50%) translateY(-100%) rotate(45deg);
          animation: popup 0.5s ease-out 0s forwards;
        }
        @keyframes popup {
          0% {
            transform: translateX(-50%) translateY(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(-50%) translateY(-200%) rotate(45deg);
          }
        }
      }
    }
  }
}
</style>
