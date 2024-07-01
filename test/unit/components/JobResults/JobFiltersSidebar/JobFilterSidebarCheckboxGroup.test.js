import {render, screen} from '@testing-library/vue'
import userEvent from '@testing-library/user-event'
import { createTestingPinia } from '@pinia/testing'
import { useRouter } from 'vue-router'
vi.mock('vue-router')

import JobFilterSidebarCheckboxGroup from '@/components/JobResult/JobFilterSidebar/JobFilterSidebarCheckboxGroup.vue'

describe('JobFilterSidebarCheckboxGroup', () => {

  const createProps = (props = {}) => ({
    header: 'some header',
    uniqueValues: new Set(['ValueA', 'ValueB']),
    action: vi.fn(),
    ...props,
  })

  const renderJobFilterSidebarCheckboxGroup  = (props) => {
    const pinia = createTestingPinia()
    
    render(JobFilterSidebarCheckboxGroup, {
      props: { ...props },
      global: {
        plugins: [pinia],
        stubs: { FontAwesomeIcon: true }
      }
    }
  )
  }

  it('renders unique list of values', async () => {
    const props = createProps({
      header: 'Job Types',
      uniqueValues: new Set(['full-time', 'part-time'])
    })
    renderJobFilterSidebarCheckboxGroup(props)

    const button = screen.getByRole('button', { name: /job types/i})
    await userEvent.click(button)

    const jobTypeListItems = screen.getAllByRole('listitem')
    const jobTypes = jobTypeListItems.map((node) => node.textContent)
    expect(jobTypes).toEqual(['full-time', 'part-time'])
  })

describe('when user clicks the checkbox', () => {

  it.only('communicates that a user has selected chechbox for job type', async () => {
    useRouter.mockReturnValue({ push: vi.fn() })
    const action = vi.fn()
    const props = createProps({
      header: 'Job Types',
      uniqueValues: new Set(['Full-time', 'P art-time']),
      action,
    })
    renderJobFilterSidebarCheckboxGroup(props)

    const button = screen.getByRole('button', { name: /job types/i})
    await userEvent.click(button)

    const fullTimeCheckbox = screen.getByRole('checkbox', {name: /full-time/i})
    await userEvent.click(fullTimeCheckbox)
    expect(action).toHaveBeenCalledWith(['Full-time'])

  })

  it ('navigates user to job results page to see fresh batch of filtered jobs', async () => {
    const push = vi.fn()
    useRouter.mockReturnValue({ push })

    const props = createProps({
      header: 'Job Types',
      uniqueValues: new Set(['Full-time']),
    })
    renderJobFilterSidebarCheckboxGroup(props)

    const button = screen.getByRole('button', { name: /job types/i})
    await userEvent.click(button)

    const fullTimeCheckbox = screen.getByRole('checkbox', {name: /full-time/i})
    await userEvent.click(fullTimeCheckbox)

    expect(push).toHaveBeenCalledWith({ name: 'JobResults' })
  })
})
})
