<template>
  <div>
    <v-layout column justify-center align-center style="height: 40vh">
      <v-flex>
        <v-img v-if="currentMilestone.image" height="40vh" :src="currentMilestone.image.url">
          <v-layout pa-2 column fill-height class="lightbox white--text">
            <v-spacer />
            <v-flex shrink pa-2>
              <div class="subheading">
                {{ currentMilestone.title }}
              </div>
              <div class="body-1">
                {{ currentMilestone.description }}
              </div>
            </v-flex>
          </v-layout>
        </v-img>
      </v-flex>
    </v-layout>

    <div ref="root" style="height: 20px;">
      <v-container style="height: 60vh" class="scroll-y">
        <v-timeline dense clipped style="padding-bottom:40vh;">
          <v-timeline-item
            v-for="(milestone, i) in allMilestones"
            :key="i"
            ref="item"
            :index="i"
            small
          >
            <div class="py-3">
              <span
                :class="`font-weight-bold `"
                v-text="milestone.date"
              />
              <h2 :class="`headline font-weight-light mb-3`">
                {{ milestone.title }}
              </h2>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-container>
    </div>
  </div>
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
      allMilestones: [],
      observer: null,
      current: 0
    }
  },

  computed: {
    currentMilestone() {
      return this.allMilestones[this.current]
    }
  },

  mounted() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          this.current = entry.target.attributes.index.value
        }
      })
    }, {
      root: this.$refs.root
    })

    this.$refs.item.forEach((item) => {
      this.observer.observe(item.$el)
    })
  }
}
</script>

<style>
.lightbox {
    box-shadow: 0 0 20px inset rgba(0, 0, 0, 0.4);
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 72px);
}
</style>
