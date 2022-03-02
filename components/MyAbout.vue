<template>
  <div class="about-container container">
    <div class="row">
      <div class="about-container__top-icon col-12 mb-md-4 mb-3">
        <img
          class="rounded-circle"
          src="~assets/me.jpg"
          alt="CYAN"
          width="200px"
        />
      </div>

      <div class="row justify-content-around align-items-center about-container__contents">
        <div class="col-10 col-sm-5 mt-4 mt-sm-0 about-container__group">
          <div class="about-container__item about-container__name text-center col-12">
            <h4 class="rounded-pill">
              <i class="fas fa-user px-2"></i>NAME
            </h4>
            <p>新妻広康</p>
          </div>
          <div class="about-container__item about-container__age text-center col-12">
            <h4 class="rounded-pill">
              <i class="fas fa-smile px-2"></i>AGE
            </h4>
            <p>21</p>
          </div>
          <div class="about-container__item about-container__address text-center col-12">
            <h4 class="rounded-pill">
              <i class="fas fa-graduation-cap px-2"></i>PROFESSION
            </h4>
            <p>iOSエンジニア</p>
          </div>
        </div>
        <!-- <div class="about-container__gap col-md-2 col-12"></div> -->
        <div class="col-10 col-sm-5 my-4 my-sm-0 about-container__item about-container__group">
          <div class="col-12 about-container__item__desc">
            <h4 class="text-center rounded-pill">
              <i class="fas fa-comment px-1"></i>
              COMMENT
            </h4>
            <div class="px-3 text-center">
              ものづくりを極めたい
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
  position: relative;
  margin-top: 150px; // for image

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
    margin: 30px 0px;
    width: 100%;
    // padding-top: 100px; // for image
  }

  &__group {
    position: relative;
    padding: 30px 0px;
    background: var(--my-active2-color);
    box-shadow: 5px 5px 0px rgba(34, 46, 58, 0.5);
    border-radius: 15px;
    z-index: -1;
  }

  &__top-icon {
    position: absolute;
    text-align: center;
    transform: translateY(-50%);
    img {
      width: 250px;
      border: solid 10px white;
      @include tab {
        width: 200px;
      }
      @include sp {
        width: 200px;
      }
    }
    @include tab {
      transform: translateY(-60%);
    }
    @include sp {
      transform: translateY(-60%);
    }
  }

  &__item {
    cursor: default;
    h4 {
      width: 100%;
      margin-bottom: 4px;
      padding: 0.2rem;
      font-size: 1.5rem;
      font-family: "Baloo Bhai", cursive;
      font-weight: 700;
      color: white;
      transition: all ease-out 0.3s;
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
