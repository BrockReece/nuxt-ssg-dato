<template>
  <v-layout>
    <v-flex xs12>
      <v-card>
        <v-card-title>Photos</v-card-title>
        <v-container grid-list-sm fluid>
          <v-layout row wrap>
            <v-flex
              v-for="photo in photos"
              :key="photo"
              xs4
              sm3
              lg2
              d-flex
            >
              <v-card flat tile class="d-flex">
                <v-img
                  :src="photo"
                  aspect-ratio="1"
                  class="grey lighten-2"
                >
                  <template v-slot:placeholder>
                    <v-layout
                      fill-height
                      align-center
                      justify-center
                      ma-0
                    >
                      <v-progress-circular indeterminate color="grey lighten-5" />
                    </v-layout>
                  </template>
                </v-img>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { shuffle, take } from 'lodash'

export default {
  data() {
    return {
      photos: []
    }
  },

  mounted() {
    const headers = new Headers({
      'Authorization': 'Bearer c2e6c6aa71a42a3ec0cff94b47b85a',
      'Accept': 'application/vnd.api+json'
    })
    const myRequest = new Request('https://site-api.datocms.com/uploads', {
      headers
    })

    fetch(myRequest).then((res) => {
      return res.json()
    }).then(({ data }) => {
      this.photos = take(shuffle(data.map(img => img.attributes.url)), 12)
    })
  }
}
</script>
