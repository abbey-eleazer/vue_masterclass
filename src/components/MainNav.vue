<template>
  <header class="text-sm w-full">
    <div class="fixed top-0 left-0 w-full bg-white h-16">
      <div class="mx-auto h-full flex flex-nowrap border-b border-solid border-brandGray-1 px-8">
        <a :href="url" class="flex items-center h-full text-xl">{{ company }} </a>

        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li v-for="menuItem in menuItems" :key="menuItem" class="ml-9 h-full first:ml-0">
              <a href="" class="flex h-full items-center py-2.5">{{ menuItem }}</a>
            </li>
          </ul>
        </nav>

        <div class="ml-auto flex h-full items-center">
          <ProfilePic v-if="isLoggedIn" />
          <ActionButton v-else text="Sign In" @click="loginUser" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import ActionButton from './ActionButton.vue'
import ProfilePic from './ProfilePic.vue'

export default {
  name: 'MainNav',

  components: {
    ActionButton,
    ProfilePic
  },

  data() {
    return {
      company: 'Bobo Careers',
      url: 'https://careers.google.com',
      menuItems: ['Teams', 'Locations', 'Life at Bobo Corp', 'How we hire', 'Students', 'Jobs'],
      isLoggedIn: false
    }
  },

  methods: {
    loginUser () {
      this.isLoggedIn = true
    }
  }
}
</script>
