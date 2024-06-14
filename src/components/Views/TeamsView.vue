<template>
  <header-component>
    <template #title>
      <h1 class="w-full font-normal text-4xl ">Teams</h1>
    </template>
    <template #subtitle>
      <h2 class="my-4 w-full text-base font-light  ">It's awesome working here. Why don't you come join us.</h2>
    </template>
  </header-component>
</template>

<script>
import HeaderComponent from "../Shared/HeaderComponent.vue"

export default {
  name: 'TeamsView',

  components: {
    HeaderComponent,
  }
}
</script>