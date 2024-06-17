import {render, screen} from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { createTestingPinia } from '@pinia/testing'

import JobFilterSidebarJobTypes from '@/components/JobResult/JobFilterSidebar/JobFilterSidebarJobTypes.vue'
import { useJobsStore } from '@/Stores/jobs'
import { useUserStore } from '@/Stores/user'
 

describe('JobFilterSidebarJobTypes', () => {

  const renderJobFilterSidebarJobTypes = () => {
    const pinia = createTestingPinia()
    const userStore = useUserStore()
    const jobsStore = useJobsStore()

    
    render(JobFilterSidebarJobTypes, {
      global: {
        plugins: [pinia],
        stubs: { FontAwesomeIcon: true }
      }
    }
  )
  return { jobsStore, userStore }
  }

  it('renders unique list of job type from jobs', async () => {
    const { jobsStore } = renderJobFilterSidebarJobTypes()

    jobsStore.UNIQUE_JOB_TYPES = new Set(['full-time', 'part-time'])

    const button = screen.getByRole('button', { name: /job types/i})
    await userEvent.click(button)

    const jobTypeListItems = screen.getAllByRole('listitem')
    const jobTypes = jobTypeListItems.map((node) => node.textContent)
    expect(jobTypes).toEqual(['full-time', 'part-time'])
  })

  it('communicates that a user has selected chechbox for job type', async () => {
    const { jobsStore, userStore } = renderJobFilterSidebarJobTypes()

    jobsStore.UNIQUE_JOB_TYPES = new Set(['Full-time', 'Part-time'])

    const button = screen.getByRole('button', { name: /job types/i})
    await userEvent.click(button)

    const fullTimeCheckbox = screen.getByRole('checkbox', {name: /full-time/i})
    await userEvent.click(fullTimeCheckbox)
    expect(userStore.ADD_SELECTED_JOB_TYPES).toHaveBeenCalledWith(['Full-time'])

  })
})
