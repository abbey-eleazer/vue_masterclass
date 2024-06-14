<template>
  <div class="w-full border-b border-solid border-brandGray-1">
    <div class="mx-auto my-16 text-center">
      <slot name="title">Title</slot>
      <slot name="subtitle">sub title</slot>
    </div>
</div>
</template>

<script>

export default {
  name: 'HeaderComponent'
}
</script>