<template>
  <div v-if="!is_end" v-bind:class="{'disapper-view': disapper}" class="fixed-top icon-parent">
    <div class="icon-field">
      <img
        class="cyan-icon"
        v-bind:class="{'up-icon': on_loaded , 'loading-icon': !on_loaded}"
        src="~/assets/cyan_icon.svg"
      />
      <img class="cyan-name" v-bind:class="{'up-name': on_loaded}" src="~/assets/cyan_outline.svg" />
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      loading: false,
      disapper: false,
      is_end: false
    };
  },
  props: {
    on_load: Boolean,
    on_loaded: Boolean
  },
  methods: {},
  watch: {
    on_loaded: function(newValue, oldValue) {
      if (newValue) {
        setTimeout(() => {
          this.disapper = true;
          setTimeout(() => {
            this.is_end = true;
          }, 1000);
        }, 1500);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$tab: 680px; // タブレット
$sp: 480px;  // スマホ

@mixin tab {
  @media (max-width: ($tab)) {
    @content;
  }
}
@mixin sp {
  @media (max-width: ($sp)) {
    @content;
  }
}

.icon-parent {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 1);
  opacity: 1;

  .icon-field {
    margin: 38vh 40vw;
    min-height: 100vh;

    .cyan-icon,
    .cyan-name {
      width: 20vw;
      height: auto;
    }

    .cyan-name {
      opacity: 0;
      transform: translateY(-100%);
    }

    @include tab {
      margin: 30vh 35vw;
      min-height: 100vh;

      .cyan-icon,
      .cyan-name {
        width: 30vw;
        height: auto;
      }
    }
    @include sp {
      margin: 30vh 35vw;
      min-height: 100vh;

      .cyan-icon,
      .cyan-name {
        width: 30vw;
        height: auto;
      }
    }
  }
}

@keyframes disapper_view {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.disapper-view {
  animation: disapper_view 1s ease-out 0s forwards;
}

@keyframes loading_icon {
  0% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(180deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
.loading-icon {
  animation: loading_icon 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0s infinite;
}

@keyframes up_icon {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-30%);
  }
}
.up-icon {
  animation: up_icon 0.8s ease-in-out 0.2s forwards;
}

@keyframes up_name {
  0% {
    transform: translateX(-100%) rotateY(90deg);
    opacity: 0;
  }
  100% {
    transform: translateX(0%) rotateY(0deg);
    opacity: 1;
  }
}
.up-name {
  animation: up_name 0.8s ease-out 0.2s forwards;
}
</style>