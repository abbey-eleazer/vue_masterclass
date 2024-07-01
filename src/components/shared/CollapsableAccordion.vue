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
      <slot>
       <p> opps forgot about somthing</p>
      </slot>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

defineProps({
     header: {
       type: String,
       required: true
     }
})
 
    const isOpen = ref(false)

    const open = () => {
      isOpen.value = !isOpen.value
    }

    const caretIcon = computed(() => 
      isOpen.value ? ['fas', 'angle-up'] : ['fas', 'angle-down']
    )


</script>
