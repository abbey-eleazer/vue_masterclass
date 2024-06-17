<template>
  <div class="h-16 w-full border-solid border-b border-brandGray-1 bg-white">
    <div class="flex h-full items-center px-8">
      <div v-if="onJobResultsPage">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span><span class=" text-brandGreen-1">{{FILTERED_JOBS_BY_ORGANIZATIONS.length}}</span> jobs marched</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia';

import { useJobsStore, FILTERED_JOBS_BY_ORGANIZATIONS } from '@/Stores/jobs';

export default {
 name: 'SubNav',
 computed: {
  ...mapState(useJobsStore, [FILTERED_JOBS_BY_ORGANIZATIONS]),
  onJobResultsPage() {
    return this.$route.name === 'JobResults'
  }
 }
}
</script>
