<template>
  <div class="about-container container">
    <div class="row">

      <div class="about-container__top-icon col-12 mb-md-4 mb-3">
        <div>
          <img src="~/assets/cyan_icon.svg" alt="CYAN" width="64px" />
          <img src="~/assets/cyan_outline.svg" alt="CYAN" width="128px" />
        </div>
      </div>

      <div class="col-12 col-md-6">
        <div class="about-container__item about-container__name text-center col-12">
          <h4 class="rounded">Name</h4>
          <p>新妻 広康</p>
        </div>
        <div class="about-container__item about-container__age text-center col-12">
          <h4 class="rounded">Age</h4>
          <p>19</p>
        </div>
        <div class="about-container__item about-container__address text-center col-12">
          <h4 class="rounded">Profession</h4>
          <p>高専生</p>
        </div>
        <div class="about-container__item about-container__profession text-center col-12">
          <h4 class="rounded">Hobby</h4>
          <p>？</p>
        </div>
      </div>
      <!-- <div class="about-container__gap col-md-2 col-12"></div> -->
      <div class="about-container__item about-container__profession col-12 col-md-6 align-self-start">
        <h4 class="text-center rounded">Description</h4>
        <div class="about-container__item__desc px-md-3 px-1">
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
      <div class="about-container__gap col-md-2 col-12"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$tab: 680px; // タブレット
$sp: 480px; // スマホ

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
  &__top-icon {
    text-align: center;

    div {
      position: relative;
      outline: 0;
      border: 0;

      img {
        display: inline-block;
        margin: 0px 10px;
      }
    }

    @include tab {
    }
    @include sp {
    }
  }

  &__item {
    h4 {
      width: 100%;
      padding: 0.5rem;
      font-size: 1.5rem;
      font-weight: 700;
      color: #fff;
      background: linear-gradient(109deg, rgb(15, 188, 249), rgb(3, 253, 183));
      box-shadow: 0px 5px 10px rgba(15, 188, 249, 0.2);
    }
    p {
      font-family: "M PLUS Rounded 1c", serif;
      font-size: 1.2rem;
    }

    &__desc {
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
