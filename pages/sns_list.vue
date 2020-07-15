<template>
  <div class="container main-container">
    <div class="row main-container__contents">
      <div class="col-6 col-md-4 main-container__contents__item twitter">
        <a href="https://twitter.com/cyan_0FBCF9" target="_blank">
          <i class="fab fa-twitter"></i>
          <br />Twitter
        </a>
      </div>
      <div class="col-6 col-md-4 main-container__contents__item github">
        <a href="https://github.com/namid11" target="_blank">
          <i class="fab fa-github"></i>
          <br />Github
        </a>
      </div>
      <div class="col-6 col-md-4 main-container__contents__item qiita">
        <a href="https://qiita.com/cyan" target="_blank">Qiita</a>
      </div>
      <div class="col-6 col-md-4 main-container__contents__item codepen">
        <a href="https://codepen.io/cyan-0fbcf9" target="_blank">
          <i class="fab fa-codepen"></i>
          <br />CodePen
        </a>
      </div>
      <div class="col-6 col-md-4 main-container__contents__item pinterest">
        <a href="https://www.pinterest.jp/Cyan_0FBCF9/" target="_blank">
          <i class="fab fa-pinterest"></i>
          <br />Pinterest
        </a>
      </div>
      <div class="col-6 col-md-4 main-container__contents__item google_play">
        <a href="https://play.google.com/store/apps/developer?id=cyaN" target="_blank">
          <i class="fab fa-google-play"></i>
          <br />GooglePlay
        </a>
        <div class="green"></div>
      </div>
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

.main-container {
  position: relative;
  margin: 0px;
  padding: 0px;
  width: 100vw;
  height: 100vh;

  &__contents {
    position: relative;
    margin: 0px;
    padding: 0px;
    width: 100vw;
    height: 100vh;

    &__item {
      height: 50vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      font: normal 3rem/5rem "Baloo Bhai", cursive;
      @include tab {
        font: normal 2.2rem/3rem "Baloo Bhai", cursive;
      }
      @include sp {
        height: 33vh;
        font: normal 2rem/3rem "Baloo Bhai", cursive;
      }

      a {
        padding: auto;
        display: block;
        align-items: center;
        text-decoration: none;
        color: white;
        transition: all ease-out 0.3s;
        outline: none;
        &:hover {
          transform: scale(1.1);
        }
      }
      &.twitter {
        background-color: #1da1f2;
        @include sp {
          height: 34vh;
        }
      }
      &.github {
        background-color: var(--my-black);
        @include sp {
          height: 34vh;
        }
      }
      &.qiita {
        background-color: #55c500;
      }
      &.codepen {
        background-color: white;
        a {
          color: #1e1f26;
        }
      }
      &.pinterest {
        background-color: #bd081c;
      }
      &.google_play {
        // animation: google_play_themes 5s steps(1, start) 0s infinite forwards;
        background: #4285f4;
        overflow: hidden;
        a {
          // color: transparent;
          position: relative;
          z-index: 2;
          // color: #4285f4;
          // i {
          //   color: #0f9d58;
          // }
        }
        .green {
          content: "";
          position: absolute;
          top: 25%;
          width: 100%;
          height: 25%;
          z-index: 1;
          background-color: #0f9d58;
          transform-origin: left;
          transition: all ease-out 0.5s;
          transform: translateX(-100%);
        }
        &:hover {
          .green {
            transform: translateX(0%);
          }
        }
        &::before {
          content: "";
          position: absolute;
          top: 50%;
          width: 100%;
          height: 25%;
          z-index: 1;
          background-color: #db4437;
          transform-origin: left;
          transition: all ease-out 0.5s;
          transform: translateX(100%);
        }
        &:hover::before {
          transform: translateX(0%);
        }
        &::after {
          content: "";
          position: absolute;
          top: 75%;
          width: 100%;
          height: 25%;
          z-index: 1;
          background-color: #f4b400;
          transform-origin: left;
          transition: all ease-out 0.5s;
          transform: translateX(-100%);
        }
        &:hover::after {
          transform: translateX(0%);
        }
      }
      @keyframes google_play_themes {
        0% {
          background-color: #4285f4;
        }
        25% {
          background-color: #db4437;
        }
        50% {
          background-color: #f4b400;
        }
        75% {
          background-color: #0f9d58;
        }
        100% {
          background-color: #4285f4;
        }
      }
    }
  }
}
</style>