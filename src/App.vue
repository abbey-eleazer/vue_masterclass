<template>
  <main-nav />
  <hero-section />
</template>

<script>
import MainNav from '@/components/Navigation/MainNav.vue'
import HeroSection from '@/components/jobSearch/HeroSection.vue'

export default {
  name: 'App',
  components: {
    MainNav,
    HeroSection,
  }
}
</script>
