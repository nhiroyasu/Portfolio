<template>
  <div class="main-view">
    <div class="contact-container">
      <h1>CONTACT</h1>
      <hr>
      <div class="contact-container__item contact-container__mail mb-4">
        <h3>Mail</h3>
        <p>namid224y@gmail.com</p>
      </div>
      <div class="contact-container__item contact-container__twitter mb-4">
        <div class="img-cover rounded">
          <a href="https://twitter.com/cyan_Programing" target="_blank">
            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-87c41.appspot.com/o/PublicMaterial%2Ftwitter_icon.png?alt=media&token=8bb76134-77ad-492d-9d43-df7091c22e03" alt="#">
            <span>Twitter</span>
          </a>
        </div>
        <p class="service-id">@cyan_Programing</p>
      </div>
      <div class="contact-container__item contact-container__github mb-4">
        <div class="img-cover rounded">
          <a href="https://github.com/namid11" target="_blank">
            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-87c41.appspot.com/o/PublicMaterial%2Fgithub_icon.png?alt=media&token=61bb60f2-cc30-48f2-b995-a026d9642d91" alt="#">
            <span>Github</span>
          </a>
        </div>
        <p class="service-id">namid11</p>
      </div>
      <div class="contact-container__item contact-container__qiita mb-4">
        <div class="img-cover rounded">
          <a href="https://qiita.com/cyan" target="_blank">
            <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-87c41.appspot.com/o/PublicMaterial%2Fqiita_icon.png?alt=media&token=01167028-7b32-4ca3-bfb0-c21830ae1a66" alt="#">
            <span>Qiita</span>
          </a>
        </div>
        <p class="service-id">cyan</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  created () {
  },
}
</script>

<style lang="scss" scoped>
.main-view {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.contact-container {
  &__item {
    .img-cover {
      margin-bottom: 0.5rem;
      background: transparent;
      a {
        text-decoration: none;
        color: var(--my-black);
        font-size: 1.2rem;
        line-height: 50px;
        display: block;
        padding: 10px;
        img {
          width: 50px;
        }
        span {
          line-height: 100%;
        }
      }
      &:hover {
        // box-shadow: 0px 0px 20px rgba($color: #333, $alpha: 0.3);
        background: #eee;
        transition: 0.5s;
      }
    }

    .service-id {
      color: var(--my-gray);
      font-weight: 500;
      font-family: "Bitter", serif;
    }
  }
}
</style>
