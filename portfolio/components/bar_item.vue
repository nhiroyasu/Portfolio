<template>
  <div class="bar-item">
    <a v-bind:href="link">{{value}}</a>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    link: String
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-size: 2rem;
  font-family: 'Avenir','Helvetica Neue','Helvetica','Arial','Hiragino Sans','ヒラギノ角ゴシック',YuGothic,'Yu Gothic','メイリオ', Meiryo,'ＭＳ Ｐゴシック','MS PGothic',sans-serif;
}

.bar-item {
  padding: 0.1rem;
  margin: 0.1rem 0.5rem;
  position: relative;
  cursor: pointer;
}
.bar-item a{
  font-size: 1.6rem;
  line-height: 1.6rem;
  color: #dfe6e9;
}
</style>
