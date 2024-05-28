<template>
  <header :class="['text-sm',' w-full', headerHeightClass]">
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
          <profile-pic v-if="isLoggedIn" />
          <action-button v-else text="Sign In" type="primary" @click="loginUser" />
        </div>
      </div>

      <sub-nav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script>
import ActionButton from '../shared/ActionButton.vue'
import ProfilePic from './ProfilePic.vue'
import SubNav from './SubNav.vue'

export default {
  name: 'MainNav',

  components: {
    ActionButton,
    ProfilePic,
    SubNav,
  },

  data() {
    return {
      company: 'Bobo Careers',
      url: 'https://careers.google.com',
      menuItems: ['Teams', 'Locations', 'Life at Bobo Corp', 'How we hire', 'Students', 'Jobs'],
      isLoggedIn: false
    }
  },

  computed: {
   headerHeightClass() {
    return {

      'h-16': !this.isLoggedIn,
      'h-32': this.isLoggedIn,
    }
   }
  },

  methods: {
    loginUser () {
      this.isLoggedIn = true
    }
  }
}
</script>
