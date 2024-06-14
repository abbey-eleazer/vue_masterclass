<template>
  <div class="flex flex-col w-96 border-r border-solid border-brandGray-1 p-4 bg-white">
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button text="Clear Filters" type="secondary" />
        </div>
      </div>

      <collapsable-accordion  header="degree" /> 

      <collapsable-accordion header="My Page">
        <p role="text">element</p>
      </collapsable-accordion>

      <job-filter-sidebar-organisations />
    </section>
  </div>
</template>

<script>
import CollapsableAccordion from '@/components/Shared/CollapsableAccordion.vue'
import ActionButton from '../../Shared/ActionButton.vue'
import JobFilterSidebarOrganisations from './JobFilterSidebarOrganisations.vue'

export default {
  name: 'JobFilterSidebar',

  components: {
    ActionButton,
    CollapsableAccordion,
    JobFilterSidebarOrganisations
  }
}
</script>
