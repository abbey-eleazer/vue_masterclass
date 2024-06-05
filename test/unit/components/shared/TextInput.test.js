import { render, screen } from '@testing-library/vue'
import { userEvent } from '@testing-library/user-event'
import TextInput from '@/components/Shared/TextInput.vue'

describe('TextInput', () => {
  it('communicates that a user has entered character', async () => {
     const { emitted } = render(TextInput, {
      props: {
        modelValue: '',
      }
     })

     const input = screen.getByRole('textbox')
     console.log(emitted())

     await userEvent.type(input, 'up')
     console.log(emitted())
  })
})