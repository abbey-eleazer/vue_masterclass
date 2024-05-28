import { render, screen } from '@testing-library/vue'

import HeroText from '@/components/jobSearch/HeroText.vue'
import { nextTick } from 'vue'

describe('HeroText', () => {
  
    it(' displays introductory action verb', () => {
     vi.useFakeTimers()
     render(HeroText)

     const actionPhrase = screen.getByRole('heading', {
      name: /Build for everyone/i
    })

    expect(actionPhrase).toBeInTheDocument()
    vi.useRealTimers()

    })

    it('changes verb at a consistent interval', () => {
      vi.useFakeTimers()

      const mock = vi.fn()
      vi.stubGlobal('setInterval', mock)
      render(HeroText)
      expect(mock).toHaveBeenCalled()
      vi.useRealTimers()
    })

    it('swaps action verb after each interval', async () => {
      vi.useFakeTimers()
      render(HeroText)
      vi.advanceTimersToNextTimer()

      await nextTick()

      const actionPhrase = screen.getByRole('heading', {
        name: /create for everyone/i
      })

      expect(actionPhrase).toBeInTheDocument()
      vi.useRealTimers()
    })


    it('removes interval when component disapears', () => {
      vi.useFakeTimers()
      const clearInterval = vi.fn()
      vi.stubGlobal('clearInterval', clearInterval)

      const {unmount} = render(HeroText)
      unmount()

      expect(clearInterval).toHaveBeenCalled()
      vi .useRealTimers()

    })
})