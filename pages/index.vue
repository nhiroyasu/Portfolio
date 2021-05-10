<template>
  <div class='container-fluid main-view'>
    <div id='home-container-place' class='row justify-content-center align-items-stretch'>
      <!-- "Cyan" Sign -->
      <banner />

      <!-- Career Space -->
      <div id='career-place' class='plate mb-3 mb-md-5 col-11 col-md-10 col-lg-8'>
        <div class='plate__title'>CAREER</div>
        <hr class='plate__bar' />
        <career-content />
      </div>

      <!-- Portfolio Space -->
      <div id='portfolio-place' class='plate col-11 col-md-10 col-lg-8'>
        <div class='plate__title'>RECENT PORTFOLIOS</div>
        <hr class='plate__bar' />
        <portfolio-swiper />
      </div>

      <!-- About Space -->
      <div id='about-place' class='plate mb-3 mb-md-5 col-11 col-md-10 col-lg-9'>
        <div class='plate__title'>ABOUT</div>
        <hr class='plate__bar' />
        <about-content />
      </div>

      <div id='skill-place' class='plate mb-3 mb-md-5 col-11 col-md-10 col-lg-9'>
        <div class='plate__title'>SKILLS</div>
        <hr class='plate__bar' />
        <skill />
      </div>

      <!-- Contact Space -->
      <div id='contact-place' class='plate mb-3 mb-md-5 col-12 col-md-10 col-lg-9'>
        <div class='plate__title'>SNS</div>
        <hr class='plate__bar' />
        <sns-content />
      </div>
    </div>
  </div>
</template>

<script>
import PortfolioSwiper from '~/components/PortfolioSwiper.vue';
import AboutContent from '~/components/MyAbout.vue';
import SnsContent from '~/components/MySns.vue';
import Banner from '~/components/Banner.vue';
import CareerContent from '~/components/Career/Career.vue';
import Skill from '~/components/Skill/Skill.vue';

import firestore from '~/plugins/fb_firestore.js';

export default {
  components: {
    PortfolioSwiper,
    AboutContent,
    SnsContent,
    Banner,
    CareerContent,
    Skill,
  },
  data: function() {
    return {};
  },
  computed: {},
  created: function() {
    firestore.load_ptf_datas(this.$store);
  },
  mounted() {
  },
  methods: {
    menu_clicked: function() {
    },
  },
};
</script>

<style lang='scss'>
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
  --my-dark-blue: #426AE0;
  --my-primary-blue: #b5f8fd;
  --my-black: #1e272e;
  --my-gray: #636e72;
  --my-white: #ecf0f1;
  --my-barkblue: #15293d;
}

.main-view {
  position: relative;
  font-family: 'Muli', sans-serif;
  background-color: $my-active-color;

  .plate {
    margin: 10px 0px;

    &__title {
      text-align: center;
      color: white;
      font-family: 'Fredoka One', cursive;
      font-size: 2.5rem;
      letter-spacing: 0.2rem;
    }

    &__bar {
      background-color: var(--my-black);
    }
  }
}

@media screen and (orientation: portrait) {
}
</style>
