<template>
  <div class="contact-container container">
    <div class="row justify-content-center align-items-center">
      <div class="contact-container__item contact-container__mail text-center col-3 col-md-2 col-lg-1">
        <div class="img-cover rounded-circle">
          <nuxt-link to="/contact">
            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-87c41.appspot.com/o/PublicMaterial%2Fmail_icon.png?alt=media&token=c6d65caa-baa1-4772-bd96-909e112ccd23" alt="#">
          </nuxt-link>
        </div>
      </div>
      <div class="contact-container__item contact-container__twitter text-center col-3 col-md-2 col-lg-1">
        <div class="img-cover rounded-circle">
          <a href="https://twitter.com/cyan_Programing" target="_blank">
            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-87c41.appspot.com/o/PublicMaterial%2Ftwitter_icon.png?alt=media&token=8bb76134-77ad-492d-9d43-df7091c22e03" alt="#">
          </a>
        </div>
      </div>
      <div class="contact-container__item contact-container__github text-center col-3 col-md-2 col-lg-1">
        <div class="img-cover rounded-circle">
          <a class="rounded-circle" href="https://github.com/namid11" target="_blank">
            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-87c41.appspot.com/o/PublicMaterial%2Fgithub_icon.png?alt=media&token=61bb60f2-cc30-48f2-b995-a026d9642d91" alt="#">
          </a>
        </div>
      </div>
      <div class="contact-container__item contact-container__qiita text-center col-3 col-md-2 col-lg-1">
        <div class="img-cover rounded-circle">
          <a href="https://qiita.com/cyan" target="_blank">
            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-87c41.appspot.com/o/PublicMaterial%2Fqiita_icon.png?alt=media&token=01167028-7b32-4ca3-bfb0-c21830ae1a66" alt="#">
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
        box-shadow: 0px 0px 10px rgba($color: #2d3436, $alpha: 0.6);
        transition: 0.3s;
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
