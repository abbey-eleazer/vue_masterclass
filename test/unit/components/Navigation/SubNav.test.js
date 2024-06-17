import { render, screen } from '@testing-library/vue'


import SubNav from '@/components/Navigation/SubNav.vue'
import { useJobsStore } from '@/Stores/jobs'
import { createTestingPinia } from '@pinia/testing'

describe('SubNav', () => {

  const pinia = createTestingPinia()
  const jobsStore = useJobsStore()

      const renderSubNav = (routeName) => {
        render(SubNav, {
          global: {
            plugins:[pinia],
            mocks: {
              $route: {
                name: routeName,
              }
            },

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
      const routeName = 'JobResults'

      const { jobsStore } =   renderSubNav(routeName)
      const numberOfJobs = 15

      jobsStore.FILTERED_JOBS_BY_ORGANIZATIONS = Array(numberOfJobs).fill({})
     
      const jobCount = await screen.findByText(numberOfJobs)
      expect(jobCount).toBeInTheDocument()
    })

  })

  describe('when user is not on the jobs page',async () => {
    it('does not display job count', () => {

      const routeName = 'Home'

     const { jobsStore } = renderSubNav(routeName)
     const numberOfJobs = 15

     jobsStore.FILTERED_JOBS_BY_ORGANIZATIONS = Array(numberOfJobs).fill({})

      const jobCount = screen.queryByText(numberOfJobs)
      expect(jobCount).not.toBeInTheDocument()
    })
  })

})