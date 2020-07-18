<template>
  <div class="box">
    <!-- "Cyan" Sign -->
    <banner />

    <div id="home-container-place" class="container main-view">
      <div class="row justify-content-center align-items-stretch main-row">
        <!-- Portfolio Space -->
        <div id="portfolio-place" class="plate col-11 col-md-10 col-lg-9">
          <h1 class="plate__title">RECENT PORTFOLIO</h1>
          <hr class="plate__bar" />
          <portfolio-swiper />
        </div>

        <!-- About Space -->
        <div
          id="about-place"
          class="plate mb-3 mb-md-5 col-11 col-md-10 col-lg-9"
        >
          <h1 class="plate__title">ABOUT</h1>
          <hr class="plate__bar" />
          <about-content />
        </div>

        <!-- TODO : My Skill -->

        <!-- Contact Space -->
        <div
          id="contact-place"
          class="plate mb-3 mb-md-5 col-12 col-md-10 col-lg-9"
        >
          <h1 class="plate__title">SNS</h1>
          <hr class="plate__bar" />
          <sns-content />
        </div>
        <!-- Context View -->
      </div>
    </div>
  </div>
</template>

<script>
import PortfolioSwiper from "~/components/PortfolioSwiper.vue";
import AboutContent from "~/components/MyAbout.vue";
import SnsContent from "~/components/MySns.vue";
import Banner from "~/components/Banner.vue";

import firestore from "~/plugins/fb_firestore.js";

export default {
  components: {
    PortfolioSwiper,
    AboutContent,
    SnsContent,
    Banner
  },
  data: function() {
    return {};
  },
  asyncData() {
    return new Promise(resolve => {});
  },
  computed: {},
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
  --my-dark-blue: #3d4df5;
  --my-primary-blue: #b5f8fd;
  --my-black: #1e272e;
  --my-gray: #636e72;
  --my-white: #ecf0f1;
  --my-barkblue: #15293d;
}

.box {
  position: relative;
  min-width: 100%;
}

.main-view {
  position: relative;
  font-family: "Muli", sans-serif;
  min-width: 100%;
  padding: 0px;
  margin: 0px;
  background-color: var(--my-active-color);

  .main-row {
    width: 100%;
  }

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
    font-family: "Fredoka One", cursive;
    letter-spacing: 0.2rem;
  }
}

@media screen and (orientation: portrait) {
}
</style>
