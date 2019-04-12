<template>
  <v-app>
    <v-content>
      <v-parallax src="https://lh3.googleusercontent.com/ie6j58sssM87w91UtNg6JyD7ZlU3kUQIGp0fqvBvp398oDjDDUgFL8ZRXCzFNW0FmN7_hDj2q7Rbhl52TZWXQcI0MFTrD7kJ1XIOuEG-MuG3JWGQeN36Ey4OlBLbjEn7GGCpYIIHZwZcq6mcBT_UkwzDq3GRNu532PwXgZ5sudVolyT18maUHQqNKcjHvoN3GktjT51QxE10wj_hV8A0CsEFVnSdCNUkPqAoutkFpohQwTVKB2cuAvMk9q-nO694qMWyq0IAnI2cRjNE6BEa_atTtNU7vd9FZJKjA7vG6Rxzmn7lfJqnyUUMu6WVohoRcUoViHUkVkhmGrpSw1qCkIfW9AdG8YT7hJzcQ9ldNJFoHFEPjetcaB9RWko9vAThPIeC0QOfWf2vKiw6H7qGOAkNWmYbeWxm-pj6JEDNR4f9vxf4si866GrhriPBhS6qitT0Lk2_cNIQ465BwJ6cb_lZFmHRRGaxde-yf--M33FRsEM2xx6EODQ7wOJ3TZjE_RqXC9-rxjzOjWmWkFAgdc5lZRxtxmfgy0PQd5EmyqEtusJrQLHRkoBx0RowDZkTm1wsA7qzIYgZgvs9Q42AuhfVc3IG-WBvXKBPryVgdQSqLeI4tuVUra2UCia2gpBQ0G2ocMqa3kNZXjfJtRs90hXU8sNPO9iXNpp4BtKRecwFoZkrB3hpV_ZFh57eGzM3vEz7L8CO6cb7aYWmY2O7j3QJ=w1796-h1346-no" />
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
