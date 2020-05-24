<template>
  <div class="conponent-root">
    <div class="background d-flex align-items-center justify-content-center">
      <div class="main-block"></div>
    </div>
    <div class="row align-items-center mb-md-5 mb-3 sign-tile">
      <div class="col-12 sign-space">
        <div>
          <span class="welcome-text">Welcome to</span>
          <br />
          <div class="d-flex align-items-center justify-content-center name-box">
            <!-- <img class="mx-3 mx-md-4" src="~assets/cyan_icon.svg" alt="#" width="100" /> -->
            <span class="sign-forward">CYA</span>
            <span class="sign-back">N</span>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center box-button">
      <button type="button" class="open-button">
        <i class="fas fa-chevron-down"></i>
      </button>
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

.conponent-root {
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 0;
  overflow: hidden;
  font-family: "Fredoka One", cursive;
  user-select: none;

  &::before {
    content: "";
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: var(--my-active-color);
    transform-origin: center center;
  }
}

// .background {
//   position: absolute;
//   width: 100vw;
//   height: 100vh;

//   .main-block {
//     width: 80vw;
//     height: 80vw;
//     background: var(--my-dark);
//     border-radius: 20px;
//     transform: rotateZ(45deg);
//   }
// }

.sign-tile {
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 0;
  text-align: center;
  font-size: 6rem;
  letter-spacing: 0.1em;

  @include tab {
    font-size: 6rem;
    height: 30vh;
    line-height: 30vh;
  }
  @include sp {
    font-size: 6rem;
    height: 30vh;
    line-height: 30vh;
  }

  .sign-space {
    position: relative;
    color: white;

    .welcome-text {
      transition: all ease-out 0.3s;
      &:hover {
        animation: font_shadow 3s linear 0s infinite forwards;
      }
    }

    .name-box {
      font-size: 10rem;
      .sign-forward {
        
        color: var(--my-active-color);
        text-shadow: 7px 7px 0px #333333a8;
        transition: all ease-in-out 0.3s;
        &:hover {
          color: white;
        }
        animation: font_shadow 4s linear 0s infinite forwards;
      }

      .sign-back {
        color: var(--my-sub-color);
        text-shadow: 7px 7px 0px #333333a8;
        transition: all ease-in-out 0.3s;
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
      transform: rotateY(20deg) rotateX(-20deg);
    }
    25% {
      text-shadow: -7px 7px 0px #333333a8;
      transform: rotateY(-20deg) rotateX(-20deg);
    }
    50% {
      text-shadow: -7px -7px 0px #333333a8;
      transform: rotateY(-20deg) rotateX(20deg);
    }
    75% {
      text-shadow: 7px -7px 0px #333333a8;
      transform: rotateY(20deg) rotateX(20deg);
    }
    100% {
      text-shadow: 7px 7px 0px #333333a8;
      transform: rotateY(20deg) rotateX(-20deg);
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