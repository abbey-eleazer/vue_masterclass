<template>
  <button @click="handleClick" :class="{primary}">{{ text }}</button>
</template>

<script>
export default {
  name: 'ActionButton',

  props: ['text'],

  data() {
    return {
      primary: true
    }
  }

}
</script>

<style scoped>
button {
  @apply px-5 py-3 font-medium rounded;
}

.primary {
  @apply bg-brandBlue-1 text-white border-0 hover:shadow-blue;
}
</style>
