<template>
  <div class="card tile my-3">
    <div class="title p-2">
      <p class="p-0 m-0">Title</p>
    </div>
    <div class="content">
      <img class="card-img" v-bind:src="tmp_img" alt="#" />
      <div class="card-body explanation">
        <p class="card-text lead">
          ここに説明分が入ります!!!
          <br />Hoge Piyo Fuga
        </p>
        <a href="#" class="detail-btn btn btn-primary">Detail</a>
      </div>
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

.tile {
  width: 100%;
  height: auto;
  border-radius: 10px;
  overflow: hidden;
  /* border-top: solid 3px #34e7e4; */
  /* border-right: solid 2px #00d8d6;
  border-bottom: solid 2px #0be881;
  border-left: solid 2px #0fbcf9; */
  border: solid 1px #485460;
  /* box-shadow: 2px 5px 10px #39474d; */
}

.title {
  position: relative;
  width: 100%;
  height: auto;
  text-align: center;
  background: #0fbcf9;
}
.title p {
  font-size: 1.8rem;
  color: #ffffff;
  font-family: "Avenir", "Helvetica Neue", "Helvetica", "Arial", "Hiragino Sans",
    "ヒラギノ角ゴシック", YuGothic, "Yu Gothic", "メイリオ", Meiryo,
    "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
}

.content {
  position: relative;
  background: white;
}

.img-block {
  position: relative;
  width: 100%;
  height: auto;
  border: solid 0px #000;
  border-radius: 20px;
  overflow: hidden;
}
.img-block img {
  width: 100%;
}

.explanation {
  position: relative;
}

.detail-btn {
  background: #0da1d6;
  border: solid 1px #0da1d6;
}
</style>

