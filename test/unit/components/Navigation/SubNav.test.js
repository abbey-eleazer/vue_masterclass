import { render, screen } from '@testing-library/vue'
import SubNav from '@/components/Navigation/SubNav.vue'

describe('SubNav', () => {

      const renderSubNav = (routeName) => {
        render(SubNav, {
          global: {
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
    }
    
  describe('when user is on the jobs page', () => {
   
    it('displays the job count', () => {
      const routeName = 'JobResults'

      renderSubNav(routeName)
     
      const jobCount = screen.getByText('12342')
      expect(jobCount).toBeInTheDocument()
    })

  })

  describe('when user is not on the jobs page', () => {
    it('does not display job count', () => {

      const routeName = 'Home'

     renderSubNav(routeName)

      const jobCount = screen.queryByText('12342')
      expect(jobCount).not.toBeInTheDocument()
    })
  })

})