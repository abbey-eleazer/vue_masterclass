<template>
  <div class="flex flex-col w-96 border-r border-solid border-brandGray-1 p-4 bg-white">
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button text="Clear Filters" type="secondary" />
        </div>
      </div>

      <collapsable-accordion header="My Page">
        <p role="text">element</p>
      </collapsable-accordion>

      <collapsable-accordion header="Organization">
        <div class="mt-5">
          <fieldset>
            <ul class="flex flex-row flex-wrap">
              <li class="h-8 w-1/2">
                <input id="VueTube" type="checkbox" class="mr-3" />
                <label for="VueTube">VueTube</label>
              </li>
              <li class="h-8 w-1/2">
                <input id="Vue and a Half Men" type="checkbox" class="mr-3" />
                <label for="Vue and a Half Men">Vue and a Half Men</label>
              </li>
              <li class="h-8 w-1/2">
                <input id="Between Vue and" type="checkbox" class="mr-3" />
                <label for="Between Vue and">Between Vue and</label>
              </li>
              <li class="h-8 w-1/2">
                <input id="Et Vue Brute" type="checkbox" class="mr-3" />
                <label for="Et Vue Brute">Et Vue Brute</label>
              </li>
            </ul>
          </fieldset>
        </div>
      </collapsable-accordion>
    </section>
  </div>
</template>

<script>
import CollapsableAccordion from '@/components/Shared/CollapsableAccordion.vue'
import ActionButton from '../../Shared/ActionButton.vue'

export default {
  name: 'JobFilterSidebar',

  components: {
    ActionButton,
    CollapsableAccordion
  }
}
</script>
