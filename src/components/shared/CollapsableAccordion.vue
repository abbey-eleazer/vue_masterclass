<template>
  <div class="py-5 border-b border-solid border-brandGray-1">
    <div
      class="flex flex-wrap cursor-pointer justify-between items-center"
     role="button" type="button"
      @click="open"
    >
      <h3 class="text-base font-semibold" role="text">{{ header }}</h3>
      <font-awesome-icon :icon="caretIcon" />
    </div>
    <div v-if="isOpen" class="mt-5 w-full">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CollapsableAccordion',

  props: {
    header: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      isOpen: false
    }
  },

  computed: {
    caretIcon() {
      return this.isOpen ? ['fas', 'angle-up'] : ['fas', 'angle-down']
    }
  },

  methods: {
    open() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>
