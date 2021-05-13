<template>
  <div class="menu-container">
    <div class="menu-container__hidden" :class="{ visible_on: !menu_flag, visible_off: menu_flag }">
      <div class="menu-item" @click="menu_flag = !menu_flag">
        <img v-show="menu_flag === false" src="~assets/menu.svg" alt="menu icon" />
        <img v-show="menu_flag === true" src="~assets/close.svg" alt="menu icon" />
      </div>
    </div>
    <div class="menu-container__open" :class="{ visible_on: menu_flag, visible_off: !menu_flag }">
      <div class="rounded-pill menu-item selection" @click="menu_flag = !menu_flag">
        <nuxt-link to="/">
          <i class="fas fa-home mr-2"></i>
          <span>HOME</span>
        </nuxt-link>
      </div>
      <div class="rounded-pill menu-item selection" @click="menu_flag = !menu_flag">
        <nuxt-link class="nuxt-link" to="/portfolio_list">
          <i class="fas fa-file-code mr-2"></i>
          <span>PORTFOLIO</span>
        </nuxt-link>
      </div>
      <div class="rounded-pill menu-item selection" @click="menu_flag = !menu_flag">
        <nuxt-link to="/sns_list"> <i class="fas fa-comments mr-2"></i>SNS </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import MenuItem from '~/components/MenuItem.vue'

export default {
  components: {
    MenuItem,
  },
  data() {
    return {
      menu_flag: false,
    }
  },
}
</script>

<style lang="scss" scoped>
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

.menu-container {
  position: fixed;
  margin: 30px 30px;
  padding: 0;
  z-index: 5;
  @include sp {
    margin: 15px 15px;
  }

  .menu-item {
    margin: 10px 0;
    width: 60px;
    height: 60px;
    background-color: rgba(45, 52, 54, 0.9);
    border-radius: 50%;
    font-size: 2rem;
    text-align: center;
    cursor: pointer;

    a {
      color: #ffffff;
      display: block;
      padding: 0 30px;
      width: 100%;
      text-decoration: none;
    }
  }

  &__hidden {
    position: relative;

    .menu-item {
      left: 0;
    }

    &.visible_on {
      i {
        transition: all ease-out 0.5s;
        transform-origin: center center;
        transform: rotateZ(0deg);
      }
    }

    &.visible_off {
      i {
        transition: all ease-out 0.5s;
        left: -200px;
        transform: rotateZ(-180deg);
      }
    }
  }

  &__open {
    position: relative;

    .menu-item {
      left: -150%;
    }

    .selection {
      width: auto;
      font-size: 1.2rem;
      line-height: 60px;
    }

    &.visible_on {
      transition: all cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s;
      left: 0;
      opacity: 1;
    }

    &.visible_off {
      transition: all cubic-bezier(0.36, 0, 0.66, -0.56) 0.6s;
      left: -150%;
      opacity: 0;
    }
  }
}
</style>
