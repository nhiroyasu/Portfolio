<template>
  <swiper-slide class="swiper-slide col-12 my-4 p-md-3">
    <div class="slider-item row justify-content-around align-items-center">
      <div class="slider-item__img col-7 col-md-5 col-lg-4 p-md-3 p-xl-5">
        <div class="img-cover" :style="{ backgroundImage: 'url(' + slider_info.img_link + ')' }">
          <div class="one-more">
            <img class :src="slider_info.img_link" alt />
          </div>
        </div>
      </div>
      <div class="slider-item__body col-12 col-md-5 col-lg-7">
        <div class="date px-4 px-lg-2">{{ date }}</div>
        <div class="title px-4 px-lg-2 mb-2">{{ slider_info.title }}</div>
        <!-- <div class="detail px-1">{{ slider_info.detail }}</div> -->
        <div class="meta my-2">
          <div class="meta__content">
            <hr class="meta__hr-text" data-content="SUMMARY" />
            <div class="meta__data meta__detail">{{ slider_info.detail }}</div>
          </div>
          <div class="meta__content">
            <hr class="meta__hr-text" data-content="LANGUAGE" />
            <div class="meta__data meta__platform">
              <span class="px-1" v-for="(value, index) in slider_info.lang" :key="index">{{value}}</span>
            </div>
          </div>
          <div class="meta__content">
            <hr class="meta__hr-text" data-content="PLATFORM" />
            <div class="meta__data meta__lang">
              <span
                class="px-1"
                v-for="(value, index) in slider_info.platform"
                :key="index"
              >{{value}}</span>
            </div>
          </div>
        </div>
        <div
          class="d-flex align-items-center justify-content-center slider-item__links text-center"
        >
          <div class="slider-item__links__event" v-if="event_link">
            <a class="rounded-pill" target="_blank" :href="event_link">EVENT</a>
          </div>
          <div class="rounded-circle slider-item__links__github" v-if="git_hub_link">
            <a target="_blank" :href="git_hub_link">
              <i class="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </swiper-slide>
</template>

<script>
export default {
  created() {
    let date = this.slider_info.date.toDate();
    this.date = `${date.getFullYear()}-${date.getMonth() +
      1}-${date.getDate()}`;
  },
  data() {
    return {
      date: ""
    };
  },
  props: {
    slider_info: {
      title: String,
      detail: String,
      img_link: String,
      lang: Array,
      platform: Array
    }
  },
  computed: {
    read_more_link() {
      if ("github" in this.slider_info) {
        return this.slider_info.github;
      } else if ("event_link" in this.slider_info) {
        return this.slider_info.event_link;
      } else {
        return null;
      }
    },
    git_hub_link() {
      if ("github" in this.slider_info) {
        return this.slider_info.github;
      } else {
        null;
      }
    },
    event_link() {
      if ("event_link" in this.slider_info) {
        return this.slider_info.event_link;
      } else {
        return null;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800");

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

.swiper-slide {
}

.slider-item {
  font-family: "Fira Sans", sans-serif;

  &__img {
    overflow: hidden;
    box-sizing: border-box;

    img {
      width: 100%;
      object-fit: cover;
      display: block;
      border-radius: 20px;
      visibility: hidden;
    }

    .img-cover {
      width: auto;
      background-size: cover;
      display: block;
      border-radius: 20px;
      overflow: hidden;

      // .one-more {
      //   width: 100%;
      //   height: 100%;
      //   display: block;
      //   background: linear-gradient(90deg, rgba(2, 95, 227, 0.8), rgba(2, 227, 214,0.8));
      // }
    }
  }

  &__body {
    .date {
      font-size: 1rem;
      @include sp {
        text-align: center;
      }
    }
    .title {
      font-size: 2.5rem;
      font-weight: normal;
      letter-spacing: 0.1rem;
      font-family: "Baloo Bhai", cursive;

      @include sp {
        font-size: 2rem;
        text-align: center;
      }
    }
    .meta {
      &__content {
        margin: 10px 0px 20px 0px;
      }

      &__data {
        font-family: "Noto Sans JP", sans-serif;
        color: var(--my-black);
      }

      &__detail {
        text-align: center;
      }

      &__lang,
      &__platform {
        text-align: center;
      }

      &__hr-text {
        line-height: 1.5rem;
        position: relative;
        outline: 0;
        border: 0;
        color: black;
        text-align: center;
        height: 2rem;
        margin: 3px 0px;
        opacity: 1;
        &:before {
          content: "";
          // use the linear-gradient for the fading effect
          // use a solid background color for a solid bar
          background: linear-gradient(
            to right,
            transparent,
            var(--my-dark-blue),
            transparent
          );
          position: absolute;
          left: 0;
          top: 50%;
          width: 100%;
          height: 2px;
        }
        &:after {
          content: attr(data-content);
          position: relative;
          display: inline-block;
          color: black;
          padding: 0 0.5rem;
          line-height: 2rem;
          // this is really the only tricky part, you need to specify the background color of the container element...
          color: var(--my-dark-blue);
          background-color: #fff;
        }
      }
    }
  }

  &__links {
    margin: 20px 0px 40px 0px;
    &__event {
      margin: 0px 10px;
      a {
        font-family: "Muli", sans-serif;
        font-weight: bold;
        font-size: 0.9rem;
        padding: 7px 15px;
        background-color: var(--my-dark-blue);
        color: white;
        text-decoration: none;
      }
    }

    &__github {
      width: 50px;
      height: 50px;
      margin: 0px 10px;
      font-size: 2.2rem;
      background: var(--my-black);
      a {
        color: white;
        text-decoration: none;
      }
    }
  }
}
</style>
