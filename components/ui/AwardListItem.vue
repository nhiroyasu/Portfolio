<template>
  <div class="component-root">
    <v-bar-style-list-item-frame>
      <div class="content">
        <div class="duration">
          {{ data.duration.toStringForDisplay() }}
        </div>
        <div class="contest">
          <a :href="data.contestLink" target="_blank">
            {{ data.contest }}
          </a>
        </div>
        <div v-if="data.awards.length !== 0" class="awards">
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

<style lang="scss" scoped>
$list-item-between-size: 4px;

.content {
  display: flex;
  flex-direction: column;
  padding: 0 $pd-md;

  & > * {
    margin: $list-item-between-size 0;
  }

  .contest {
    & > a {
      color: $font-light-color;
      text-decoration: underline;
    }

    & > a:link {
      color: $font-light-color;
      text-decoration: underline;
    }

    & > a:visited {
      color: $font-light-color;
      text-decoration: underline;
    }
  }
}
</style>
