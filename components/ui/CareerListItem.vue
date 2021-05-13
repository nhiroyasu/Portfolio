<template>
  <div class="component-root">
    <v-bar-style-list-item-frame :reverse-layout="true">
      <div class="content">
        <div class="date">
          {{ data.date }}
        </div>
        <div class="title">
          {{ data.title }}
        </div>
        <div v-if="data.subTitle" class="sub-title">
          {{ data.subTitle }}
        </div>
      </div>
    </v-bar-style-list-item-frame>
  </div>
</template>

<script>
import VBarStyleListItemFrame from 'components/commons/VBarStyleListItemFrame'
import CareerListItem from 'scripts/types/componentprops/CareerListItem'

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
