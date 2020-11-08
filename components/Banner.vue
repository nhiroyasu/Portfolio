<template>
  <div class="component-root">
    <div class="d-flex flex-column align-items-center justify-content-center sign-tile">
      <div class="my-icon-wrapper">
        <img src="~assets/cyan-icon-transparent.png" alt="icon" />
      </div>
      <div class="sign-space">
        <div class="name-box">
          <span class="sign-forward">HIROYASU'S<br />PORTFOLIO SITE</span>
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
  font-family: 'Fredoka One', cursive;
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
  letter-spacing: 0.12em;

  @include tab {
    font-size: 5rem;
  }
  @include sp {
    font-size: 2.8rem;
  }

  .my-icon-wrapper {
    background-color: white;
    border-radius: 50%;
    margin: 0px 20px;
    padding: 10px;

    img {
      filter: drop-shadow(20px 10px 4px var(--my-gray));
      transform: translateX(-5px);
      width: 250px;
    }
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
      font-size: 7rem;

      @include tab {
        font-size: 3.5rem;
      }
      @include sp {
        font-size: 3rem;
      }

      .sign-forward {
        color: white;
        transition: all 0.3s ease-in-out 0s;
        text-shadow: 5px 5px 0px #333333a8;

        @include tab {
          text-shadow: 4px 4px 0px #333333a8;
        }

        @include sp {
          text-shadow: 2.5px 2.5px 0px #333333a8;
        }
      }

      .sign-back {
        color: var(--my-dark-blue);
        transition: all 0.3s ease-in-out 0s;
        text-shadow: 7px 7px 0px #333333a8;
      }
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
