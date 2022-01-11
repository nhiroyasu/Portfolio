<template>
  <div class="skill-container">
    <div class="languages-wrapper wrapper">
      <div class="title text-center">LANGUAGES</div>
      <language-item v-for="(item, index) in languages" :key="index" :lang="item" />
    </div>
    <div class="frameworks-wrapper wrapper">
      <div class="title text-center">FRAMEWORKS</div>
      <framework-item v-for="(item, index) in frameworks" :key="index" :framework="item" />
    </div>
  </div>
</template>

<script>
import LanguageItem from './LanguageItem.vue';
import FrameworkItem from './FrameworkItem.vue';
import ProgramLanguage from '~/scripts/types/ProgramLanguage';
import Framework from '~/scripts/types/Framework';

import JS from '~/assets/icons/languages/js.png';
import SIWFT from '~/assets/icons/languages/swift.svg';
import KOTLIN from '~/assets/icons/languages/kotlin.png';
import PYTHON from '~/assets/icons/languages/python.png';
import CS from '~/assets/icons/languages/c-sharp.svg';
import TS from '~/assets/icons/languages/ts.png';
import DART from '~/assets/icons/languages/dart.png';

import NUXT from '~/assets/icons/frameworks/nuxt.png';
import BOOTSTRAP from '~/assets/icons/frameworks/bootstrap.png';
import ANDROID from '~/assets/icons/frameworks/android.png';
import ANGULAR from '~/assets/icons/frameworks/angular.png';
import IONIC from '~/assets/icons/frameworks/ionic.png';
import VUE from '~/assets/icons/frameworks/vue.svg';
import FLUTTER from '~/assets/icons/frameworks/flutter.png';

export default {
  components: {
    LanguageItem,
    FrameworkItem,
  },
  data() {
    return {
      languages: [
        new ProgramLanguage('JavaScript', JS, 3),
        new ProgramLanguage('TypeScript', TS, 3),
        new ProgramLanguage('Kotlin', KOTLIN, 5),
        new ProgramLanguage('Swift', SIWFT, 4),
        new ProgramLanguage('Dart', DART, 1),
        new ProgramLanguage('Python', PYTHON, 2),
        new ProgramLanguage('C#', CS, 2),
      ],
      frameworks: [
        new Framework('Nuxt', NUXT, 3),
        new Framework('Vue', VUE, 4),
        new Framework('Angular', ANGULAR, 2),
        new Framework('Ionic', IONIC, 2),
        new Framework('Android', ANDROID, 3),
        new Framework('iOS', SIWFT, 4),
        new Framework('Flutter', FLUTTER, 1),
        new Framework('Bootstrap', BOOTSTRAP, 3),
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.skill-container {
  background: white;
  box-shadow: 5px 5px 0px rgba(34, 46, 58, 0.5);
  border-radius: 15px;
  padding: 20px;

  .wrapper {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 20px 0px 40px 0px;

    .title {
      font-size: 2.2rem;
      letter-spacing: 0.1rem;
      width: 100%;
    }
  }
}
</style>
