import {render, screen} from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { createTestingPinia } from '@pinia/testing'

import JobFilterSidebarOrganisations from '@/components/JobResult/JobFilterSidebar/JobFilterSidebarOrganisations.vue'
import { useJobsStore } from '@/Stores/jobs'
 

describe('JobFilterSidebarOrganizations', () => {
  it('renders unique list of organizations from jobs', async () => {
    const pinia = createTestingPinia()
    const jobsStore = useJobsStore()

    jobsStore.UNIQUE_ORGANIZATIONS = new Set(['Google', 'Amazon'])

    render(JobFilterSidebarOrganisations, {
        global: {
          plugins: [pinia],
          stubs: { FontAwesomeIcon: true }
        }
      }
    )

    const button = screen.getByRole('button', { name: /organizations/i})
    await userEvent.click(button)

    const organizationListItems = screen.getAllByRole('listitem')
    const organizations = organizationListItems.map((node) => node.textContent)
    expect(organizations).toEqual(['Google', 'Amazon'])
  })
})
