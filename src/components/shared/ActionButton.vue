<template>
  <button @click="handleClick" :class="buttonClass">{{ text }}</button>
</template>

<script>
export default {
  name: 'ActionButton',

  props: {
    text: {
      type: String,
      required: true,
    },
    type:{
      type: String,
      required: false,
      default: 'primary',

      validator(value) {
        return ['primary', 'secondary'].includes(value)
      }
    }
  },


  computed: {
    buttonClass() {
      // return { primary: this.isPrimary, secondary: !this.isPrimary }
      return {  [this.type]: true }
    }
  }

}
</script>

<style scoped>
button {
  @apply px-5 py-3 font-medium ;
}

.primary {
  @apply rounded bg-brandBlue-1 text-white hover:shadow-blue;
}

.secondary {
  @apply bg-transparent text-brandBlue-1 hover:bg-brandBlue-2 hover:text-white hover:shadow-blue;
}
</style>
