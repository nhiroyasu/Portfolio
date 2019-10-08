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
          ここに説明分が入ります!!!<br>
          Hoge Piyo Fuga
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
}

.title {
  position: relative;
  width: 100%;
  height: auto;
  text-align: center;
  background-color: rgb(24, 11, 168);
}
.title p {
  font-size: 1.5rem;
  color: #dfe6e9;
  font-family: 'Avenir','Helvetica Neue','Helvetica','Arial','Hiragino Sans','ヒラギノ角ゴシック',YuGothic,'Yu Gothic','メイリオ', Meiryo,'ＭＳ Ｐゴシック','MS PGothic',sans-serif;
}

.img-block {
  position: relative;
  padding: 5%;
  width: 100%;
  height: auto;
}
.img-block img {
  width: 100%;
}
</style>

<script>
import google_icon from '~/static/google_icon-icons.png';
export default {
  data: function() {
    return {
      tmp_img: google_icon,
    }
  }
}
</script>
