<template>
   <collapsable-accordion header="Organizations">
        <div class="mt-5">
          <fieldset>
            <ul class="flex flex-row flex-wrap">
              <li v-for="Organization in UNIQUE_ORGANIZATIONS" :key="Organization" class="h-8 w-1/2">
                <input :id="Organization" v-model="selectedOrganizations" :value="Organization" type="checkbox" class="mr-3" @change="selectOrganization" />
                <label :for="Organization">{{Organization}}</label>
              </li>
            </ul>
          </fieldset>
        </div>
      </collapsable-accordion>
</template>

<script>
import CollapsableAccordion from '@/components/Shared/CollapsableAccordion.vue'
import { mapActions, mapState } from 'pinia'
import { useJobsStore, UNIQUE_ORGANIZATIONS } from '@/Stores/jobs';
import { useUserStore, ADD_SELECTED_ORGANIZATIONS } from '@/Stores/user';


export default {
  name: 'JobFilterSidebarOrganizations',

  components:{CollapsableAccordion},

  data() { 
    return {
      selectedOrganizations: [],
    }
  },

  computed:{
    ...mapState(useJobsStore, [UNIQUE_ORGANIZATIONS]),
  },

  methods: {
    ...mapActions(useUserStore, [ADD_SELECTED_ORGANIZATIONS]),
    selectOrganization (){
      this.ADD_SELECTED_ORGANIZATIONS(this.selectedOrganizations)
    }
  }
}
</script>
