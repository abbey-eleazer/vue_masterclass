<template>
  <input  :value="value" type="text" placeholder="Software Engineer" class="w-full text-lg font-normal focus:outline-none" @input="handleInput" />

</template>

<script>

export default {

  name: 'TextInput',

  data() {
    return {
      value: '',
    }
  },

  methods: {
    handleInput($event) {
      this.value = $event.target.value
    }
  }
}


</script>
