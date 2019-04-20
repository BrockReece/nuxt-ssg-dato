<template>
  <v-timeline>
    <v-timeline-item
      v-for="(milestone, i) in allMilestones"
      :key="i"
      small
    >
      <template v-slot:opposite>
        <span
          :class="`headline font-weight-bold `"
        >{{ milestone.date | format }}</span>
      </template>
      <div class="py-3">
        <h2 :class="`headline font-weight-light mb-3`">
          {{ milestone.title }}
        </h2>
        <div>
          {{ milestone.description }}
        </div>
        <img v-if="milestone.image" style="max-width: 50%" :src="milestone.image.url">
      </div>
    </v-timeline-item>
  </v-timeline>
</template>

<script>
import gql from 'graphql-tag'

export default {
  apollo: {
    allMilestones: {
      query: gql`
        query allMilestones {
          allMilestones (orderBy: [date_ASC]) {
            date
            title
            description
            image {
              url
            }
          }
        }
      `
    }
  },

  data() {
    return {
      allMilestones: []
    }
  }
}
</script>
