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
        <div class="img-cover">
          <a href="https://twitter.com/cyan_Programing" target="_blank">
            <img src="~assets/twitter_icon.png" alt="#">
            <span>Twitter</span>
          </a>
        </div>
        <p class="service-id">@cyan_Programing</p>
      </div>
      <div class="contact-container__item contact-container__github mb-4">
        <div class="img-cover">
          <a href="https://github.com/namid11" target="_blank">
            <img src="~assets/github_icon.png" alt="#">
            <span>Github</span>
          </a>
        </div>
        <p class="service-id">namid11</p>
      </div>
      <div class="contact-container__item contact-container__qiita mb-4">
        <div class="img-cover">
          <a href="https://qiita.com/cyan" target="_blank">
            <img src="~assets/qiita_icon.png" alt="#">
            <span>Qiita</span>
          </a>
        </div>
        <p class="service-id">cyan</p>
      </div>
    </div>
  </div>
</template>

<script>
import ContactContent from "~/components/cyan_contact.vue";

export default {
  components: {
    ContactContent,
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
      padding: 5px;
      a {
        text-decoration: none;
        color: var(--my-black);
        font-size: 1.2rem;
        line-height: 50px;
        img {
          width: 50px;
        }
        span {
          line-height: 100%;
        }
      }
      &:hover {
        box-shadow: 0px 0px 20px rgba($color: #0fbcf9, $alpha: 0.6);
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
