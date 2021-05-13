<template>
  <div class="component-root clickable" @click="onClickComponent">
    <img class="icon" :src="data.icon" alt="icon" />
    <div class="title">
      {{ data.title }}
    </div>
  </div>
</template>

<script>
import MenuItem from '@/scripts/types/componentprops/MenuItem'

export default {
  name: 'MenuItem',
  props: {
    data: MenuItem,
  },
  methods: {
    onClickComponent() {
      this.$router.push(this.data.link)
    },
  },
}
</script>

<style lang="scss" scoped>
.component-root {
  align-items: center;
  border-color: #ffffff;
  border-style: solid;
  border-width: 1px 0 0 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: $pd-lg 0;
  width: 100%;

  &:last-child {
    border-width: 1px 0 1px 0;
  }
}

img.icon {
  display: block;
  height: $icon-default-size;
  margin: 0 $mg-for-child;
  width: $icon-default-size;
}

.title {
  font-size: 1.2rem;
  line-height: 1.2rem;
}
</style>
