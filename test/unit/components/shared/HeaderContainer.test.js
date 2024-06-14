import {render, screen} from '@testing-library/vue'

import HeaderComponent from '@/components/Shared/HeaderComponent.vue'
import { describe, expect } from 'vitest'

describe('HeaderContainer', () => {
  it('allows parent component to provide title content', () => {
    render(HeaderComponent, {
      slots: {
        title: '<h2> some title </h2>'
      }
    })
    expect(screen.getByText('some title')).toBeInTheDocument()
  })

  it('allows parent component to provide subtitle content', () => {
    render(HeaderComponent, {
      slots: {
        subtitle: '<h3> some sub title </h3>'
      }
    })
    expect(screen.getByText('some sub title')).toBeInTheDocument()
  })
})