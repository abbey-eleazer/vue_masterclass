 <template>
  <main class="flex-auto bg-brandGray-2 p-8">
    <ol>
      <job-listing v-for="job in displayedJobs" :key="job.id" :job="job" />
    </ol>

    <div class="mx-auto mt-8">
      <div class="flex flex-row flex-nowrap">
        <p class="flex-grow text-sm">Page {{ currentPage }}</p>
      </div>

      <div class="flex items-center justify-center">
        <router-link
          v-if="previousPage"
          role="link"
          :to="{ name: 'JobResults', query: { page: previousPage } }"
          class="mx-3 font-semibold text-sm text-brandBlue-1"
        >
          Previous
        </router-link>

        <router-link
          v-if="nextPage"
          role="link"
          :to="{ name: 'JobResults', query: { page: nextPage } }"
          class="mx-3 font-semibold text-sm text-brandBlue-1"
        >
          Next
        </router-link>
      </div>
    </div>
  </main>
</template>

<script setup>

import JobListing from './JobListing.vue'
import { useJobsStore } from '@/Stores/jobs'

import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

import usePreviousAndNextPages from '@/composables/usePreviouAndNextPages'

const jobsStore = useJobsStore()
onMounted(jobsStore.FETCH_JOBS)

const FILTERED_JOBS = computed(() => jobsStore.FILTERED_JOBS)

const route = useRoute()
const currentPage = computed(() => Number.parseInt(route.query.page || '1'))
const maxPage = computed(() => Math.ceil(FILTERED_JOBS.value .length / 10))

const { previousPage, nextPage } = usePreviousAndNextPages( currentPage, maxPage )



const displayedJobs = computed(() => {
  const pageNumber = currentPage.value
  const firstJobIndex = (pageNumber - 1) * 10
  const lastJobIndex = pageNumber * 10
  return FILTERED_JOBS.value.slice(firstJobIndex, lastJobIndex)
})



</script>
