<template>
  <div class="about-container container">
    <div class="row">
      <div class="about-container__item about-container__name text-center col-md-3 col-12">
        <h4 class="rounded">Name</h4>
        <p>Niitsuma Hiroyasu</p>
      </div>
      <div class="about-container__item about-container__age text-center col-md-3 col-12">
        <h4 class="rounded">Age</h4>
        <p>19</p>
      </div>
      <div class="about-container__item about-container__address text-center col-md-3 col-12">
        <h4 class="rounded">Address</h4>
        <p>Fukushima</p>
      </div>
      <div class="about-container__item about-container__profession text-center col-md-3 col-12">
        <h4 class="rounded">Profession</h4>
        <p>Student</p>
      </div>
      <div class="about-container__item about-container__comment col-12 px-md-5 my-md-3">
        <h4 class="text-center rounded">Comment</h4>
        <p class="mx-md-5">
          現在、福島工業高等専門学校に在学中です。<br>
          普段は、アプリ開発などを中心に勉強しています。
          何度か友人とプログラミングコンテストやハッカソンに出場し、賞もいただきました。<br>
          高専の方では、電気工学を専攻しています。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>


.about-container {
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
      font-family: "Bitter", serif;
      font-size: 1.2rem;
    }
  }
  &__comment {
    p {
      font-size: 1rem;
    }
  }
}
</style>
