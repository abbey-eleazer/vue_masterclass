<template>
  <div class="flex flex-col w-96 border-r border-solid border-brandGray-1 p-4 bg-white">
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button text="Clear Filters" type="secondary" />
        </div>
      </div>


     <job-filter-sidebar-job-types />

      <job-filter-sidebar-organisations />
    </section>
  </div>
</template>

<script>
import ActionButton from '../../Shared/ActionButton.vue'
import JobFilterSidebarOrganisations from './JobFilterSidebarOrganisations.vue'
import JobFilterSidebarJobTypes from './JobFilterSidebarJobTypes.vue'

export default {
  name: 'JobFilterSidebar',

  components: {
    ActionButton,
    JobFilterSidebarOrganisations,
    JobFilterSidebarJobTypes,
  }
}
</script>
