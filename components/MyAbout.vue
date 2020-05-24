<template>
  <div class="about-container container">
    <div class="row">
      <div class="about-container__top-icon col-12 mb-md-4 mb-3">
        <img
          class="rounded-circle"
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-87c41.appspot.com/o/PublicMaterial%2FMy%20preview.png?alt=media&token=20b23f8d-c722-4048-b25b-cad6793a0dd3"
          alt="CYAN"
          width="200px"
        />
      </div>

      <div class="row justify-content-around align-items-center about-container__contents">
        <div class="col-12 col-md-5 col-lg-5 about-container__group1">
          <div class="about-container__item about-container__name text-center col-12">
            <h4 class="rounded-pill">NAME</h4>
            <p>Hiroyasu</p>
          </div>
          <div class="about-container__item about-container__age text-center col-12">
            <h4 class="rounded-pill">AGE</h4>
            <p>19</p>
          </div>
          <div class="about-container__item about-container__address text-center col-12">
            <h4 class="rounded-pill">PROFESSION</h4>
            <p>高専生</p>
          </div>
        </div>
        <!-- <div class="about-container__gap col-md-2 col-12"></div> -->
        <div
          class="col-12 col-md-5 col-lg-5 mb-5 mb-md-0 about-container__item about-container__group2"
        >
          <div class="col-12 about-container__item__desc">
            <h4 class="text-center rounded-pill">COMMENT</h4>
            <div class="px-3">
              <p>
                こんにちは！ポートフォリオサイトを見てくださりありがとうございます。
                <br />
              </p>
              <p>
                ITエンジニアを目指して日々勉強している者です。
                <br />ネット上では
                <i>Cyan</i>と名乗って活動しているので、SNS等で交流してくれるとうれしいです。
              </p>
              <p>
                主に
                <i>Swift</i> や
                <i>Kotlin</i>で、アプリ開発の勉強しています。
                最近は、
                <i>Vue.js</i> や
                <i>Nuxt.js</i> を使ってWeb系の分野にも手を出しています。
              </p>
            </div>
          </div>
        </div>
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

.about-container {
  margin-top: 100px; // for image
  padding: 30px 0px;
  background: white;
  color: white;
  box-shadow: 5px 5px 0px rgba(34, 46, 58, 0.5);
  border-radius: 15px;
  transition: all ease-out 0.3s;
  transform: rotateX(0deg) rotateY(0deg);
  &:hover {
    box-shadow: 5px 5px 0px rgba(34, 46, 58, 0.5);
    transform: rotateX(0deg) rotateY(0deg);
  }

  &__contents {
    // padding-top: 100px; // for image
  }

  &__group1 {
    padding: 30px 0px;
    background: var(--my-active2-color);
    box-shadow: 5px 5px 0px rgba(34, 46, 58, 0.5);
    border-radius: 15px;
    transform: translateX(-25%);
    @include tab {
      transform: translateX(0%);
    }
    @include sp {
      transform: translateX(0%);
    }
  }

  &__group2 {
    padding: 30px 0px;
    background: var(--my-active2-color);
    box-shadow: 5px 5px 0px rgba(34, 46, 58, 0.5);
    border-radius: 15px;
    transform: translateX(25%);
    @include tab {
      transform: translateX(0%);
    }
    @include sp {
      transform: translateX(0%);
    }
  }

  &__top-icon {
    position: absolute;
    text-align: center;
    img {
      border: solid 10px white;
    }
    transform: translateY(-60%);

    @include tab {
    }
    @include sp {
    }
  }

  &__item {
    cursor: default;
    h4 {
      width: 100%;
      padding: 0.5rem;
      font-size: 1.2rem;
      font-family: "Baloo Bhai", cursive;
      font-weight: 700;
      color: white;
      transition: all ease-out 0.3s;
      // background: var(--my-dark-blue);
      &:hover {
        // text-shadow: 10px 10px 0px rgba(34, 46, 58, 0.5);
      }
      &::before {
        content: "";
        position: absolute;
        display: flex;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 1px;
        transform: translateX(0%) scaleX(0%);
        transform-origin: top left;
        transition: all ease-out 0.3s;
        background-color: white;
        z-index: -1;
      }
      &::after {
        content: "";
        position: absolute;
        display: flex;
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: 1px;
        transform: translateX(0%) scaleX(0%);
        transition: all ease-out 0.3s;
        transform-origin: top right;
        background-color: white;
        z-index: -1;
        // animation: bar_progress 2s linear 0s infinite alternate forwards;
      }
      &:hover::before {
        transform: translateX(0%) scaleX(100%);
      }
      &:hover::after {
        transform: translateX(0%) scaleX(100%);
      }
    }
    p {
      font-family: "M PLUS Rounded 1c", serif;
      font-size: 1.2rem;
      transition: all ease-out 0.3s;
      &:hover {
        transform: scale(110%);
      }
    }

    &__desc {
      h4 {
      }
      p {
        font-size: 0.9rem;
        margin-bottom: 0.4rem;
      }
    }
  }
  &__comment {
    p {
      font-size: 1rem;
    }
  }
}
</style>
