var Vue = require('vue');
var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo, {
  duration: 500,
  easing: "ease-in",
  offset: -100,
})