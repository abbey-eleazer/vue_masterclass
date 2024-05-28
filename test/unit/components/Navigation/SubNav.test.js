import { render, screen } from '@testing-library/vue'
import SubNav from '@/components/Navigation/SubNav.vue'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

describe('SubNav', () => {
  describe('when user is on the jobs page', () => {
    it('displays the job count', () => {
      render(SubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true
          }
        },

        data() {
          return {
            onJobResultsPage: true
          }
        }
      })
      const jobCount = screen.getByText('12342')
      expect(jobCount).toBeInTheDocument()
    })

  })

  describe('when user is not on the jobs page', () => {
    it('does not display job count', () => {
      render(SubNav, {
        global: {
          stubs: {
            FontAwesomeIcon: true
          }
        },

        data() {
          return {
            onJobResultsPage: false
          }
        }
      })
      const jobCount = screen.queryByText('12342')
      expect(jobCount).not.toBeInTheDocument()
    })
  })
})