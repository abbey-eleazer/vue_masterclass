<template>
  <header :class="['text-sm',' w-full', headerHeightClass]">
    <div class="fixed top-0 left-0 w-full bg-white h-16">
      <div class="mx-auto h-full flex flex-nowrap border-b border-solid border-brandGray-1 px-8">
        <router-link :to="{ name: 'Home'}" class="flex items-center h-full text-xl">Bobo Careers </router-link>

        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li v-for="menuItem in menuItems" :key="menuItem.text" class="ml-9 h-full first:ml-0">
              <router-link :to="menuItem.url" class="flex h-full items-center py-2.5">{{ menuItem.text }}</router-link>
            </li>
          </ul>
        </nav>

        <div class="ml-auto flex h-full items-center">
          <profile-image v-if="isLoggedIn" />
          <action-button v-else text="Sign In" type="primary" @click="loginUser" />
        </div>
      </div>

      <sub-nav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script>
import { mapState, mapActions } from 'pinia'

import { useUserStore } from '@/Stores/user'

import ActionButton from '../Shared/ActionButton.vue'
import ProfileImage from './ProfileImage.vue'
import SubNav from './SubNav.vue'

export default {
  name: 'MainNav',

  components: {
    ActionButton,
    ProfileImage,
    SubNav,
  },

  data() {
    return {
     
      menuItems: [
        { text:'Teams', url: '/' },
        { text:'Locations', url: '/' },
        { text:'Life at Bobo Corp', url: '/' },
        { text:'How we hire', url: '/' }, 
        { text:'Students',  url: '/' },
        { text:'Jobs', url: '/jobs/results' },
      ],
      // isLoggedIn: false
    }
  },

  computed: {

    ...mapState(useUserStore, ['isLoggedIn']),

   headerHeightClass() {
    return {

      'h-16': !this.isLoggedIn,
      'h-32': this.isLoggedIn,
    }
   },

   },

    methods: {
     ...mapActions(useUserStore, ['loginUser'])
    }

}
</script>
