<template>
  <div class="component-root">
    <v-bar-style-list-item-frame>
      <div class="content">
        <div class="duration">
          <span v-text="data.duration.start.toDateString()"></span>
          <span
            v-if="data.duration.end"
            v-text="data.duration.end.toDateString()"
          ></span>
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
