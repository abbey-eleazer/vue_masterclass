<template>
  <div class="h-16 w-full border-solid border-b border-brandGray-1 bg-white">
    <div class="flex h-full items-center px-8">
      <div v-if="onJobResultsPage">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span><span class=" text-brandGreen-1">12342</span> jobs marched</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
 name: 'SubNav',
 data() {
  return {
    onJobResultsPage: true
  }
 }
}
</script>
