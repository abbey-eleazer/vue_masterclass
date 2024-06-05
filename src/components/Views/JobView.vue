<template>
  <h1> JOBS PAGAE </h1>
</template>

<script>

export default {
 name: 'JobView',

 computed: {
  currentJobId () {
  return this.$route.params.id
 }
}
}
</script>
