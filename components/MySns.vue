<template>
  <div class="sns-container container">
    <div class="row justify-content-around align-items-center">
      <div class="col-10 col-md-5 col-lg-5
      sns-container__to_link">
        <!-- Twitter -->
        <div class="
        sns-container__to_link__item twitter">
          <a href="https://twitter.com/cyan_0FBCF9" target="_blank">
            <i class="fab fa-twitter"></i>  
            Twitter
          </a>
        </div>
        <!-- Gihub -->
        <div class="
        sns-container__to_link__item github">
          <a href="https://github.com/namid11" target="_blank">
            <i class="fab fa-github"></i>
            Github
          </a>
        </div>
        <!-- Qiita -->
        <div class="
        sns-container__to_link__item qiita">
          <a href="https://qiita.com/cyan" target="_blank">
            Qiita
          </a>
        </div>
        <!-- More -->
        <div class="
        sns-container__to_link__item more">
          <nuxt-link to="/">
            <i class="fas fa-long-arrow-alt-right"></i>
            More
          </nuxt-link>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-5
      sns-container__timeline">
        <div class="overflow-auto">
          <a
            class="twitter-timeline"
            target="_blank"
            data-height="500"
            href="https://twitter.com/cyan_0FBCF9?ref_src=twsrc%5Etfw"
          >Tweets by cyan_Programing</a>
          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$tab: 768px; // タブレット（Bootstrap - md）
$sp: 544px; // スマホ（Bootstrap - sm）

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

.sns-container {
  &__to_link {
    text-align: center;
    border-radius: 15px;
    box-shadow: 5px 5px 0px rgba(34, 46, 58, 0.5);
    margin: 0px;
    padding: 0px;
    overflow: hidden;
    &__item {
      margin: 0px 0px;
      a {
        display: block;
        font: normal 2rem/4rem 'Baloo Bhai', cursive;
        color: white;
      }

      &.twitter {
        background-color: #1DA1F2;
      }
      &.github {
        background-color: var(--my-black);
      }
      &.qiita {
        background-color: #55C500;
      }
      &.more {
        background-color: white;
        a {
          color: var(--my-active-color);
        }
      }
    }
  }

  &__timeline {
    margin: 0px 0px;
    @include tab {
      margin: 20px 0px;
    }
    @include sp {
      margin: 20px 0px;
    }
  }
}
</style>
