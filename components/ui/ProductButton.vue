<template>
  <div class="component-root clickable" @click="onClick">
    <div class="content">
      <div class="icon-wrapper">
        <mac-like-icon :img="data.imgLink" size="60" />
      </div>
      <div class="date">
        {{ data.dateString }}
      </div>
      <div class="title">
        {{ data.title }}
      </div>
      <div class="detail">
        {{ data.detail }}
      </div>
    </div>
  </div>
</template>

<script>
import ComponentFrame from '@/components/commons/ComponentFrame'
import Portfolio from '@/scripts/types/commons/Portfolio'
import MacLikeIcon from '@/components/ui/MacLikeIcon'

export default {
  name: 'ProductButton',
  components: {
    ComponentFrame,
    MacLikeIcon,
  },
  props: {
    data: Portfolio,
  },
  methods: {
    onClick() {
      this.$router.push(`/app/${this.data.id}`)
    },
  },
}
</script>

<style lang="scss" scoped>
.content {
  display: grid;
  grid-template-areas:
    'icon date'
    'icon title'
    'icon detail';
  justify-content: start;
  padding: $pd-sm;

  .icon-wrapper {
    grid-area: icon;
    margin: $mg-for-item $mg-for-child;
    place-self: center center;
  }

  .date {
    align-self: end;
    font-size: 0.7em;
    grid-area: date;
    margin-left: $mg-for-child;
  }

  .title {
    font-size: 1.1em;
    grid-area: title;
    margin-left: $mg-for-child;
  }

  .detail {
    color: $font-light-color;
    display: -webkit-box;
    font-size: 0.8em;
    grid-area: detail;
    margin-left: $mg-for-child;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>
