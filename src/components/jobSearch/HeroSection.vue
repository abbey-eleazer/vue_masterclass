<template>
  <main lass="flex flex-col h-screen">
    <section class="pt-10 pb-20"> 
      <div class="grid grid-cols-12 ">
        <div class="col-start-1 col-span-1"></div>
        <div class="col-start-2 col-span-5"> 
          <hero-text /> 
          <job-search-form />
        </div>
        <div class="col-span-5 col-start-7 self-center justify-self-center">
          <img  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png" class="w-80 h-80 object-contain" />
        </div>
        <div class="col-span-1 col-start-12"></div>
      </div>
    </section>

    <spot-light class="flex flex-row justify-center pb-16">
      <template #default="{ img, title, description}">
        <router-link to="/jobs/results" class="mx-5 flex flex-col h-96 w-72 rounded border border-brandGray-2">
          <img :src="img" class="object-contain" />

          <div class="mt-3 h-46 py-4 px-6 ">
            <h3 class="text-lg font-medium">{{ title }}</h3>
          </div>

          <p class="mt-3 text-sm">{{ description }}</p>

          <router-link to="jobs/results" class="px-6 pb-4 text-sm text-brandBlue-1">See Jobs</router-link>
        </router-link>
      </template>
    </spot-light>
  </main>
</template>

<script>
import HeroText from '@/components/jobSearch/HeroText.vue'
import JobSearchForm from './JobSearchForm.vue'
import SpotLight from '@/components/jobSearch/SpotLight.vue'

export default {
  name: 'HeroSection',

  components: {
    HeroText,
    JobSearchForm,
    SpotLight,
  }
}
</script>