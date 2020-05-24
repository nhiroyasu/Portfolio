<template>
  <div class="box">
    <!-- "Cyan" Sign -->
    <banner />

    <div id="home-container-place" class="container main-view">
      <div class="row justify-content-center align-items-stretch">
        <!-- Portfolio Space -->
        <div id="portfolio-place" class="plate col-12 col-md-10 col-lg-9">
          <h1 class="plate__title">PORTFOLIO</h1>
          <hr class="plate__bar" />
          <portfolio-swiper />
        </div>

        <!-- TODO : My Skill -->

        <!-- About Space -->
        <div id="about-place" class="plate mb-3 mb-md-5 col-12">
          <h1 class="plate__title">ABOUT</h1>
          <hr class="plate__bar" />
          <about-content />
        </div>

        <!-- Contact Space -->
        <div id="contact-place" class="plate mb-3 mb-md-5">
          <h1 class="plate__title">CONTACT</h1>
          <hr class="plate__bar" />
          <contact-content />
        </div>
        <!-- Context View -->
      </div>
    </div>
  </div>
</template>

<script>
import PortfolioSwiper from "~/components/PortfolioSwiper.vue";
import AboutContent from "~/components/MyAbout.vue";
import ContactContent from "~/components/MyContact.vue";
import Banner from "~/components/Banner.vue";

import firestore from "~/plugins/fb_firestore.js";

export default {
  components: {
    PortfolioSwiper,
    AboutContent,
    ContactContent,
    Banner
  },
  data: function() {
    return {};
  },
  asyncData() {
    return new Promise(resolve => {});
  },
  computed: {
    portfolio_list(event) {
      return this.$store.state.portfolio.portfolios_data.slice(0, 3);
    }
  },
  created: function() {
    firestore.load_ptf_datas(this.$store);
  },
  mounted() {},
  methods: {
    menu_clicked: function() {}
  },
  asyncData({ params }) {
    return {};
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Muli&display=swap"); // font-family: 'Muli', sans-serif;
@import url("https://fonts.googleapis.com/css?family=Bitter&display=swap"); // font-family: "Bitter", serif;
@import url("https://fonts.googleapis.com/css?family=Baloo+Bhai&display=swap");
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap"); /* font-family: 'Noto Sans JP', sans-serif; */
@import url("https://fonts.googleapis.com/css?family=Noto+Serif+JP&display=swap"); /* font-family: 'Noto Serif JP', serif; */
@import url("https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c:400&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap'); /* font-family: 'Fredoka One', cursive; */

$tab: 768px; // タブレット
$sp: 544px; // スマホ

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
  --my-dark-blue: #3D4DF5;
  --my-primary-blue: #B5F8FD;
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


.main-view {
  position: relative;
  font-family: "Muli", sans-serif;
  min-width: 100vw;
  height: 100%;
  background-color: var(--my-active-color);

  .plate {
    margin: 10px 0px;
    &__title {
      text-align: center;
    }
    &__bar {
      background-color: var(--my-black);
    }
  }

  h1 {
    color: white;
    font-family: 'Fredoka One', cursive;
    letter-spacing: 0.2rem;
  }
}

@media screen and (orientation: portrait) {
}
</style>
