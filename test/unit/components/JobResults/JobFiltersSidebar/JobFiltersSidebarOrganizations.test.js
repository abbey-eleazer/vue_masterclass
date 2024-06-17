import {render, screen} from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { createTestingPinia } from '@pinia/testing'

import JobFilterSidebarOrganisations from '@/components/JobResult/JobFilterSidebar/JobFilterSidebarOrganisations.vue'
import { useJobsStore } from '@/Stores/jobs'
import { useUserStore } from '@/Stores/user'
 

describe('JobFilterSidebarOrganizations', () => {

  const renderJobFilterSidebarOrganisations = () => {
    const pinia = createTestingPinia()
    const userStore = useUserStore()
    const jobsStore = useJobsStore()

    
    render(JobFilterSidebarOrganisations, {
      global: {
        plugins: [pinia],
        stubs: { FontAwesomeIcon: true }
      }
    }
  )
  return { jobsStore, userStore }
  }

  it('renders unique list of organizations from jobs', async () => {
    const { jobsStore } = renderJobFilterSidebarOrganisations()

    jobsStore.UNIQUE_ORGANIZATIONS = new Set(['Google', 'Amazon'])

    const button = screen.getByRole('button', { name: /organizations/i})
    await userEvent.click(button)

    const organizationListItems = screen.getAllByRole('listitem')
    const organizations = organizationListItems.map((node) => node.textContent)
    expect(organizations).toEqual(['Google', 'Amazon'])
  })

  it('communicates that a user has selected chechbox for organization', async () => {
    const { jobsStore, userStore } = renderJobFilterSidebarOrganisations()

    jobsStore.UNIQUE_ORGANIZATIONS = new Set(['Google', 'Amazon'])

    const button = screen.getByRole('button', { name: /organizations/i})
    await userEvent.click(button)

    const googleCheckbox = screen.getByRole('checkbox', {name: /google/i})
    await userEvent.click(googleCheckbox)
    expect(userStore.ADD_SELECTED_ORGANIZATIONS).toHaveBeenCalledWith(['Google'])

  })
})
