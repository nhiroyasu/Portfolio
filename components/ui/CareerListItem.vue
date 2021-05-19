<template>
  <div class="component-root">
    <v-bar-style-list-item-frame :reverse-layout="true">
      <div class="content">
        <div class="duration">
          <span v-text="data.duration.start.toDateString()"></span>
          <span
            v-if="data.duration.end"
            v-text="data.duration.end.toDateString()"
          >
          </span>
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

<style lang="scss" scoped></style>
