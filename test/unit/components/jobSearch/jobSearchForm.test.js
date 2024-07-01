import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'

import { useRouter } from 'vue-router'
vi.mock('vue-router')

import JobSearchForm from '@/components/jobSearch/JobSearchForm.vue'

describe('JobSearchForm', () => {
  describe('when user submits form', () => {
    it('directs user to job results page with users search parameters', async () => {
      const push = vi.fn()
      useRouter.mockReturnValue({ push })

      render(JobSearchForm, {
        global: {
          stubs: {
            FontAwesomeIcon: true
          }
        }
      })

      const roleInput = screen.getByRole('textbox', {
        name: /role/i
      })

      await userEvent.type(roleInput, 'vue developer')

      const locationInput = screen.getByRole('textbox', {
        name: /where?/i
      })

      await userEvent.type(locationInput, 'Accra')

      const submitButton = screen.getByRole('button', {
        name: /search/i
      })

      await userEvent.click(submitButton)

      expect(push).toHaveBeenCalledWith({
        name: 'JobResults',
        query: {
          role: 'vue developer',
          location: 'Accra'
        }
      })
    })
  })
})
