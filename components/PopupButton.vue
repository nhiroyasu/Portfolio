<template>
  <div class="main-container">
    <div class="link-btn">
      <a
        id="target"
        :href="link"
        target="_blank"
        ontouchstart
        :data-content="content"
      >
        <i :class="icon"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: String,
    link: String,
    icon: String,
  },
}
</script>

<style lang="scss" scoped>
.main-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .link-btn {
    position: relative;
    margin: 0px 10px;

    a {
      display: block;
      height: 50px;
      width: 50px;
      padding: 0px;
      border-radius: 25px;
      font-size: 1.5rem;
      text-align: center;
      text-decoration: none;
      font-family: sans-serif;
      color: white;

      i {
        line-height: 50px;
      }

      &::before {
        content: attr(data-content);
        position: absolute;
        display: block;
        padding: 8px 10px;
        width: auto;
        border-radius: 5px;
        color: white;
        left: 50%;
        font-size: 0.9rem;
        line-height: 20px;
        z-index: 1;
        transition: all 0.3s ease-out 0s;
        transform-origin: center bottom;
        transform: translateX(-50%) translateY(-120%) scale(0);
      }

      &:hover::before {
        transform: translateX(-50%) translateY(-120%) scale(1);
      }

      &::after {
        content: '';
        position: absolute;
        display: block;
        height: 10px;
        width: 10px;
        top: 0px;
        left: 50%;
        z-index: 0;
        transition: all 0.3s ease-out 0s;
        transform-origin: center center;
        transform: translateX(-50%) translateY(-150%) rotateZ(45deg) scale(0);
        -webkit-transition: all 0.3s ease-out 0s;
        -webkit-transform-origin: center center;
        -webkit-transform: translateX(-50%) translateY(-150%) rotateZ(45deg)
          scale(0);
      }
      &:hover::after {
        transform: translateX(-50%) translateY(-150%) rotateZ(45deg) scale(1);
      }
    }
  }
}
</style>
