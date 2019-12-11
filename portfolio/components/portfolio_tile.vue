<template>
  <div class="tile">
    <div class="title">
      <p>Title</p>
    </div>
    <div class="content">
      <div class="img-block">
        <img v-bind:src="tmp_img" alt="#" />
      </div>
      <div class="explanation">
        <p>
          ここに説明分が入ります!!!
          <br />Hoge Piyo Fuga
        </p>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import google_icon from "~/static/tmp2.png";
export default {
  data: function() {
    return {
      tmp_img: google_icon
    };
  }
};
</script>


<style scoped>
* {
  margin: 0px;
  padding: 0px;
}

.tile {
  width: 100%;
  height: 100%;

  border-radius: 2rem 2rem;
  overflow: hidden;
}

.title {
  position: relative;
  padding: 0.8rem;
  width: 100%;
  height: auto;
  text-align: center;
  background: #0abde3;
}
.title p {
  font-size: 1.5rem;
  color: #dfe6e9;
  font-family: "Avenir", "Helvetica Neue", "Helvetica", "Arial", "Hiragino Sans",
    "ヒラギノ角ゴシック", YuGothic, "Yu Gothic", "メイリオ", Meiryo,
    "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
}

.content {
  position: relative;
  padding: 0px;
  background: linear-gradient(180deg, #ced6e0, #dfe4ea);
}

.img-block {
  position: relative;
  padding: 0px;
  width: 100%;
  height: auto;
}
.img-block img {
  width: 100%;
}

.explanation {
  position: relative;
  padding: 1.5rem;
}
</style>

