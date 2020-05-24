<template>
  <div>
    <loading v-bind:on_load="loading" v-bind:on_loaded="loaded" />

    <nuxt />
  </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue';
import Loading from "@/components/Loading.vue";

export default {
  components: {
    NavigationBar,
    Loading,
  },
  data: function() {
    return {
      loading: false,
      loaded: false,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      this.loading = true;
      setTimeout(() => {
        this.$nuxt.$loading.finish();
        this.loaded = true;
      }, 2000);
    })
  },
}
</script>

<style>
html {
  font-family: Quicksand, 游ゴシック体, "Yu Gothic", YuGothic, "ヒラギノ角ゴシック Pro",
  "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, Osaka, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
