<template>
  <div class="contact-container container">
    <div class="row justify-content-center align-items-center">
      <div class="contact-container__item contact-container__mail text-center col-3 col-md-2 col-lg-1">
        <div class="img-cover rounded-circle">
          <nuxt-link to="/contact">
            <img src="~assets/mail_icon.png" alt="#">
          </nuxt-link>
        </div>
      </div>
      <div class="contact-container__item contact-container__twitter text-center col-3 col-md-2 col-lg-1">
        <div class="img-cover rounded-circle">
          <a href="https://twitter.com/cyan_Programing" target="_blank">
            <img src="~assets/twitter_icon.png" alt="#">
          </a>
        </div>
      </div>
      <div class="contact-container__item contact-container__github text-center col-3 col-md-2 col-lg-1">
        <div class="img-cover rounded-circle">
          <a class="rounded-circle" href="https://github.com/namid11" target="_blank">
            <img src="~assets/github_icon.png" alt="#">
          </a>
        </div>
      </div>
      <div class="contact-container__item contact-container__qiita text-center col-3 col-md-2 col-lg-1">
        <div class="img-cover rounded-circle">
          <a href="https://qiita.com/cyan" target="_blank">
            <img src="~assets/qiita_icon.png" alt="#">
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.contact-container {
  &__item {

    .img-cover {
      overflow: hidden;

      &:hover {
        box-shadow: 0px 0px 10px rgba($color: #2d3436, $alpha: 0.6)
      }
    }

    img {
      width: 100%;
    }
  }

  &__twitter {

  }
}
</style>
