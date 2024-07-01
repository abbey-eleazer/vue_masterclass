<template>
  <ul>
    <li v-for="spotlight in spotlights" :key="spotlight.id">
      <slot :img="spotlight.img" :description="spotlight.description" :title="spotlight.title" ></slot>
    </li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios'

const spotlights = ref({})

const getSpotlights = async () => {
   const baseUrl = import.meta.env.VITE_APP_API_URL
   const url = `${baseUrl}/spotlights`
   const response = await axios.get(url)
   spotlights.value = response.data
}


onMounted(getSpotlights)

</script>