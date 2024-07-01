<template>
  <div class="flex flex-col w-96 border-r border-solid border-brandGray-1 p-4 bg-white">
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button text="Clear Filters" type="secondary" />
        </div>
      </div>


      <job-filter-sidebar-checkbox-group
        header="Job Types"
        :unique-values="UNIQUE_JOB_TYPES"
        :actions="userStore.ADD_SELECTED_JOB_TYPES" />

      <job-filter-sidebar-checkbox-group
        header="Organizations" 
        :unique-values="UNIQUE_ORGANIZATIONS" 
        :action="userStore.ADD_SELECTED_ORGANIZATIONS" />
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'

import ActionButton from '../../Shared/ActionButton.vue'
import JobFilterSidebarCheckboxGroup from './JobFilterSidebarCheckboxGroup.vue'

import { useJobsStore } from '@/Stores/jobs'
import { useUserStore } from '@/Stores/user'

const jobsStore = useJobsStore()
const userStore = useUserStore()

const UNIQUE_JOB_TYPES = computed(() => jobsStore.UNIQUE_JOB_TYPES)
const UNIQUE_ORGANIZATIONS = computed(() => jobsStore.UNIQUE_ORGANIZATIONS)
</script>
