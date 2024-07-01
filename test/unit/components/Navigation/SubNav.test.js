import { render, screen } from '@testing-library/vue'


import SubNav from '@/components/Navigation/SubNav.vue'
import { useJobsStore } from '@/Stores/jobs'
import { createTestingPinia } from '@pinia/testing'
import { useRoute } from 'vue-router'
vi.mock('vue-router')
describe('SubNav', () => {

  const pinia = createTestingPinia()
  const jobsStore = useJobsStore()

      const renderSubNav = () => {
        render(SubNav, {
          global: {
            plugins:[pinia],
            stubs: {
              FontAwesomeIcon: true
            }
          },
        }
      )
      return { jobsStore }
    }
    
  describe('when user is on the jobs page', () => {
   
    it('displays the job count',async () => {
      useRoute.mockReturnValue({name: 'JobResults'})

      const { jobsStore } =   renderSubNav()
      const numberOfJobs = 15

      jobsStore.FILTERED_JOBS = Array(numberOfJobs).fill({})
     
      const jobCount = await screen.findByText(numberOfJobs)
      expect(jobCount).toBeInTheDocument()
    })

  })

  describe('when user is not on the jobs page',async () => {
    it('does not display job count', () => {

      useRoute.mockReturnValue({name: 'Home'})

     const { jobsStore } = renderSubNav(  )
     const numberOfJobs = 15

     jobsStore.FILTERED_JOBS = Array(numberOfJobs).fill({})

      const jobCount = screen.queryByText(numberOfJobs)
      expect(jobCount).not.toBeInTheDocument()
    })
  })

})