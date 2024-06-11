import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'

import CollapsableAccordion from '@/components/Shared/CollapsableAccordion.vue'

describe('CollapsableAccordion', () => {
  it('renders child content', async () => {
    render(CollapsableAccordion, {
      global: {
        stubs: {
          FontAwesomeIcon: true
        },
        },
        props: {
          header: 'My Page'
        },
        slots: {
          default: '<p>element</p>'
        }
    })

    expect(screen.queryByText('element')).not.toBeInTheDocument()
    const button = screen.getByRole('button', { name: /my page/i })
    await userEvent.click(button)
    expect(screen.getByText('element')).toBeInTheDocument()
  })
})
