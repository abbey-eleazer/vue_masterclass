<template>
  <section class="mb-16">
    <h1 class="mb-14 text-8xl font-bold tracking-tighter">
      <span :class="actionClasses">{{ action }}</span>
      <br />
      for everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job at Bobo Corp</h2>
  </section>
</template>

<script>
import nextElementInList from '../../Utils/nextElementInList';

export default {
  name: 'HeroText',
  data() {
    return {
      action: 'Build',
      interval: null // action variabl saved into interval, for us to be able to access it in the beforeMount lifecycle
    }
  },

  computed: {
    actionClasses() {
      return {
        // build: this.action === 'Build',
        // code: this.action === 'Code',
        // design: this.action === 'Design',
        // create: this.action === 'Create',

        [this.action.toLowerCase()]: true // shorthand
      }
    }
  },

  created() {
    this.changeTitle() //  function to handle timming and chande of words
  },

  beforeUnmount() {
    clearInterval(this.interval) // stop execution when  page is not live
  },

  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = ['Build', 'Create', 'Design', 'Code']
        this.action = nextElementInList(actions, this.action) //  save it to the action variable
      }, 3000)
    }
  }
}
</script>

<style scoped>
.build {
  color: #1a73e8;
}

.code {
  color: #d93025;
}

.design {
  color: #f9ab00;
}

.create {
  color: #34a853;
}
</style>
