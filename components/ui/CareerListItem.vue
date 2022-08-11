<template>
  <div class="component-root">
    <v-bar-style-list-item-frame :reverse-layout="false">
      <div class="content">
        <div class="duration">
          {{ data.duration.toStringForDisplay() }}
        </div>
        <div class="career">
          {{ data.career }}
        </div>
        <div v-if="data.detail" class="detail">
          {{ data.detail }}
        </div>
      </div>
    </v-bar-style-list-item-frame>
  </div>
</template>

<script>
import VBarStyleListItemFrame from '@/components/commons/VBarStyleListItemFrame'
import CareerListItem from '@/scripts/types/componentprops/CareerListItem'

export default {
  name: 'CareerListItem',
  components: {
    VBarStyleListItemFrame,
  },
  props: {
    data: CareerListItem,
  },
}
</script>

<style lang="scss" scoped>
$list-item-between-size: 4px;

.content {
  display: flex;
  flex-direction: column;
  padding: 0 $pd-md;

  & > * {
    margin: $list-item-between-size 0;
  }
}
</style>
