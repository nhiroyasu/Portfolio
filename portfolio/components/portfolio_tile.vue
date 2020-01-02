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

