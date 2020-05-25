<template>
  <div>
    <loading v-bind:on_load="loading" v-bind:on_loaded="loaded" />
    <menu-component />
    <nuxt />
  </div>
</template>

<script>
import MenuComponent from '@/components/Menu.vue';
import Loading from "@/components/Loading.vue";

export default {
  components: {
    MenuComponent,
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

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Muli&display=swap"); // font-family: 'Muli', sans-serif;
@import url("https://fonts.googleapis.com/css?family=Bitter&display=swap"); // font-family: "Bitter", serif;
@import url("https://fonts.googleapis.com/css?family=Baloo+Bhai&display=swap"); ///* font-family: 'Baloo Bhai', cursive; */
@import url("https://fonts.googleapis.com/css?family=Noto+Sans+JP&display=swap"); /* font-family: 'Noto Sans JP', sans-serif; */
@import url("https://fonts.googleapis.com/css?family=Noto+Serif+JP&display=swap"); /* font-family: 'Noto Serif JP', serif; */
@import url("https://fonts.googleapis.com/css?family=M+PLUS+Rounded+1c:400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap"); /* font-family: 'Fredoka One', cursive; */

:root {
  --my-active-color: #0fbcf9;
  --my-active2-color: #0da8e0;
  --my-sub-color: #03fdb7;
  --my-dark-blue: #3d4df5;
  --my-primary-blue: #b5f8fd;
  --my-black: #1e272e;
  --my-gray: #636e72;
  --my-white: #ecf0f1;
  --my-barkblue: #15293d;
}

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

</style>
