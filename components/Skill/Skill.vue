<template>
  <div class="skill-container">
    
  </div>
</template>

<script>
import LanguageItem from './LanguageItem.vue';
import FrameworkItem from './FrameworkItem.vue';
import ProgramLanguage from '~/scripts/types/ProgramLanguage';
import Framework from '~/scripts/types/Framework';

export default {
  components: {
    LanguageItem,
    FrameworkItem,
  },
  data() {
    return {
      languages: [
        new ProgramLanguage('Javascript', '~/assets/icons/languages/js.png', 4),
        new ProgramLanguage('Kotlin', '~/assets/icons/languages/kotlin.png', 4),
        new ProgramLanguage('Swift', '~/assets/icons/languages/swift.svg', 4),
        new ProgramLanguage('Python', '~/assets/icons/languages/python.png', 3),
        new ProgramLanguage('C#', '~/assets/icons/languages/c-sharp.svg', 2),
        new ProgramLanguage('Typescript', '~/assets/icons/languages/ts.png', 2),
        new ProgramLanguage('Dart', '~/assets/icons/languages/dart.png', 2),
      ],
      frameworks: [
        new Framework('Nuxt', '~/assets/icons/frameworks/nuxt.png', 4),
        new Framework('Bootstrap', '~/assets/icons/frameworks/bootstrap.png', 4),
        new Framework('Android Native', '~/assets/icons/frameworks/android.png', 4),
        new Framework('iOS Native', '~/assets/icons/languages/swift.png', 4),
        new Framework('Angular', '~/assets/icons/frameworks/angular.png', 3),
        new Framework('Ionic', '~/assets/icons/frameworks/ionic.png', 3),
        new Framework('Vue', '~/assets/icons/frameworks/vue.png', 2),
        new Framework('Flutter', '~/assets/icons/frameworks/flutter.png', 2),
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.skill-container {

}
</style>