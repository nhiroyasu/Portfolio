<template>
  <div class="box">
    <!-- "Cyan" Sign -->
    <div class="sign-tile mb-md-5 mb-3">
      <div class="sign-space px-5">
        <span class="sign-forward">CYA</span><span class="sign-back">N</span>
      </div>
    </div>

    <!-- Context View -->
    <div class="container main-view py-3 px-md-5 px-3">
      <!-- Portfolio Space -->
      <div id="portfolio-place" class="plate mb-3 mb-md-5">
        <h1 class="plate__title">PORTFOLIO</h1>
        <hr class="plate__bar" />
        <portfolio-swiper />
      </div>

      <!-- About Space -->
      <div id="about-place" class="plate mb-3 mb-md-5">
        <h1 class="plate__title">ABOUT</h1>
        <hr class="plate__bar">
        <about-content />
      </div>

      <!-- Contact Space -->
      <div id="contact-place" class="plate mb-3 mb-md-5">
        <h1 class="plate__title">CONTACT</h1>
        <hr class="plate__bar">
        <contact-content />
      </div>

    </div>
    <menu-field />
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Tile from "~/components/portfolio_tile.vue";
import MenuField from "~/components/menu_field.vue";
import Navigationbar from "~/components/navi_bar.vue";
import SwiperSample from "~/components/swiper_sample.vue";
import PortfolioSwiper from "~/components/portfolio_swiper.vue";
import AboutContent from "~/components/cyan_about.vue";
import ContactContent from "~/components/cyan_contact.vue";

import firestore from "~/plugins/fb_firestore.js";

export default {
  components: {
    Tile,
    MenuField,
    Navigationbar,
    SwiperSample,
    PortfolioSwiper,
    AboutContent,
    ContactContent,
  },
  data: function() {
    return {
    };
  },
  asyncData () {
    return new Promise((resolve) => {
    })
  },
  computed: {
    portfolio_list(event) {
      return this.$store.state.portfolio.portfolios_data.slice(0, 3);
    }
  },
  created: function() {
    firestore.load_ptf_datas(this.$store);
  },
  mounted() {

  },
  methods: {
    menu_clicked: function() {}
  },
  asyncData({ params }) {
    return {};
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');   // font-family: 'Muli', sans-serif;
@import url("https://fonts.googleapis.com/css?family=Bitter&display=swap"); // font-family: "Bitter", serif;
@import url('https://fonts.googleapis.com/css?family=Baloo+Bhai&display=swap');
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap");/* font-family: 'Noto Sans JP', sans-serif; */
@import url('https://fonts.googleapis.com/css?family=Noto+Serif+JP&display=swap'); /* font-family: 'Noto Serif JP', serif; */

$tab: 680px; // タブレット
$sp: 480px;  // スマホ

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

:root {
  --my-active-color: #0fbcf9;
  --my-active2-color: #0da8e0;
  --my-sub-color: #03fdb7;
  --my-black: #1e272e;
  --my-gray: #636e72;
  --my-white: #ecf0f1;
  --my-barkblue: #15293d;
}

.box {
  position: relative;
  min-width: 100vw;
  min-height: 100vh;
}

// #cyan-path {
//   stroke: transparent; /*線の色を指定する*/
//   stroke-dasharray: 3000; /*線の間隔を指定する*/
//   stroke-dashoffset: 0; /*線の位置を指定する(IEは効かない属性)*/
//   stroke-width: 15; /*線の太さを指定する*/
//   stroke-linecap: round;
//   fill: var(--my-active-color);
//   stroke: var(--my-white);
// }

.sign-tile {
  position: relative;
  width: 100vw;
  height: 50vh;
  padding: 0;
  overflow: hidden;
  text-align: center;
  line-height: 50vh;
  font-size: 15rem;
  font-family: 'Baloo Bhai', cursive;
  letter-spacing: 0.1em;
  user-select: none;

  @include tab {
    font-size: 10rem;
  };
  @include sp {
    font-size: 6rem;
  };

  background: linear-gradient(90deg, rgba(62, 126, 216, 0.3), rgba(2, 227, 214,0.3)), url(https://firebasestorage.googleapis.com/v0/b/portfolio-87c41.appspot.com/o/PublicMaterial%2Fmy_back_thumbnail6.jpg?alt=media&token=d00241ca-5759-4b77-a0a9-cb4cf8835ee9) center top / cover no-repeat;

  .sign-forward {
    color: var(--my-active-color);

  }

  .sign-back {
    color: var(--my-sub-color);
  }
}

.sign-space {
  position: relative;
  padding: 0px;
  width: 100%;
  height: 100%;
  color: cyan;
}
.sign-space svg {
  width: 100%;
  height: 100%;
}

.main-view {
  position: relative;
  font-family: 'Muli', sans-serif;

  .plate {
    &__title {
      text-align: center;
    }
    &__bar {
      background-color: var(--my-black);
    }
  }
}

@media screen and (orientation: portrait) {
}
</style>
