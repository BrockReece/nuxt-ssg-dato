import Vue from 'vue'
import { DateTime } from 'luxon'

Vue.filter('format', (date) => {
  const dt = DateTime.fromISO(date)
  return dt.toLocaleString(DateTime.DATE_MED)
})
