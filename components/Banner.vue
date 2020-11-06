<template>
  <div class="component-root">
    <div class="row align-items-center justify-content-center sign-tile">
      <div class="col-12 sign-space">
        <span class="welcome-text">Welcome to</span>
        <br />
        <div class="d-flex align-items-center justify-content-center name-box">
          <!-- <img class="mx-3 mx-md-4" src="~assets/cyan_icon.svg" alt="#" width="100" /> -->
          <span class="sign-forward">CYA</span>
          <span class="sign-back">N</span>
        </div>
      </div>
    </div>
    <div class="text-center box-button">
      <a class="open-button" href="#" v-scroll-to="'#portfolio-place'">
        <i class="fas fa-chevron-down"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
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

.component-root {
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 0px;
  margin: 0px;
  overflow: hidden;
  font-family: "Fredoka One", cursive;
  user-select: none;
  background-color: var(--my-active-color);
}

.sign-tile {
  position: relative;
  width: 100%;
  height: 100vh;
  margin: 0px;
  text-align: center;
  font-size: 6rem;
  letter-spacing: 0.1em;

  @include tab {
    font-size: 5rem;
  }
  @include sp {
    font-size: 2.8rem;
  }

  .sign-space {
    position: relative;
    color: white;
    margin: 0px;
    padding: 0px;

    .welcome-text {
      transition: all ease-out 0.3s;
    }

    .name-box {
      font-size: 10rem;

      @include tab {
        font-size: 8rem;
      }
      @include sp {
        font-size: 6rem;
      }

      .sign-forward {
        color: var(--my-active-color);
        text-shadow: 7px 7px 0px #333333a8;
        transition: all 0.3s ease-in-out 0s;
        &:hover {
          color: white;
        }
        animation: font_shadow 4s linear 0s infinite forwards;
      }

      .sign-back {
        color: var(--my-sub-color);
        text-shadow: 7px 7px 0px #333333a8;
        transition: all 0.3s ease-in-out 0s;
        &:hover {
          color: white;
        }

        animation: font_shadow 4s linear 0s infinite forwards;
      }
    }
  }

  @keyframes font_shadow {
    0% {
      text-shadow: 7px 7px 0px #333333a8;
      transform: rotateY(20deg) rotateX(-20deg) rotateZ(0deg);
    }
    25% {
      text-shadow: -7px 7px 0px #333333a8;
      transform: rotateY(-20deg) rotateX(-20deg) rotateZ(0deg);
    }
    50% {
      text-shadow: -7px -7px 0px #333333a8;
      transform: rotateY(-20deg) rotateX(20deg) rotateZ(0deg);
    }
    75% {
      text-shadow: 7px -7px 0px #333333a8;
      transform: rotateY(20deg) rotateX(20deg) rotateZ(0deg);
    }
    100% {
      text-shadow: 7px 7px 0px #333333a8;
      transform: rotateY(20deg) rotateX(-20deg) rotateZ(0deg);
    }
  }
}

.box-button {
  position: absolute;
  bottom: 10vh;
  width: 100%;

  .open-button {
    font-size: 2.5rem;
    width: 80px;
    height: 80px;
    border-radius: 40px;
    border: solid 0px white;
    background-color: transparent;
    color: white;
    opacity: 1;
    transition: all ease-out 0.3s;
    &:hover {
      // box-shadow: 0px 1px 10px #33333359;
      // transform: rotateZ(360deg);
      font-size: 3rem;
    }
    animation: appeal_effect 2.5s ease-out infinite forwards;
  }
  @keyframes appeal_effect {
    0% {
      font-size: 2.5rem;
    }
    80% {
      font-size: 2.5rem;
    }
    85% {
      font-size: 3rem;
    }
    90% {
      font-size: 2.5rem;
    }
    95% {
      font-size: 3rem;
    }
    100% {
      font-size: 2.5rem;
    }
  }
}
</style>
