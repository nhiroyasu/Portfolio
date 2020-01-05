<<<<<<< HEAD
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
  background: linear-gradient(45deg, #243aff, #51ffa8)
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
=======
<template>
  <div class="card tile my-3 shadow">
    <img class="card-img-top px-3 pt-3 cus-card-img" v-bind:src="tile_info.img_link" alt="#" />
    <div class="card-body explanation">
      <div class="card-title title text-truncate">
        <h4 class="p-0 m-0">{{tile_info.title}}</h4>
      </div>
      <p class="card-text tile-detail">{{tile_info.detail}}</p>
      <a href="#" class="detail-btn btn btn-primary stretched-link">Detail</a>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
    };
  },
  props: {
    tile_info: {
      title: String,
      detail: String,
      img_link: String,
    },
  },
};
</script>


<style scoped>

.cus-card-img {
}

.tile {
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
  background: white;
}

.title {
  position: relative;
  width: 100%;
  height: auto;
  text-align: center;
  color: var(--my-active-color);
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
  color: var(--my-black);
}

.tile-detail {
  font-family: "游明朝", YuMincho, "Hiragino Mincho ProN W3", "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", "HG明朝E", "ＭＳ Ｐ明朝", "ＭＳ 明朝", serif;
}

.detail-btn {
  background: var(--my-active2-color);
  border: solid 1px var(--my-active2-color);
}
</style>

>>>>>>> origin/master
