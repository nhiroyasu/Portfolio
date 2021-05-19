<template>
  <div class="component-root">
    <v-bar-style-list-item-frame>
      <div class="content">
        <div class="duration">
          {{ data.duration.start.toDateString() }}
          <template v-if="data.duration.end">
            {{ data.duration.end.toDateString() }}
          </template>
        </div>
        <div class="contest">
          <a :href="data.contestLink">
            {{ data.contest }}
          </a>
        </div>
        <div class="awards">
          <span v-for="(award, index) in data.awards" :key="index">
            {{ award }}
          </span>
        </div>
      </div>
    </v-bar-style-list-item-frame>
  </div>
</template>

<script>
import VBarStyleListItemFrame from '@/components/commons/VBarStyleListItemFrame'
import AwardListItem from '@/scripts/types/componentprops/AwardListItem'

export default {
  name: 'AwardListItem',
  components: {
    VBarStyleListItemFrame,
  },
  props: {
    data: AwardListItem,
  },
}
</script>

<style lang="scss" scoped></style>
