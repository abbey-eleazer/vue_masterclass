import { render, screen } from '@testing-library/vue'
import userEvent from '@testing-library/user-event'

import CollapsableAccordion from '@/components/Shared/CollapsableAccordion.vue'

describe('CollapsableAccordion', () => {

  const renderCollapsableAccordion = ( config = {} ) => {
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
        },
        ...config
    })
  }
  it('renders child content', async () => {
   const props = {
    header: 'My Page'
   }
   const slots = {
    default: '<p>element</p>'
   }
   const config = {props, slots}

   renderCollapsableAccordion(config)

    expect(screen.queryByText('element')).not.toBeInTheDocument()
    const button = screen.getByRole('button', { name: /my page/i })
    await userEvent.click(button)
    expect(screen.getByText('element')).toBeInTheDocument()
  })


describe('when parent does not provide custom child content', () => {

  it('renders default content', async() => {
    const props = {
      header: 'degree'
     }
     const slots = {}
   const config = {props, slots}

    renderCollapsableAccordion(config)
     
    const button = screen.getByRole('button', { name: /degree/i })
    await userEvent.click(button)
    expect(screen.getByText('opps forgot about somthing')).toBeInTheDocument()
  })
})
})