<template>
  <form
    class="flex items-center h-12 w-full rounded-full border border-brandGray-3"
    @submit.prevent="searchForJobs"
  >
    <font-awesome-icon :icon="['fas', 'search']" class="ml-4 mr-3" />

    <div class="flex flex-1 flex-nowrap h-full text-base font-light">
      <div class="relative flex flex-1 h-full items-center pr-3">
        <label for="role" class="absolute left-0 -top-10">Role</label>
        <text-input id="role" v-model="role" placeholder="Software Engineer" />
      </div>

      <span
        class="flex h-full items-center border-l border-r border-brandGray-3 bg-brandGray-2 px-3"
        >in</span
      >
      <div class="relative flex flex-1 h-full items-center pl-3">
        <label for="location" class="absolute left-0 -top-10">Where?</label>
        <text-input id="location" v-model="location" placeholder="Los Angeles" />
      </div>
    </div>
    <action-button text="Search" type="secondary" class="rounded-r-full ml-2" />

  </form>
</template>

<script>
import ActionButton from '../Shared/ActionButton.vue'
import TextInput from '../Shared/TextInput.vue'

export default {
  name: 'JobSearchForm',
  components: { ActionButton, TextInput },

  data() {
    return {
      role: '',
      location: ''
    }
  },

  methods: {
    searchForJobs() {
      this.$router.push({
        name: 'jobResults',
        query: {
          role: this.role,
          location: this.location
        }
      })
    }
  }
}
</script>
