<template>
  <div class="flex flex-row flex-nowrap">
    <job-filter-sidebar />
    <job-listings />
  </div>
</template>

<script>
import JobListings from '../JobResult/JobListings.vue'
import JobFilterSidebar from '../JobResult/JobFilterSidebar/JobFilterSidebar.vue'

export default {
  name: 'JobResultView',

 components: {
  JobFilterSidebar,
  JobListings
 }
}
</script>
