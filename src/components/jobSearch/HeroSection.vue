<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20"> 
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
  </main>
</template>

<script>
import HeroText from '@/components/jobSearch/HeroText.vue'
import JobSearchForm from './JobSearchForm.vue'

export default {
  name: 'HeroSection',

  components: {
    HeroText,
    JobSearchForm,
  }
}
</script>