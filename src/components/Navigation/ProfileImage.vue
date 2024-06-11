<template>
  <img :src="imageLink" alt="User profile image" class="h-8 w-8 rounded-3xl object-contain" />
</template>


<script>
export default {
  name: 'ProfileImage',
  data() {

    return {
      imageLink: 'https://www.liveabout.com/thmb/FxATEvrGyS893d6uvcmtBmsIAhw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/boondocks_group-56a0107f5f9b58eba4aebb35.jpg'
    }
  }
}
</script>