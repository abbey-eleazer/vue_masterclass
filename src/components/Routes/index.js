import { createRouter, createWebHashHistory } from "vue-router"
import HomeView from "../Views/HomeView.vue"
import JobResultView from "../Views/JobResultView.vue"
import JobView from '../Views/JobView.vue'

const routes = [

{ 
  path: '/',
  name: 'Home',
  component: HomeView,
},
{
  path: '/jobs/results',
  name: 'JobResults',
  component: JobResultView,
},
{
  path: '/jobs/results/:id',
  name: 'JobListing',
  component: JobView,
}

]


const router = createRouter({
  history: createWebHashHistory(),
  routes,

  scrollBehavior() {
    return { top: 0, left: 0, behavior: "smooth"}
  }
})

export default router