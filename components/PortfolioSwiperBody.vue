<template>
  <swiper-slide class="swiper-slide container mt-3 mb-4">
    <div class="slider-item row justify-content-center align-items-center">
      <div class="slider-item__img col-md-4 col-7">
        <div
          class="img-cover"
          :style="{ backgroundImage: 'url(' + slider_info.img_link + ')' }"
        >
          <div class="one-more">
            <img class="" :src="slider_info.img_link" alt="" />
          </div>
        </div>
      </div>
      <div class="slider-item__body my-lg-3 mt-3 mx-lg-3 mx-2 col-md-6 col-10">
        <div class="date px-4 px-lg-2">{{ date }}</div>
        <div class="title px-4 px-lg-2 mb-2">{{ slider_info.title }}</div>
        <!-- <div class="detail px-1">{{ slider_info.detail }}</div> -->
        <div class="meta my-2">
          <div class="meta__content">
            <hr class="meta__hr-text" data-content="SUMMARY" />
            <div class="meta__data meta__detail px-2 px-md-4">{{ slider_info.detail }}</div>
          </div>
          <div class="meta__content">
            <hr class="meta__hr-text" data-content="LANGUAGE" />
            <div class="meta__data meta__platform"><span class="px-1" v-for="(value, index) in slider_info.lang" :key="index">{{value}}</span></div>
          </div>
          <div class="meta__content">
            <hr class="meta__hr-text" data-content="PLATFORM" />
            <div class="meta__data meta__lang"><span class="px-1" v-for="(value, index) in slider_info.platform" :key="index">{{value}}</span></div>
          </div>
        </div>
        <div class="slider-item__button text-center my-3" v-if="read_more_link">
          <a class="py-3 px-4 rounded-pill" target="_blank" :href="read_more_link">READ MORE</a>
        </div>
      </div>
    </div>
  </swiper-slide>
</template>

<script>
export default {
  created () {
    let date = this.slider_info.date.toDate();
    this.date = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
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
      platform: Array,
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
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800");

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
      font-size: 0.8rem;
    }
    .title {
      font-size: 1.5rem;
      font-weight: 600;
    }
    .meta {
      &__content {
        margin: 5px 0px;
      }

      &__data {
        font-family: 'Noto Sans JP', sans-serif;
        color: var(--my-black);
      }

      &__lang, &__platform {
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
        opacity: 0.8;
        &:before {
          content: "";
          // use the linear-gradient for the fading effect
          // use a solid background color for a solid bar
          background: linear-gradient(
            to right,
            transparent,
            var(--my-active-color),
            transparent
          );
          position: absolute;
          left: 0;
          top: 50%;
          width: 100%;
          height: 1px;
        }
        &:after {
          content: attr(data-content);
          position: relative;
          display: inline-block;
          color: black;
          padding: 0 0.5rem;
          line-height: 2rem;
          // this is really the only tricky part, you need to specify the background color of the container element...
          color: var(--my-active-color);
          background-color: #fff;
        }
      }
    }
  }

  &__button {
    height: auto;
    text-align: left;

    a {
      display: inline-flex;
      text-decoration: none;
      letter-spacing: 1px;
      color: #fff;
      font-weight: 500;
      background: -webkit-linear-gradient(
        109deg,
        rgb(15, 188, 249),
        rgb(3, 253, 183)
      );
      background: linear-gradient(109deg, rgb(15, 188, 249), rgb(3, 253, 183));
      box-shadow: 0px 0px 3px lightgrey;
      transition: all 0.3s ease-out;
      &:hover {
        box-shadow: 0px 0px 8px rgb(180, 180, 180);
      }
    }
  }
}
</style>
